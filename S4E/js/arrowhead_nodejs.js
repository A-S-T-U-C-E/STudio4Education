function startRegister () {
  return initExpress()
    .then(() => {
      return new Promise((resolve) => {
        app.listen(config.port, () => {
          console.log('Provider started', {env: config.env, port: config.providerPort})
          return resolve()
        })
      })
    })
    .then(async () => {
      await register().catch((err) => console.log('Error registering service into SR', err))
    })
    .catch(async (e) => {
      console.log(`Provider not started on ${os.hostname()}, now exiting.\n`, e)
      process.exit()
    })
}


function initRegisterExpress () {

  if (config.env !== 'test' && config.env !== 'production') {
    app.use(logger('dev'))
  }
  app.use(cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true
  }))
  app.use(responseMiddleware())
  app.use(bodyParser.json({limit: '5mb'}))
  app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}))

  //Add your routes here
  app.use('/', consumerRouter)

  app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    res.locals.message = err.message
    res.locals.error = config.env === 'development' ? err : {}
    throw Boom.create(404, err)
  })
  app.use(errorMiddleware())
}