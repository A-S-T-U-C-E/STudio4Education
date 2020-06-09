var SERVER_PORT = 8443;
var serviceVersion = 1;
var serviceURI = "temperature";
var ssid = "Stduio4Education";
var password = "arrowhead";

//TODO: modify these accordingly, and add additional service metadata at line 94 if needed!
var serviceRegistry_addr = "http://arrowhead.tmit.bme.hu:8442";
var serviceDefinition = "Studio4Education";
var serviceInterface = "JSON_Insecure_S4E";
var systemName = "InsecureBlocklyInterface";


  //building ServiceRegistryEntry on my own
  StaticJsonBuffer<500> SREntry;
  JsonObject& root = SREntry.createObject();
  JsonObject& providedService = root.createNestedObject("providedService");
  providedService["serviceDefinition"] = serviceDefinition;
  JsonObject& metadata = providedService.createNestedObject("metadata");
  JsonArray& interfaces = providedService.createNestedArray("interfaces");
  interfaces.add(serviceInterface);

  //TODO: add service metadata if you need!
  metadata["unit"]="celsius";

  root.createNestedObject("provider");
  root["provider"]["systemName"] = systemName;
  root["provider"]["address"] = WiFi.localIP().toString();
  root["port"] =SERVER_PORT;
  root["serviceURI"] = serviceURI;
  root["version"] =serviceVersion;

  String SRentry;
  root.prettyPrintTo(SRentry);

  //registering myself in the ServiceRegistry
  HTTPClient http_sr;
  http_sr.begin(String(serviceRegistry_addr) + "/serviceregistry/register"); //Specify destination for HTTP request
  http_sr.addHeader("Content-Type", "application/json"); //Specify content-type header
  int httpResponseCode_sr = http_sr.POST(String(SRentry)); //Send the actual POST request
  
  if (httpResponseCode_sr<0) {
    Serial.println("ServiceRegistry is not available!");
    http_sr.end();  //Free resources
  } else {
    Serial.print("Registered to SR with status code:");
    Serial.println(httpResponseCode_sr);
    String response_sr = http_sr.getString();                       //Get the response to the request
    http_sr.end();  //Free resources
    if (httpResponseCode_sr!=HTTP_CODE_CREATED) { //SR responded properly, check if registration was successful
        Serial.println("Service registration failed with response:");
        Serial.println(response_sr);           //Print request answer
  
        //need to remove our previous entry and then re-register
        HTTPClient http_remove;
        http_remove.begin(String(serviceRegistry_addr) + "/serviceregistry/remove"); //Specify destination for HTTP request
        http_remove.addHeader("Content-Type", "application/json"); //Specify content-type header
        int httpResponseCode_remove = http_remove.PUT(String(SRentry)); //Send the actual PUT request
        Serial.print("Removed previous entry with status code:");
        Serial.println(httpResponseCode_remove);
        String response_remove = http_remove.getString();                       //Get the response to the request
        Serial.println(response_remove);           //Print request answer
        http_remove.end();  //Free resources
  
        HTTPClient http_renew;
        http_renew.begin(String(serviceRegistry_addr) + "/serviceregistry/register"); //Specify destination for HTTP request
        http_renew.addHeader("Content-Type", "application/json"); //Specify content-type header
        int httpResponseCode_renew = http_renew.POST(String(SRentry)); //Send the actual POST request
        Serial.print("Re-registered with status code:");
        Serial.println(httpResponseCode_renew);
        String response_renew = http_renew.getString();                       //Get the response to the request
        Serial.println(response_renew);           //Print request answer
        http_renew.end();  //Free resources
      }    
    } // if-else: SR is online and its responses were valid

    //waiting here a little for no reason, can be deleted!
    delay(1000);

  Serial.println("Starting server!");

  //adding a '/' in front of the serviceURI!
  char path[30];
  String pathString = String("/") + String(serviceURI);
  pathString.toCharArray(path, 20);

  //starting the webserver
  server.on(path, HTTP_GET, [](AsyncWebServerRequest *request){
    Serial.println("Received HTTP request, responding with:");

    //TODO: do your sensor measurement
    double temperature = 21.0;
    
    //build the SenML format
    time_t now;
    time(&now);
    StaticJsonBuffer<500> doc;
    JsonObject& root = doc.createObject();
    root["bn"]=systemName;
    root["bt"]=now;
    root["bu"]="celsius";
    root["ver"]=1;
    JsonArray& e = root.createNestedArray("e");
    JsonObject& meas = e.createNestedObject();
    meas["n"] = String(serviceDefinition) + "_" + String (serviceInterface);
    meas["v"] = temperature;
    meas["t"] = 0;

    String response;
    root.prettyPrintTo(response);
    request->send(200, "application/json", response);
    Serial.println(response);
  });
  server.begin();

  //prepare LED pin
  pinMode(LED_BUILTIN, OUTPUT);
}