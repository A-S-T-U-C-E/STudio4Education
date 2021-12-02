// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"compile.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildHex = void 0;
const url = 'https://hexi.wokwi.com';

async function buildHex(source) {
  const resp = await fetch(url + '/build', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sketch: source
    })
  });
  return await resp.json();
}

exports.buildHex = buildHex;
},{}],"cpu-performance.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CPUPerformance = void 0;

class CPUPerformance {
  constructor(cpu, MHZ) {
    this.cpu = cpu;
    this.MHZ = MHZ;
    this.prevTime = 0;
    this.prevCycles = 0;
    this.samples = new Float32Array(64);
    this.sampleIndex = 0;
  }

  reset() {
    this.prevTime = 0;
    this.prevCycles = 0;
    this.sampleIndex = 0;
  }

  update() {
    if (this.prevTime) {
      const delta = performance.now() - this.prevTime;
      const deltaCycles = this.cpu.cycles - this.prevCycles;
      const deltaCpuMillis = 1000 * (deltaCycles / this.MHZ);
      const factor = deltaCpuMillis / delta;

      if (!this.sampleIndex) {
        this.samples.fill(factor);
      }

      this.samples[this.sampleIndex++ % this.samples.length] = factor;
    }

    this.prevCycles = this.cpu.cycles;
    this.prevTime = performance.now();
    const avg = this.samples.reduce((x, y) => x + y) / this.samples.length;
    return avg;
  }

}

exports.CPUPerformance = CPUPerformance;
},{}],"../../src/cpu/cpu.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CPU = void 0;

/**
 * AVR 8 CPU data structures
 * Part of AVR8js
 *
 * Copyright (C) 2019, Uri Shaked
 */
const registerSpace = 0x100;

class CPU {
  constructor(progMem, sramBytes = 8192) {
    this.progMem = progMem;
    this.sramBytes = sramBytes;
    this.data = new Uint8Array(this.sramBytes + registerSpace);
    this.data16 = new Uint16Array(this.data.buffer);
    this.dataView = new DataView(this.data.buffer);
    this.progBytes = new Uint8Array(this.progMem.buffer);
    this.readHooks = [];
    this.writeHooks = [];
    this.pc22Bits = this.progBytes.length > 0x20000; // This lets the Timer Compare output override GPIO pins:

    this.gpioTimerHooks = [];
    this.pc = 0;
    this.cycles = 0;
    this.reset();
  }

  reset() {
    this.data.fill(0);
    this.SP = this.data.length - 1;
  }

  readData(addr) {
    if (addr >= 32 && this.readHooks[addr]) {
      return this.readHooks[addr](addr);
    }

    return this.data[addr];
  }

  writeData(addr, value) {
    const hook = this.writeHooks[addr];

    if (hook) {
      if (hook(value, this.data[addr], addr)) {
        return;
      }
    }

    this.data[addr] = value;
  }

  get SP() {
    return this.dataView.getUint16(93, true);
  }

  set SP(value) {
    this.dataView.setUint16(93, value, true);
  }

  get SREG() {
    return this.data[95];
  }

  get interruptsEnabled() {
    return this.SREG & 0x80 ? true : false;
  }

}

exports.CPU = CPU;
},{}],"../../src/cpu/instruction.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avrInstruction = avrInstruction;

/**
 * AVR-8 Instruction Simulation
 * Part of AVR8js
 *
 * Reference: http://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf
 *
 * Instruction timing is currently based on ATmega328p (see the Instruction Set Summary at the end of
 * the datasheet)
 *
 * Copyright (C) 2019, 2020 Uri Shaked
 */
function isTwoWordInstruction(opcode) {
  return (
    /* LDS */
    (opcode & 0xfe0f) === 0x9000 ||
    /* STS */
    (opcode & 0xfe0f) === 0x9200 ||
    /* CALL */
    (opcode & 0xfe0e) === 0x940e ||
    /* JMP */
    (opcode & 0xfe0e) === 0x940c
  );
}

function avrInstruction(cpu) {
  const opcode = cpu.progMem[cpu.pc];

  if ((opcode & 0xfc00) === 0x1c00) {
    /* ADC, 0001 11rd dddd rrrr */
    const d = cpu.data[(opcode & 0x1f0) >> 4];
    const r = cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    const sum = d + r + (cpu.data[95] & 1);
    const R = sum & 255;
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xc0;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= (R ^ r) & (d ^ R) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= sum & 256 ? 1 : 0;
    sreg |= 1 & (d & r | r & ~R | ~R & d) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfc00) === 0xc00) {
    /* ADD, 0000 11rd dddd rrrr */
    const d = cpu.data[(opcode & 0x1f0) >> 4];
    const r = cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    const R = d + r & 255;
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xc0;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= (R ^ r) & (R ^ d) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= d + r & 256 ? 1 : 0;
    sreg |= 1 & (d & r | r & ~R | ~R & d) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xff00) === 0x9600) {
    /* ADIW, 1001 0110 KKdd KKKK */
    const addr = 2 * ((opcode & 0x30) >> 4) + 24;
    const value = cpu.dataView.getUint16(addr, true);
    const R = value + (opcode & 0xf | (opcode & 0xc0) >> 2) & 0xffff;
    cpu.dataView.setUint16(addr, R, true);
    let sreg = cpu.data[95] & 0xe0;
    sreg |= R ? 0 : 2;
    sreg |= 0x8000 & R ? 4 : 0;
    sreg |= ~value & R & 0x8000 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= ~R & value & 0x8000 ? 1 : 0;
    cpu.data[95] = sreg;
    cpu.cycles++;
  } else if ((opcode & 0xfc00) === 0x2000) {
    /* AND, 0010 00rd dddd rrrr */
    const R = cpu.data[(opcode & 0x1f0) >> 4] & cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xe1;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xf000) === 0x7000) {
    /* ANDI, 0111 KKKK dddd KKKK */
    const R = cpu.data[((opcode & 0xf0) >> 4) + 16] & (opcode & 0xf | (opcode & 0xf00) >> 4);
    cpu.data[((opcode & 0xf0) >> 4) + 16] = R;
    let sreg = cpu.data[95] & 0xe1;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfe0f) === 0x9405) {
    /* ASR, 1001 010d dddd 0101 */
    const value = cpu.data[(opcode & 0x1f0) >> 4];
    const R = value >>> 1 | 128 & value;
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xe0;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= value & 1;
    sreg |= sreg >> 2 & 1 ^ sreg & 1 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xff8f) === 0x9488) {
    /* BCLR, 1001 0100 1sss 1000 */
    cpu.data[95] &= ~(1 << ((opcode & 0x70) >> 4));
  } else if ((opcode & 0xfe08) === 0xf800) {
    /* BLD, 1111 100d dddd 0bbb */
    const b = opcode & 7;
    const d = (opcode & 0x1f0) >> 4;
    cpu.data[d] = ~(1 << b) & cpu.data[d] | (cpu.data[95] >> 6 & 1) << b;
  } else if ((opcode & 0xfc00) === 0xf400) {
    /* BRBC, 1111 01kk kkkk ksss */
    if (!(cpu.data[95] & 1 << (opcode & 7))) {
      cpu.pc = cpu.pc + (((opcode & 0x1f8) >> 3) - (opcode & 0x200 ? 0x40 : 0));
      cpu.cycles++;
    }
  } else if ((opcode & 0xfc00) === 0xf000) {
    /* BRBS, 1111 00kk kkkk ksss */
    if (cpu.data[95] & 1 << (opcode & 7)) {
      cpu.pc = cpu.pc + (((opcode & 0x1f8) >> 3) - (opcode & 0x200 ? 0x40 : 0));
      cpu.cycles++;
    }
  } else if ((opcode & 0xff8f) === 0x9408) {
    /* BSET, 1001 0100 0sss 1000 */
    cpu.data[95] |= 1 << ((opcode & 0x70) >> 4);
  } else if ((opcode & 0xfe08) === 0xfa00) {
    /* BST, 1111 101d dddd 0bbb */
    const d = cpu.data[(opcode & 0x1f0) >> 4];
    const b = opcode & 7;
    cpu.data[95] = cpu.data[95] & 0xbf | (d >> b & 1 ? 0x40 : 0);
  } else if ((opcode & 0xfe0e) === 0x940e) {
    /* CALL, 1001 010k kkkk 111k kkkk kkkk kkkk kkkk */
    const k = cpu.progMem[cpu.pc + 1] | (opcode & 1) << 16 | (opcode & 0x1f0) << 13;
    const ret = cpu.pc + 2;
    const sp = cpu.dataView.getUint16(93, true);
    const {
      pc22Bits
    } = cpu;
    cpu.data[sp] = 255 & ret;
    cpu.data[sp - 1] = ret >> 8 & 255;

    if (pc22Bits) {
      cpu.data[sp - 2] = ret >> 16 & 255;
    }

    cpu.dataView.setUint16(93, sp - (pc22Bits ? 3 : 2), true);
    cpu.pc = k - 1;
    cpu.cycles += pc22Bits ? 4 : 3;
  } else if ((opcode & 0xff00) === 0x9800) {
    /* CBI, 1001 1000 AAAA Abbb */
    const A = opcode & 0xf8;
    const b = opcode & 7;
    const R = cpu.readData((A >> 3) + 32);
    cpu.writeData((A >> 3) + 32, R & ~(1 << b));
  } else if ((opcode & 0xfe0f) === 0x9400) {
    /* COM, 1001 010d dddd 0000 */
    const d = (opcode & 0x1f0) >> 4;
    const R = 255 - cpu.data[d];
    cpu.data[d] = R;
    let sreg = cpu.data[95] & 0xe1 | 1;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfc00) === 0x1400) {
    /* CP, 0001 01rd dddd rrrr */
    const val1 = cpu.data[(opcode & 0x1f0) >> 4];
    const val2 = cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    const R = val1 - val2;
    let sreg = cpu.data[95] & 0xc0;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= 0 !== ((val1 ^ val2) & (val1 ^ R) & 128) ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= val2 > val1 ? 1 : 0;
    sreg |= 1 & (~val1 & val2 | val2 & R | R & ~val1) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfc00) === 0x400) {
    /* CPC, 0000 01rd dddd rrrr */
    const arg1 = cpu.data[(opcode & 0x1f0) >> 4];
    const arg2 = cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    let sreg = cpu.data[95];
    const r = arg1 - arg2 - (sreg & 1);
    sreg = sreg & 0xc0 | (!r && sreg >> 1 & 1 ? 2 : 0) | (arg2 + (sreg & 1) > arg1 ? 1 : 0);
    sreg |= 128 & r ? 4 : 0;
    sreg |= (arg1 ^ arg2) & (arg1 ^ r) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= 1 & (~arg1 & arg2 | arg2 & r | r & ~arg1) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xf000) === 0x3000) {
    /* CPI, 0011 KKKK dddd KKKK */
    const arg1 = cpu.data[((opcode & 0xf0) >> 4) + 16];
    const arg2 = opcode & 0xf | (opcode & 0xf00) >> 4;
    const r = arg1 - arg2;
    let sreg = cpu.data[95] & 0xc0;
    sreg |= r ? 0 : 2;
    sreg |= 128 & r ? 4 : 0;
    sreg |= (arg1 ^ arg2) & (arg1 ^ r) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= arg2 > arg1 ? 1 : 0;
    sreg |= 1 & (~arg1 & arg2 | arg2 & r | r & ~arg1) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfc00) === 0x1000) {
    /* CPSE, 0001 00rd dddd rrrr */
    if (cpu.data[(opcode & 0x1f0) >> 4] === cpu.data[opcode & 0xf | (opcode & 0x200) >> 5]) {
      const nextOpcode = cpu.progMem[cpu.pc + 1];
      const skipSize = isTwoWordInstruction(nextOpcode) ? 2 : 1;
      cpu.pc += skipSize;
      cpu.cycles += skipSize;
    }
  } else if ((opcode & 0xfe0f) === 0x940a) {
    /* DEC, 1001 010d dddd 1010 */
    const value = cpu.data[(opcode & 0x1f0) >> 4];
    const R = value - 1;
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xe1;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= 128 === value ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if (opcode === 0x9519) {
    /* EICALL, 1001 0101 0001 1001 */
    const retAddr = cpu.pc + 1;
    const sp = cpu.dataView.getUint16(93, true);
    const eind = cpu.data[0x3c];
    cpu.data[sp] = retAddr & 255;
    cpu.data[sp - 1] = retAddr >> 8 & 255;
    cpu.dataView.setUint16(93, sp - 2, true);
    cpu.pc = (eind << 16 | cpu.dataView.getUint16(30, true)) - 1;
    cpu.cycles += 3;
  } else if (opcode === 0x9419) {
    /* EIJMP, 1001 0100 0001 1001 */
    const eind = cpu.data[0x3c];
    cpu.pc = (eind << 16 | cpu.dataView.getUint16(30, true)) - 1;
    cpu.cycles++;
  } else if (opcode === 0x95d8) {
    /* ELPM, 1001 0101 1101 1000 */
    const rampz = cpu.data[0x3b];
    cpu.data[0] = cpu.progBytes[rampz << 16 | cpu.dataView.getUint16(30, true)];
    cpu.cycles += 2;
  } else if ((opcode & 0xfe0f) === 0x9006) {
    /* ELPM(REG), 1001 000d dddd 0110 */
    const rampz = cpu.data[0x3b];
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.progBytes[rampz << 16 | cpu.dataView.getUint16(30, true)];
    cpu.cycles += 2;
  } else if ((opcode & 0xfe0f) === 0x9007) {
    /* ELPM(INC), 1001 000d dddd 0111 */
    const rampz = cpu.data[0x3b];
    const i = cpu.dataView.getUint16(30, true);
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.progBytes[rampz << 16 | i];
    cpu.dataView.setUint16(30, i + 1, true);

    if (i === 0xffff) {
      cpu.data[0x3b] = (rampz + 1) % (cpu.progBytes.length >> 16);
    }

    cpu.cycles += 2;
  } else if ((opcode & 0xfc00) === 0x2400) {
    /* EOR, 0010 01rd dddd rrrr */
    const R = cpu.data[(opcode & 0x1f0) >> 4] ^ cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xe1;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xff88) === 0x308) {
    /* FMUL, 0000 0011 0ddd 1rrr */
    const v1 = cpu.data[((opcode & 0x70) >> 4) + 16];
    const v2 = cpu.data[(opcode & 7) + 16];
    const R = v1 * v2 << 1;
    cpu.dataView.setUint16(0, R, true);
    cpu.data[95] = cpu.data[95] & 0xfc | (0xffff & R ? 0 : 2) | (v1 * v2 & 0x8000 ? 1 : 0);
    cpu.cycles++;
  } else if ((opcode & 0xff88) === 0x380) {
    /* FMULS, 0000 0011 1ddd 0rrr */
    const v1 = cpu.dataView.getInt8(((opcode & 0x70) >> 4) + 16);
    const v2 = cpu.dataView.getInt8((opcode & 7) + 16);
    const R = v1 * v2 << 1;
    cpu.dataView.setInt16(0, R, true);
    cpu.data[95] = cpu.data[95] & 0xfc | (0xffff & R ? 0 : 2) | (v1 * v2 & 0x8000 ? 1 : 0);
    cpu.cycles++;
  } else if ((opcode & 0xff88) === 0x388) {
    /* FMULSU, 0000 0011 1ddd 1rrr */
    const v1 = cpu.dataView.getInt8(((opcode & 0x70) >> 4) + 16);
    const v2 = cpu.data[(opcode & 7) + 16];
    const R = v1 * v2 << 1;
    cpu.dataView.setInt16(0, R, true);
    cpu.data[95] = cpu.data[95] & 0xfc | (0xffff & R ? 2 : 0) | (v1 * v2 & 0x8000 ? 1 : 0);
    cpu.cycles++;
  } else if (opcode === 0x9509) {
    /* ICALL, 1001 0101 0000 1001 */
    const retAddr = cpu.pc + 1;
    const sp = cpu.dataView.getUint16(93, true);
    const {
      pc22Bits
    } = cpu;
    cpu.data[sp] = retAddr & 255;
    cpu.data[sp - 1] = retAddr >> 8 & 255;

    if (pc22Bits) {
      cpu.data[sp - 2] = retAddr >> 16 & 255;
    }

    cpu.dataView.setUint16(93, sp - (pc22Bits ? 3 : 2), true);
    cpu.pc = cpu.dataView.getUint16(30, true) - 1;
    cpu.cycles += pc22Bits ? 3 : 2;
  } else if (opcode === 0x9409) {
    /* IJMP, 1001 0100 0000 1001 */
    cpu.pc = cpu.dataView.getUint16(30, true) - 1;
    cpu.cycles++;
  } else if ((opcode & 0xf800) === 0xb000) {
    /* IN, 1011 0AAd dddd AAAA */
    const i = cpu.readData((opcode & 0xf | (opcode & 0x600) >> 5) + 32);
    cpu.data[(opcode & 0x1f0) >> 4] = i;
  } else if ((opcode & 0xfe0f) === 0x9403) {
    /* INC, 1001 010d dddd 0011 */
    const d = cpu.data[(opcode & 0x1f0) >> 4];
    const r = d + 1 & 255;
    cpu.data[(opcode & 0x1f0) >> 4] = r;
    let sreg = cpu.data[95] & 0xe1;
    sreg |= r ? 0 : 2;
    sreg |= 128 & r ? 4 : 0;
    sreg |= 127 === d ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfe0e) === 0x940c) {
    /* JMP, 1001 010k kkkk 110k kkkk kkkk kkkk kkkk */
    cpu.pc = (cpu.progMem[cpu.pc + 1] | (opcode & 1) << 16 | (opcode & 0x1f0) << 13) - 1;
    cpu.cycles += 2;
  } else if ((opcode & 0xfe0f) === 0x9206) {
    /* LAC, 1001 001r rrrr 0110 */
    const r = (opcode & 0x1f0) >> 4;
    const clear = cpu.data[r];
    const value = cpu.readData(cpu.dataView.getUint16(30, true));
    cpu.writeData(cpu.dataView.getUint16(30, true), value & 255 - clear);
    cpu.data[r] = value;
  } else if ((opcode & 0xfe0f) === 0x9205) {
    /* LAS, 1001 001r rrrr 0101 */
    const r = (opcode & 0x1f0) >> 4;
    const set = cpu.data[r];
    const value = cpu.readData(cpu.dataView.getUint16(30, true));
    cpu.writeData(cpu.dataView.getUint16(30, true), value | set);
    cpu.data[r] = value;
  } else if ((opcode & 0xfe0f) === 0x9207) {
    /* LAT, 1001 001r rrrr 0111 */
    const r = cpu.data[(opcode & 0x1f0) >> 4];
    const R = cpu.readData(cpu.dataView.getUint16(30, true));
    cpu.writeData(cpu.dataView.getUint16(30, true), r ^ R);
    cpu.data[(opcode & 0x1f0) >> 4] = R;
  } else if ((opcode & 0xf000) === 0xe000) {
    /* LDI, 1110 KKKK dddd KKKK */
    cpu.data[((opcode & 0xf0) >> 4) + 16] = opcode & 0xf | (opcode & 0xf00) >> 4;
  } else if ((opcode & 0xfe0f) === 0x9000) {
    /* LDS, 1001 000d dddd 0000 kkkk kkkk kkkk kkkk */
    cpu.cycles++;
    const value = cpu.readData(cpu.progMem[cpu.pc + 1]);
    cpu.data[(opcode & 0x1f0) >> 4] = value;
    cpu.pc++;
  } else if ((opcode & 0xfe0f) === 0x900c) {
    /* LDX, 1001 000d dddd 1100 */
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(cpu.dataView.getUint16(26, true));
  } else if ((opcode & 0xfe0f) === 0x900d) {
    /* LDX(INC), 1001 000d dddd 1101 */
    const x = cpu.dataView.getUint16(26, true);
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(x);
    cpu.dataView.setUint16(26, x + 1, true);
  } else if ((opcode & 0xfe0f) === 0x900e) {
    /* LDX(DEC), 1001 000d dddd 1110 */
    const x = cpu.dataView.getUint16(26, true) - 1;
    cpu.dataView.setUint16(26, x, true);
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(x);
  } else if ((opcode & 0xfe0f) === 0x8008) {
    /* LDY, 1000 000d dddd 1000 */
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(cpu.dataView.getUint16(28, true));
  } else if ((opcode & 0xfe0f) === 0x9009) {
    /* LDY(INC), 1001 000d dddd 1001 */
    const y = cpu.dataView.getUint16(28, true);
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(y);
    cpu.dataView.setUint16(28, y + 1, true);
  } else if ((opcode & 0xfe0f) === 0x900a) {
    /* LDY(DEC), 1001 000d dddd 1010 */
    const y = cpu.dataView.getUint16(28, true) - 1;
    cpu.dataView.setUint16(28, y, true);
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(y);
  } else if ((opcode & 0xd208) === 0x8008 && opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8) {
    /* LDDY, 10q0 qq0d dddd 1qqq */
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(cpu.dataView.getUint16(28, true) + (opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8));
  } else if ((opcode & 0xfe0f) === 0x8000) {
    /* LDZ, 1000 000d dddd 0000 */
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(cpu.dataView.getUint16(30, true));
  } else if ((opcode & 0xfe0f) === 0x9001) {
    /* LDZ(INC), 1001 000d dddd 0001 */
    const z = cpu.dataView.getUint16(30, true);
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(z);
    cpu.dataView.setUint16(30, z + 1, true);
  } else if ((opcode & 0xfe0f) === 0x9002) {
    /* LDZ(DEC), 1001 000d dddd 0010 */
    const z = cpu.dataView.getUint16(30, true) - 1;
    cpu.dataView.setUint16(30, z, true);
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(z);
  } else if ((opcode & 0xd208) === 0x8000 && opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8) {
    /* LDDZ, 10q0 qq0d dddd 0qqq */
    cpu.cycles++;
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.readData(cpu.dataView.getUint16(30, true) + (opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8));
  } else if (opcode === 0x95c8) {
    /* LPM, 1001 0101 1100 1000 */
    cpu.data[0] = cpu.progBytes[cpu.dataView.getUint16(30, true)];
    cpu.cycles += 2;
  } else if ((opcode & 0xfe0f) === 0x9004) {
    /* LPM(REG), 1001 000d dddd 0100 */
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.progBytes[cpu.dataView.getUint16(30, true)];
    cpu.cycles += 2;
  } else if ((opcode & 0xfe0f) === 0x9005) {
    /* LPM(INC), 1001 000d dddd 0101 */
    const i = cpu.dataView.getUint16(30, true);
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.progBytes[i];
    cpu.dataView.setUint16(30, i + 1, true);
    cpu.cycles += 2;
  } else if ((opcode & 0xfe0f) === 0x9406) {
    /* LSR, 1001 010d dddd 0110 */
    const value = cpu.data[(opcode & 0x1f0) >> 4];
    const R = value >>> 1;
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xe0;
    sreg |= R ? 0 : 2;
    sreg |= value & 1;
    sreg |= sreg >> 2 & 1 ^ sreg & 1 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfc00) === 0x2c00) {
    /* MOV, 0010 11rd dddd rrrr */
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
  } else if ((opcode & 0xff00) === 0x100) {
    /* MOVW, 0000 0001 dddd rrrr */
    const r2 = 2 * (opcode & 0xf);
    const d2 = 2 * ((opcode & 0xf0) >> 4);
    cpu.data[d2] = cpu.data[r2];
    cpu.data[d2 + 1] = cpu.data[r2 + 1];
  } else if ((opcode & 0xfc00) === 0x9c00) {
    /* MUL, 1001 11rd dddd rrrr */
    const R = cpu.data[(opcode & 0x1f0) >> 4] * cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    cpu.dataView.setUint16(0, R, true);
    cpu.data[95] = cpu.data[95] & 0xfc | (0xffff & R ? 0 : 2) | (0x8000 & R ? 1 : 0);
    cpu.cycles++;
  } else if ((opcode & 0xff00) === 0x200) {
    /* MULS, 0000 0010 dddd rrrr */
    const R = cpu.dataView.getInt8(((opcode & 0xf0) >> 4) + 16) * cpu.dataView.getInt8((opcode & 0xf) + 16);
    cpu.dataView.setInt16(0, R, true);
    cpu.data[95] = cpu.data[95] & 0xfc | (0xffff & R ? 0 : 2) | (0x8000 & R ? 1 : 0);
    cpu.cycles++;
  } else if ((opcode & 0xff88) === 0x300) {
    /* MULSU, 0000 0011 0ddd 0rrr */
    const R = cpu.dataView.getInt8(((opcode & 0x70) >> 4) + 16) * cpu.data[(opcode & 7) + 16];
    cpu.dataView.setInt16(0, R, true);
    cpu.data[95] = cpu.data[95] & 0xfc | (0xffff & R ? 0 : 2) | (0x8000 & R ? 1 : 0);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x9401) {
    /* NEG, 1001 010d dddd 0001 */
    const d = (opcode & 0x1f0) >> 4;
    const value = cpu.data[d];
    const R = 0 - value;
    cpu.data[d] = R;
    let sreg = cpu.data[95] & 0xc0;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= 128 === R ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= R ? 1 : 0;
    sreg |= 1 & (R | value) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if (opcode === 0) {
    /* NOP, 0000 0000 0000 0000 */

    /* NOP */
  } else if ((opcode & 0xfc00) === 0x2800) {
    /* OR, 0010 10rd dddd rrrr */
    const R = cpu.data[(opcode & 0x1f0) >> 4] | cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xe1;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xf000) === 0x6000) {
    /* SBR, 0110 KKKK dddd KKKK */
    const R = cpu.data[((opcode & 0xf0) >> 4) + 16] | (opcode & 0xf | (opcode & 0xf00) >> 4);
    cpu.data[((opcode & 0xf0) >> 4) + 16] = R;
    let sreg = cpu.data[95] & 0xe1;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xf800) === 0xb800) {
    /* OUT, 1011 1AAr rrrr AAAA */
    cpu.writeData((opcode & 0xf | (opcode & 0x600) >> 5) + 32, cpu.data[(opcode & 0x1f0) >> 4]);
  } else if ((opcode & 0xfe0f) === 0x900f) {
    /* POP, 1001 000d dddd 1111 */
    const value = cpu.dataView.getUint16(93, true) + 1;
    cpu.dataView.setUint16(93, value, true);
    cpu.data[(opcode & 0x1f0) >> 4] = cpu.data[value];
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x920f) {
    /* PUSH, 1001 001d dddd 1111 */
    const value = cpu.dataView.getUint16(93, true);
    cpu.data[value] = cpu.data[(opcode & 0x1f0) >> 4];
    cpu.dataView.setUint16(93, value - 1, true);
    cpu.cycles++;
  } else if ((opcode & 0xf000) === 0xd000) {
    /* RCALL, 1101 kkkk kkkk kkkk */
    const k = (opcode & 0x7ff) - (opcode & 0x800 ? 0x800 : 0);
    const retAddr = cpu.pc + 1;
    const sp = cpu.dataView.getUint16(93, true);
    const {
      pc22Bits
    } = cpu;
    cpu.data[sp] = 255 & retAddr;
    cpu.data[sp - 1] = retAddr >> 8 & 255;

    if (pc22Bits) {
      cpu.data[sp - 2] = retAddr >> 16 & 255;
    }

    cpu.dataView.setUint16(93, sp - (pc22Bits ? 3 : 2), true);
    cpu.pc += k;
    cpu.cycles += pc22Bits ? 3 : 2;
  } else if (opcode === 0x9508) {
    /* RET, 1001 0101 0000 1000 */
    const {
      pc22Bits
    } = cpu;
    const i = cpu.dataView.getUint16(93, true) + (pc22Bits ? 3 : 2);
    cpu.dataView.setUint16(93, i, true);
    cpu.pc = (cpu.data[i - 1] << 8) + cpu.data[i] - 1;

    if (pc22Bits) {
      cpu.pc |= cpu.data[i - 2] << 16;
    }

    cpu.cycles += pc22Bits ? 4 : 3;
  } else if (opcode === 0x9518) {
    /* RETI, 1001 0101 0001 1000 */
    const {
      pc22Bits
    } = cpu;
    const i = cpu.dataView.getUint16(93, true) + (pc22Bits ? 3 : 2);
    cpu.dataView.setUint16(93, i, true);
    cpu.pc = (cpu.data[i - 1] << 8) + cpu.data[i] - 1;

    if (pc22Bits) {
      cpu.pc |= cpu.data[i - 2] << 16;
    }

    cpu.cycles += pc22Bits ? 4 : 3;
    cpu.data[95] |= 0x80; // Enable interrupts
  } else if ((opcode & 0xf000) === 0xc000) {
    /* RJMP, 1100 kkkk kkkk kkkk */
    cpu.pc = cpu.pc + ((opcode & 0x7ff) - (opcode & 0x800 ? 0x800 : 0));
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x9407) {
    /* ROR, 1001 010d dddd 0111 */
    const d = cpu.data[(opcode & 0x1f0) >> 4];
    const r = d >>> 1 | (cpu.data[95] & 1) << 7;
    cpu.data[(opcode & 0x1f0) >> 4] = r;
    let sreg = cpu.data[95] & 0xe0;
    sreg |= r ? 0 : 2;
    sreg |= 128 & r ? 4 : 0;
    sreg |= 1 & d ? 1 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg & 1 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfc00) === 0x800) {
    /* SBC, 0000 10rd dddd rrrr */
    const val1 = cpu.data[(opcode & 0x1f0) >> 4];
    const val2 = cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    let sreg = cpu.data[95];
    const R = val1 - val2 - (sreg & 1);
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    sreg = sreg & 0xc0 | (!R && sreg >> 1 & 1 ? 2 : 0) | (val2 + (sreg & 1) > val1 ? 1 : 0);
    sreg |= 128 & R ? 4 : 0;
    sreg |= (val1 ^ val2) & (val1 ^ R) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= 1 & (~val1 & val2 | val2 & R | R & ~val1) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xf000) === 0x4000) {
    /* SBCI, 0100 KKKK dddd KKKK */
    const val1 = cpu.data[((opcode & 0xf0) >> 4) + 16];
    const val2 = opcode & 0xf | (opcode & 0xf00) >> 4;
    let sreg = cpu.data[95];
    const R = val1 - val2 - (sreg & 1);
    cpu.data[((opcode & 0xf0) >> 4) + 16] = R;
    sreg = sreg & 0xc0 | (!R && sreg >> 1 & 1 ? 2 : 0) | (val2 + (sreg & 1) > val1 ? 1 : 0);
    sreg |= 128 & R ? 4 : 0;
    sreg |= (val1 ^ val2) & (val1 ^ R) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= 1 & (~val1 & val2 | val2 & R | R & ~val1) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xff00) === 0x9a00) {
    /* SBI, 1001 1010 AAAA Abbb */
    const target = ((opcode & 0xf8) >> 3) + 32;
    cpu.writeData(target, cpu.readData(target) | 1 << (opcode & 7));
    cpu.cycles++;
  } else if ((opcode & 0xff00) === 0x9900) {
    /* SBIC, 1001 1001 AAAA Abbb */
    const value = cpu.readData(((opcode & 0xf8) >> 3) + 32);

    if (!(value & 1 << (opcode & 7))) {
      const nextOpcode = cpu.progMem[cpu.pc + 1];
      const skipSize = isTwoWordInstruction(nextOpcode) ? 2 : 1;
      cpu.cycles += skipSize;
      cpu.pc += skipSize;
    }
  } else if ((opcode & 0xff00) === 0x9b00) {
    /* SBIS, 1001 1011 AAAA Abbb */
    const value = cpu.readData(((opcode & 0xf8) >> 3) + 32);

    if (value & 1 << (opcode & 7)) {
      const nextOpcode = cpu.progMem[cpu.pc + 1];
      const skipSize = isTwoWordInstruction(nextOpcode) ? 2 : 1;
      cpu.cycles += skipSize;
      cpu.pc += skipSize;
    }
  } else if ((opcode & 0xff00) === 0x9700) {
    /* SBIW, 1001 0111 KKdd KKKK */
    const i = 2 * ((opcode & 0x30) >> 4) + 24;
    const a = cpu.dataView.getUint16(i, true);
    const l = opcode & 0xf | (opcode & 0xc0) >> 2;
    const R = a - l;
    cpu.dataView.setUint16(i, R, true);
    let sreg = cpu.data[95] & 0xc0;
    sreg |= R ? 0 : 2;
    sreg |= 0x8000 & R ? 4 : 0;
    sreg |= a & ~R & 0x8000 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= l > a ? 1 : 0;
    sreg |= 1 & (~a & l | l & R | R & ~a) ? 0x20 : 0;
    cpu.data[95] = sreg;
    cpu.cycles++;
  } else if ((opcode & 0xfe08) === 0xfc00) {
    /* SBRC, 1111 110r rrrr 0bbb */
    if (!(cpu.data[(opcode & 0x1f0) >> 4] & 1 << (opcode & 7))) {
      const nextOpcode = cpu.progMem[cpu.pc + 1];
      const skipSize = isTwoWordInstruction(nextOpcode) ? 2 : 1;
      cpu.cycles += skipSize;
      cpu.pc += skipSize;
    }
  } else if ((opcode & 0xfe08) === 0xfe00) {
    /* SBRS, 1111 111r rrrr 0bbb */
    if (cpu.data[(opcode & 0x1f0) >> 4] & 1 << (opcode & 7)) {
      const nextOpcode = cpu.progMem[cpu.pc + 1];
      const skipSize = isTwoWordInstruction(nextOpcode) ? 2 : 1;
      cpu.cycles += skipSize;
      cpu.pc += skipSize;
    }
  } else if (opcode === 0x9588) {
    /* SLEEP, 1001 0101 1000 1000 */

    /* not implemented */
  } else if (opcode === 0x95e8) {
    /* SPM, 1001 0101 1110 1000 */

    /* not implemented */
  } else if (opcode === 0x95f8) {
    /* SPM(INC), 1001 0101 1111 1000 */

    /* not implemented */
  } else if ((opcode & 0xfe0f) === 0x9200) {
    /* STS, 1001 001d dddd 0000 kkkk kkkk kkkk kkkk */
    const value = cpu.data[(opcode & 0x1f0) >> 4];
    const addr = cpu.progMem[cpu.pc + 1];
    cpu.writeData(addr, value);
    cpu.pc++;
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x920c) {
    /* STX, 1001 001r rrrr 1100 */
    cpu.writeData(cpu.dataView.getUint16(26, true), cpu.data[(opcode & 0x1f0) >> 4]);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x920d) {
    /* STX(INC), 1001 001r rrrr 1101 */
    const x = cpu.dataView.getUint16(26, true);
    cpu.writeData(x, cpu.data[(opcode & 0x1f0) >> 4]);
    cpu.dataView.setUint16(26, x + 1, true);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x920e) {
    /* STX(DEC), 1001 001r rrrr 1110 */
    const i = cpu.data[(opcode & 0x1f0) >> 4];
    const x = cpu.dataView.getUint16(26, true) - 1;
    cpu.dataView.setUint16(26, x, true);
    cpu.writeData(x, i);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x8208) {
    /* STY, 1000 001r rrrr 1000 */
    cpu.writeData(cpu.dataView.getUint16(28, true), cpu.data[(opcode & 0x1f0) >> 4]);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x9209) {
    /* STY(INC), 1001 001r rrrr 1001 */
    const i = cpu.data[(opcode & 0x1f0) >> 4];
    const y = cpu.dataView.getUint16(28, true);
    cpu.writeData(y, i);
    cpu.dataView.setUint16(28, y + 1, true);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x920a) {
    /* STY(DEC), 1001 001r rrrr 1010 */
    const i = cpu.data[(opcode & 0x1f0) >> 4];
    const y = cpu.dataView.getUint16(28, true) - 1;
    cpu.dataView.setUint16(28, y, true);
    cpu.writeData(y, i);
    cpu.cycles++;
  } else if ((opcode & 0xd208) === 0x8208 && opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8) {
    /* STDY, 10q0 qq1r rrrr 1qqq */
    cpu.writeData(cpu.dataView.getUint16(28, true) + (opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8), cpu.data[(opcode & 0x1f0) >> 4]);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x8200) {
    /* STZ, 1000 001r rrrr 0000 */
    cpu.writeData(cpu.dataView.getUint16(30, true), cpu.data[(opcode & 0x1f0) >> 4]);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x9201) {
    /* STZ(INC), 1001 001r rrrr 0001 */
    const z = cpu.dataView.getUint16(30, true);
    cpu.writeData(z, cpu.data[(opcode & 0x1f0) >> 4]);
    cpu.dataView.setUint16(30, z + 1, true);
    cpu.cycles++;
  } else if ((opcode & 0xfe0f) === 0x9202) {
    /* STZ(DEC), 1001 001r rrrr 0010 */
    const i = cpu.data[(opcode & 0x1f0) >> 4];
    const z = cpu.dataView.getUint16(30, true) - 1;
    cpu.dataView.setUint16(30, z, true);
    cpu.writeData(z, i);
    cpu.cycles++;
  } else if ((opcode & 0xd208) === 0x8200 && opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8) {
    /* STDZ, 10q0 qq1r rrrr 0qqq */
    cpu.writeData(cpu.dataView.getUint16(30, true) + (opcode & 7 | (opcode & 0xc00) >> 7 | (opcode & 0x2000) >> 8), cpu.data[(opcode & 0x1f0) >> 4]);
    cpu.cycles++;
  } else if ((opcode & 0xfc00) === 0x1800) {
    /* SUB, 0001 10rd dddd rrrr */
    const val1 = cpu.data[(opcode & 0x1f0) >> 4];
    const val2 = cpu.data[opcode & 0xf | (opcode & 0x200) >> 5];
    const R = val1 - val2;
    cpu.data[(opcode & 0x1f0) >> 4] = R;
    let sreg = cpu.data[95] & 0xc0;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= (val1 ^ val2) & (val1 ^ R) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= val2 > val1 ? 1 : 0;
    sreg |= 1 & (~val1 & val2 | val2 & R | R & ~val1) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xf000) === 0x5000) {
    /* SUBI, 0101 KKKK dddd KKKK */
    const val1 = cpu.data[((opcode & 0xf0) >> 4) + 16];
    const val2 = opcode & 0xf | (opcode & 0xf00) >> 4;
    const R = val1 - val2;
    cpu.data[((opcode & 0xf0) >> 4) + 16] = R;
    let sreg = cpu.data[95] & 0xc0;
    sreg |= R ? 0 : 2;
    sreg |= 128 & R ? 4 : 0;
    sreg |= (val1 ^ val2) & (val1 ^ R) & 128 ? 8 : 0;
    sreg |= sreg >> 2 & 1 ^ sreg >> 3 & 1 ? 0x10 : 0;
    sreg |= val2 > val1 ? 1 : 0;
    sreg |= 1 & (~val1 & val2 | val2 & R | R & ~val1) ? 0x20 : 0;
    cpu.data[95] = sreg;
  } else if ((opcode & 0xfe0f) === 0x9402) {
    /* SWAP, 1001 010d dddd 0010 */
    const d = (opcode & 0x1f0) >> 4;
    const i = cpu.data[d];
    cpu.data[d] = (15 & i) << 4 | (240 & i) >>> 4;
  } else if (opcode === 0x95a8) {
    /* WDR, 1001 0101 1010 1000 */

    /* not implemented */
  } else if ((opcode & 0xfe0f) === 0x9204) {
    /* XCH, 1001 001r rrrr 0100 */
    const r = (opcode & 0x1f0) >> 4;
    const val1 = cpu.data[r];
    const val2 = cpu.data[cpu.dataView.getUint16(30, true)];
    cpu.data[cpu.dataView.getUint16(30, true)] = val1;
    cpu.data[r] = val2;
  }

  cpu.pc = (cpu.pc + 1) % cpu.progMem.length;
  cpu.cycles++;
}
},{}],"../../src/cpu/interrupt.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avrInterrupt = avrInterrupt;

/**
 * AVR-8 Interrupt Handling
 * Part of AVR8js
 * Reference: http://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf
 *
 * Copyright (C) 2019, Uri Shaked
 */
function avrInterrupt(cpu, addr) {
  const sp = cpu.dataView.getUint16(93, true);
  cpu.data[sp] = cpu.pc & 0xff;
  cpu.data[sp - 1] = cpu.pc >> 8 & 0xff;
  cpu.dataView.setUint16(93, sp - 2, true);
  cpu.data[95] &= 0x7f; // clear global interrupt flag

  cpu.cycles += 2;
  cpu.pc = addr;
}
},{}],"../../src/peripherals/gpio.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVRIOPort = exports.PinOverrideMode = exports.PinState = exports.portLConfig = exports.portKConfig = exports.portJConfig = exports.portHConfig = exports.portGConfig = exports.portFConfig = exports.portEConfig = exports.portDConfig = exports.portCConfig = exports.portBConfig = exports.portAConfig = void 0;
const portAConfig = {
  PIN: 0x20,
  DDR: 0x21,
  PORT: 0x22
};
exports.portAConfig = portAConfig;
const portBConfig = {
  PIN: 0x23,
  DDR: 0x24,
  PORT: 0x25
};
exports.portBConfig = portBConfig;
const portCConfig = {
  PIN: 0x26,
  DDR: 0x27,
  PORT: 0x28
};
exports.portCConfig = portCConfig;
const portDConfig = {
  PIN: 0x29,
  DDR: 0x2a,
  PORT: 0x2b
};
exports.portDConfig = portDConfig;
const portEConfig = {
  PIN: 0x2c,
  DDR: 0x2d,
  PORT: 0x2e
};
exports.portEConfig = portEConfig;
const portFConfig = {
  PIN: 0x2f,
  DDR: 0x30,
  PORT: 0x31
};
exports.portFConfig = portFConfig;
const portGConfig = {
  PIN: 0x32,
  DDR: 0x33,
  PORT: 0x34
};
exports.portGConfig = portGConfig;
const portHConfig = {
  PIN: 0x100,
  DDR: 0x101,
  PORT: 0x102
};
exports.portHConfig = portHConfig;
const portJConfig = {
  PIN: 0x103,
  DDR: 0x104,
  PORT: 0x105
};
exports.portJConfig = portJConfig;
const portKConfig = {
  PIN: 0x106,
  DDR: 0x107,
  PORT: 0x108
};
exports.portKConfig = portKConfig;
const portLConfig = {
  PIN: 0x109,
  DDR: 0x10a,
  PORT: 0x10b
};
exports.portLConfig = portLConfig;
var PinState;
exports.PinState = PinState;

(function (PinState) {
  PinState[PinState["Low"] = 0] = "Low";
  PinState[PinState["High"] = 1] = "High";
  PinState[PinState["Input"] = 2] = "Input";
  PinState[PinState["InputPullUp"] = 3] = "InputPullUp";
})(PinState || (exports.PinState = PinState = {}));
/* This mechanism allows timers to override specific GPIO pins */


var PinOverrideMode;
exports.PinOverrideMode = PinOverrideMode;

(function (PinOverrideMode) {
  PinOverrideMode[PinOverrideMode["None"] = 0] = "None";
  PinOverrideMode[PinOverrideMode["Enable"] = 1] = "Enable";
  PinOverrideMode[PinOverrideMode["Set"] = 2] = "Set";
  PinOverrideMode[PinOverrideMode["Clear"] = 3] = "Clear";
  PinOverrideMode[PinOverrideMode["Toggle"] = 4] = "Toggle";
})(PinOverrideMode || (exports.PinOverrideMode = PinOverrideMode = {}));

class AVRIOPort {
  constructor(cpu, portConfig) {
    this.cpu = cpu;
    this.portConfig = portConfig;
    this.listeners = [];
    this.pinValue = 0;
    this.overrideMask = 0xff;
    this.lastValue = 0;
    this.lastDdr = 0;

    cpu.writeHooks[portConfig.DDR] = value => {
      const portValue = cpu.data[portConfig.PORT];
      cpu.data[portConfig.DDR] = value;
      this.updatePinRegister(portValue, value);
      this.writeGpio(portValue, value);
      return true;
    };

    cpu.writeHooks[portConfig.PORT] = value => {
      const ddrMask = cpu.data[portConfig.DDR];
      cpu.data[portConfig.PORT] = value;
      this.updatePinRegister(value, ddrMask);
      this.writeGpio(value, ddrMask);
      return true;
    };

    cpu.writeHooks[portConfig.PIN] = value => {
      // Writing to 1 PIN toggles PORT bits
      const oldPortValue = cpu.data[portConfig.PORT];
      const ddrMask = cpu.data[portConfig.DDR];
      const portValue = oldPortValue ^ value;
      cpu.data[portConfig.PORT] = portValue;
      cpu.data[portConfig.PIN] = cpu.data[portConfig.PIN] & ~ddrMask | portValue & ddrMask;
      this.writeGpio(portValue, ddrMask);
      return true;
    }; // The following hook is used by the timer compare output to override GPIO pins:


    cpu.gpioTimerHooks[portConfig.PORT] = (pin, mode) => {
      const pinMask = 1 << pin;

      if (mode == PinOverrideMode.None) {
        this.overrideMask |= pinMask;
      } else {
        this.overrideMask &= ~pinMask;

        switch (mode) {
          case PinOverrideMode.Enable:
            this.overrideValue &= ~pinMask;
            this.overrideValue |= cpu.data[portConfig.PORT] & pinMask;
            break;

          case PinOverrideMode.Set:
            this.overrideValue |= pinMask;
            break;

          case PinOverrideMode.Clear:
            this.overrideValue &= ~pinMask;
            break;

          case PinOverrideMode.Toggle:
            this.overrideValue ^= pinMask;
            break;
        }
      }

      this.writeGpio(cpu.data[portConfig.PORT], cpu.data[portConfig.DDR]);
    };
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }
  /**
   * Get the state of a given GPIO pin
   *
   * @param index Pin index to return from 0 to 7
   * @returns PinState.Low or PinState.High if the pin is set to output, PinState.Input if the pin is set
   *   to input, and PinState.InputPullUp if the pin is set to input and the internal pull-up resistor has
   *   been enabled.
   */


  pinState(index) {
    const ddr = this.cpu.data[this.portConfig.DDR];
    const port = this.cpu.data[this.portConfig.PORT];
    const bitMask = 1 << index;

    if (ddr & bitMask) {
      return this.lastValue & bitMask ? PinState.High : PinState.Low;
    } else {
      return port & bitMask ? PinState.InputPullUp : PinState.Input;
    }
  }
  /**
   * Sets the input value for the given pin. This is the value that
   * will be returned when reading from the PIN register.
   */


  setPin(index, value) {
    const bitMask = 1 << index;
    this.pinValue &= ~bitMask;

    if (value) {
      this.pinValue |= bitMask;
    }

    this.updatePinRegister(this.cpu.data[this.portConfig.PORT], this.cpu.data[this.portConfig.DDR]);
  }
  /*
  * Will set the output of the ADC and sets analogReadFinished flag
  * Written by Mark Megarry
  */


  setAnalogValue(analogValue) {
    //Write analogValue to ADCH and ADCL
    this.cpu.data[0x78] = analogValue & 0xff;
    this.cpu.data[0x79] = analogValue >> 8 & 0x3;
  }

  updatePinRegister(port, ddr) {
    this.cpu.data[this.portConfig.PIN] = this.pinValue & ~ddr | port & ddr;
  }

  writeGpio(value, ddr) {
    const newValue = (value & this.overrideMask | this.overrideValue) & ddr;
    const prevValue = this.lastValue;

    if (newValue !== prevValue || ddr !== this.lastDdr) {
      this.lastValue = newValue;
      this.lastDdr = ddr;

      for (const listener of this.listeners) {
        listener(newValue, prevValue);
      }
    }
  }

}

exports.AVRIOPort = AVRIOPort;
},{}],"../../src/peripherals/timer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVRTimer = exports.timer2Config = exports.timer1Config = exports.timer0Config = void 0;

var _interrupt = require("../cpu/interrupt");

var _gpio = require("./gpio");

/**
 * AVR-8 Timers
 * Part of AVR8js
 * Reference: http://ww1.microchip.com/downloads/en/DeviceDoc/ATmega48A-PA-88A-PA-168A-PA-328-P-DS-DS40002061A.pdf
 *
 * Copyright (C) 2019, 2020, Uri Shaked
 */
const timer01Dividers = {
  0: 0,
  1: 1,
  2: 8,
  3: 64,
  4: 256,
  5: 1024,
  6: 0,
  7: 0
};
const TOV = 1;
const OCFA = 2;
const OCFB = 4;
const TOIE = 1;
const OCIEA = 2;
const OCIEB = 4;
const timer0Config = {
  bits: 8,
  captureInterrupt: 0,
  compAInterrupt: 0x1c,
  compBInterrupt: 0x1e,
  ovfInterrupt: 0x20,
  TIFR: 0x35,
  OCRA: 0x47,
  OCRB: 0x48,
  ICR: 0,
  TCNT: 0x46,
  TCCRA: 0x44,
  TCCRB: 0x45,
  TCCRC: 0,
  TIMSK: 0x6e,
  dividers: timer01Dividers,
  compPortA: _gpio.portDConfig.PORT,
  compPinA: 6,
  compPortB: _gpio.portDConfig.PORT,
  compPinB: 5
};
exports.timer0Config = timer0Config;
const timer1Config = {
  bits: 16,
  captureInterrupt: 0x14,
  compAInterrupt: 0x16,
  compBInterrupt: 0x18,
  ovfInterrupt: 0x1a,
  TIFR: 0x36,
  OCRA: 0x88,
  OCRB: 0x8a,
  ICR: 0x86,
  TCNT: 0x84,
  TCCRA: 0x80,
  TCCRB: 0x81,
  TCCRC: 0x82,
  TIMSK: 0x6f,
  dividers: timer01Dividers,
  compPortA: _gpio.portBConfig.PORT,
  compPinA: 1,
  compPortB: _gpio.portBConfig.PORT,
  compPinB: 2
};
exports.timer1Config = timer1Config;
const timer2Config = {
  bits: 8,
  captureInterrupt: 0,
  compAInterrupt: 0x0e,
  compBInterrupt: 0x10,
  ovfInterrupt: 0x12,
  TIFR: 0x37,
  OCRA: 0xb3,
  OCRB: 0xb4,
  ICR: 0,
  TCNT: 0xb2,
  TCCRA: 0xb0,
  TCCRB: 0xb1,
  TCCRC: 0,
  TIMSK: 0x70,
  dividers: {
    0: 0,
    1: 1,
    2: 8,
    3: 32,
    4: 64,
    5: 128,
    6: 256,
    7: 1024
  },
  compPortA: _gpio.portBConfig.PORT,
  compPinA: 3,
  compPortB: _gpio.portDConfig.PORT,
  compPinB: 3
};
/* All the following types and constants are related to WGM (Waveform Generation Mode) bits: */

exports.timer2Config = timer2Config;
var TimerMode;

(function (TimerMode) {
  TimerMode[TimerMode["Normal"] = 0] = "Normal";
  TimerMode[TimerMode["PWMPhaseCorrect"] = 1] = "PWMPhaseCorrect";
  TimerMode[TimerMode["CTC"] = 2] = "CTC";
  TimerMode[TimerMode["FastPWM"] = 3] = "FastPWM";
  TimerMode[TimerMode["PWMPhaseFrequencyCorrect"] = 4] = "PWMPhaseFrequencyCorrect";
  TimerMode[TimerMode["Reserved"] = 5] = "Reserved";
})(TimerMode || (TimerMode = {}));

var TOVUpdateMode;

(function (TOVUpdateMode) {
  TOVUpdateMode[TOVUpdateMode["Max"] = 0] = "Max";
  TOVUpdateMode[TOVUpdateMode["Top"] = 1] = "Top";
  TOVUpdateMode[TOVUpdateMode["Bottom"] = 2] = "Bottom";
})(TOVUpdateMode || (TOVUpdateMode = {}));

var OCRUpdateMode;

(function (OCRUpdateMode) {
  OCRUpdateMode[OCRUpdateMode["Immediate"] = 0] = "Immediate";
  OCRUpdateMode[OCRUpdateMode["Top"] = 1] = "Top";
  OCRUpdateMode[OCRUpdateMode["Bottom"] = 2] = "Bottom";
})(OCRUpdateMode || (OCRUpdateMode = {}));

const TopOCRA = 1;
const TopICR = 2;
const wgmModes8Bit = [
/*0*/
[TimerMode.Normal, 0xff, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*1*/
[TimerMode.PWMPhaseCorrect, 0xff, OCRUpdateMode.Top, TOVUpdateMode.Bottom],
/*2*/
[TimerMode.CTC, TopOCRA, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*3*/
[TimerMode.FastPWM, 0xff, OCRUpdateMode.Bottom, TOVUpdateMode.Max],
/*4*/
[TimerMode.Reserved, 0xff, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*5*/
[TimerMode.PWMPhaseCorrect, TopOCRA, OCRUpdateMode.Top, TOVUpdateMode.Bottom],
/*6*/
[TimerMode.Reserved, 0xff, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*7*/
[TimerMode.FastPWM, TopOCRA, OCRUpdateMode.Bottom, TOVUpdateMode.Top]]; // Table 16-4 in the datasheet

const wgmModes16Bit = [
/*0 */
[TimerMode.Normal, 0xffff, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*1 */
[TimerMode.PWMPhaseCorrect, 0x00ff, OCRUpdateMode.Top, TOVUpdateMode.Bottom],
/*2 */
[TimerMode.PWMPhaseCorrect, 0x01ff, OCRUpdateMode.Top, TOVUpdateMode.Bottom],
/*3 */
[TimerMode.PWMPhaseCorrect, 0x03ff, OCRUpdateMode.Top, TOVUpdateMode.Bottom],
/*4 */
[TimerMode.CTC, TopOCRA, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*5 */
[TimerMode.FastPWM, 0x00ff, OCRUpdateMode.Bottom, TOVUpdateMode.Top],
/*6 */
[TimerMode.FastPWM, 0x01ff, OCRUpdateMode.Bottom, TOVUpdateMode.Top],
/*7 */
[TimerMode.FastPWM, 0x03ff, OCRUpdateMode.Bottom, TOVUpdateMode.Top],
/*8 */
[TimerMode.PWMPhaseFrequencyCorrect, TopICR, OCRUpdateMode.Bottom, TOVUpdateMode.Bottom],
/*9 */
[TimerMode.PWMPhaseFrequencyCorrect, TopOCRA, OCRUpdateMode.Bottom, TOVUpdateMode.Bottom],
/*10*/
[TimerMode.PWMPhaseCorrect, TopICR, OCRUpdateMode.Top, TOVUpdateMode.Bottom],
/*11*/
[TimerMode.PWMPhaseCorrect, TopOCRA, OCRUpdateMode.Top, TOVUpdateMode.Bottom],
/*12*/
[TimerMode.CTC, TopICR, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*13*/
[TimerMode.Reserved, 0xffff, OCRUpdateMode.Immediate, TOVUpdateMode.Max],
/*14*/
[TimerMode.FastPWM, TopICR, OCRUpdateMode.Bottom, TOVUpdateMode.Top],
/*15*/
[TimerMode.FastPWM, TopOCRA, OCRUpdateMode.Bottom, TOVUpdateMode.Top]];

function compToOverride(comp) {
  switch (comp) {
    case 1:
      return _gpio.PinOverrideMode.Toggle;

    case 2:
      return _gpio.PinOverrideMode.Clear;

    case 3:
      return _gpio.PinOverrideMode.Set;

    default:
      return _gpio.PinOverrideMode.Enable;
  }
}

class AVRTimer {
  constructor(cpu, config) {
    this.cpu = cpu;
    this.config = config;
    this.lastCycle = 0;
    this.ocrA = 0;
    this.ocrB = 0;
    this.icr = 0; // only for 16-bit timers

    this.tcnt = 0;
    this.tcntUpdated = false;
    this.countingUp = true; // This is the temporary register used to access 16-bit registers (section 16.3 of the datasheet)

    this.highByteTemp = 0;
    this.updateWGMConfig();

    this.cpu.readHooks[config.TCNT] = addr => {
      this.tick();

      if (this.config.bits === 16) {
        this.cpu.data[addr + 1] = this.tcnt >> 8;
      }

      return this.cpu.data[addr] = this.tcnt & 0xff;
    };

    this.cpu.writeHooks[config.TCNT] = value => {
      this.tcnt = this.highByteTemp << 8 | value;
      this.tcntUpdated = true;
      this.timerUpdated();
    };

    this.cpu.writeHooks[config.OCRA] = value => {
      // TODO implement buffering when timer running in PWM mode
      this.ocrA = this.highByteTemp << 8 | value;
    };

    this.cpu.writeHooks[config.OCRB] = value => {
      // TODO implement buffering when timer running in PWM mode
      this.ocrB = this.highByteTemp << 8 | value;
    };

    this.cpu.writeHooks[config.ICR] = value => {
      this.icr = this.highByteTemp << 8 | value;
    };

    if (this.config.bits === 16) {
      const updateTempRegister = value => {
        this.highByteTemp = value;
      };

      this.cpu.writeHooks[config.TCNT + 1] = updateTempRegister;
      this.cpu.writeHooks[config.OCRA + 1] = updateTempRegister;
      this.cpu.writeHooks[config.OCRB + 1] = updateTempRegister;
      this.cpu.writeHooks[config.ICR + 1] = updateTempRegister;
    }

    cpu.writeHooks[config.TCCRA] = value => {
      this.cpu.data[config.TCCRA] = value;
      this.compA = value >> 6 & 0x3;
      this.updateCompA(this.compA ? _gpio.PinOverrideMode.Enable : _gpio.PinOverrideMode.None);
      this.compB = value >> 4 & 0x3;
      this.updateCompB(this.compB ? _gpio.PinOverrideMode.Enable : _gpio.PinOverrideMode.None);
      this.updateWGMConfig();
      return true;
    };

    cpu.writeHooks[config.TCCRB] = value => {
      this.cpu.data[config.TCCRB] = value;
      this.updateWGMConfig();
      return true;
    };
  }

  reset() {
    this.lastCycle = 0;
    this.ocrA = 0;
    this.ocrB = 0;
  }

  get TIFR() {
    return this.cpu.data[this.config.TIFR];
  }

  set TIFR(value) {
    this.cpu.data[this.config.TIFR] = value;
  }

  get TCCRA() {
    return this.cpu.data[this.config.TCCRA];
  }

  get TCCRB() {
    return this.cpu.data[this.config.TCCRB];
  }

  get TIMSK() {
    return this.cpu.data[this.config.TIMSK];
  }

  get CS() {
    return this.TCCRB & 0x7;
  }

  get WGM() {
    const mask = this.config.bits === 16 ? 0x18 : 0x8;
    return (this.TCCRB & mask) >> 1 | this.TCCRA & 0x3;
  }

  get TOP() {
    switch (this.topValue) {
      case TopOCRA:
        return this.ocrA;

      case TopICR:
        return this.icr;

      default:
        return this.topValue;
    }
  }

  updateWGMConfig() {
    const wgmModes = this.config.bits === 16 ? wgmModes16Bit : wgmModes8Bit;
    const [timerMode, topValue] = wgmModes[this.WGM];
    this.timerMode = timerMode;
    this.topValue = topValue;
  }

  tick() {
    const divider = this.config.dividers[this.CS];
    const delta = this.cpu.cycles - this.lastCycle;

    if (divider && delta >= divider) {
      const counterDelta = Math.floor(delta / divider);
      this.lastCycle += counterDelta * divider;
      const val = this.tcnt;
      const {
        timerMode
      } = this;
      const phasePwm = timerMode === TimerMode.PWMPhaseCorrect || timerMode === TimerMode.PWMPhaseFrequencyCorrect;
      const newVal = phasePwm ? this.phasePwmCount(val, counterDelta) : (val + counterDelta) % (this.TOP + 1); // A CPU write overrides (has priority over) all counter clear or count operations.

      if (!this.tcntUpdated) {
        this.tcnt = newVal;
        this.timerUpdated();
      }

      if ((timerMode === TimerMode.Normal || timerMode === TimerMode.FastPWM) && val > newVal) {
        this.TIFR |= TOV;
      }
    }

    this.tcntUpdated = false;

    if (this.cpu.interruptsEnabled) {
      const {
        TIFR,
        TIMSK
      } = this;

      if (TIFR & TOV && TIMSK & TOIE) {
        (0, _interrupt.avrInterrupt)(this.cpu, this.config.ovfInterrupt);
        this.TIFR &= ~TOV;
      }

      if (TIFR & OCFA && TIMSK & OCIEA) {
        (0, _interrupt.avrInterrupt)(this.cpu, this.config.compAInterrupt);
        this.TIFR &= ~OCFA;
      }

      if (TIFR & OCFB && TIMSK & OCIEB) {
        (0, _interrupt.avrInterrupt)(this.cpu, this.config.compBInterrupt);
        this.TIFR &= ~OCFB;
      }
    }
  }

  phasePwmCount(value, delta) {
    while (delta > 0) {
      if (this.countingUp) {
        value++;

        if (value === this.TOP && !this.tcntUpdated) {
          this.countingUp = false;
        }
      } else {
        value--;

        if (!value && !this.tcntUpdated) {
          this.countingUp = true;
          this.TIFR |= TOV;
        }
      }

      delta--;
    }

    return value;
  }

  timerUpdated() {
    const value = this.tcnt;

    if (this.ocrA && value === this.ocrA) {
      this.TIFR |= OCFA;

      if (this.timerMode === TimerMode.CTC) {
        // Clear Timer on Compare Match (CTC) Mode
        this.tcnt = 0;
        this.TIFR |= TOV;
      }

      if (this.compA) {
        this.updateCompPin(this.compA, 'A');
      }
    }

    if (this.ocrB && value === this.ocrB) {
      this.TIFR |= OCFB;

      if (this.compB) {
        this.updateCompPin(this.compB, 'B');
      }
    }
  }

  updateCompPin(compValue, pinName) {
    let newValue = _gpio.PinOverrideMode.None;
    const inverted = compValue === 3;
    const isSet = this.countingUp === inverted;

    switch (this.timerMode) {
      case TimerMode.Normal:
      case TimerMode.CTC:
      case TimerMode.FastPWM:
        newValue = compToOverride(compValue);
        break;

      case TimerMode.PWMPhaseCorrect:
      case TimerMode.PWMPhaseFrequencyCorrect:
        newValue = isSet ? _gpio.PinOverrideMode.Set : _gpio.PinOverrideMode.Clear;
        break;
    }

    if (newValue !== _gpio.PinOverrideMode.None) {
      if (pinName === 'A') {
        this.updateCompA(newValue);
      } else {
        this.updateCompB(newValue);
      }
    }
  }

  updateCompA(value) {
    const {
      compPortA,
      compPinA
    } = this.config;
    const hook = this.cpu.gpioTimerHooks[compPortA];

    if (hook) {
      hook(compPinA, value, compPortA);
    }
  }

  updateCompB(value) {
    const {
      compPortB,
      compPinB
    } = this.config;
    const hook = this.cpu.gpioTimerHooks[compPortB];

    if (hook) {
      hook(compPinB, value, compPortB);
    }
  }

}

exports.AVRTimer = AVRTimer;
},{"../cpu/interrupt":"../../src/cpu/interrupt.ts","./gpio":"../../src/peripherals/gpio.ts"}],"../../src/peripherals/usart.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVRUSART = exports.usart0Config = void 0;

var _interrupt = require("../cpu/interrupt");

const usart0Config = {
  rxCompleteInterrupt: 0x24,
  dataRegisterEmptyInterrupt: 0x26,
  txCompleteInterrupt: 0x28,
  UCSRA: 0xc0,
  UCSRB: 0xc1,
  UCSRC: 0xc2,
  UBRRL: 0xc4,
  UBRRH: 0xc5,
  UDR: 0xc6
};
/* eslint-disable @typescript-eslint/no-unused-vars */
// Register bits:

exports.usart0Config = usart0Config;
const UCSRA_RXC = 0x80; // USART Receive Complete

const UCSRA_TXC = 0x40; // USART Transmit Complete

const UCSRA_UDRE = 0x20; // USART Data Register Empty

const UCSRA_FE = 0x10; // Frame Error

const UCSRA_DOR = 0x8; // Data OverRun

const UCSRA_UPE = 0x4; // USART Parity Error

const UCSRA_U2X = 0x2; // Double the USART Transmission Speed

const UCSRA_MPCM = 0x1; // Multi-processor Communication Mode

const UCSRB_RXCIE = 0x80; // RX Complete Interrupt Enable

const UCSRB_TXCIE = 0x40; // TX Complete Interrupt Enable

const UCSRB_UDRIE = 0x20; // USART Data Register Empty Interrupt Enable

const UCSRB_RXEN = 0x10; // Receiver Enable

const UCSRB_TXEN = 0x8; // Transmitter Enable

const UCSRB_UCSZ2 = 0x4; // Character Size 2

const UCSRB_RXB8 = 0x2; // Receive Data Bit 8

const UCSRB_TXB8 = 0x1; // Transmit Data Bit 8

const UCSRC_UMSEL1 = 0x80; // USART Mode Select 1

const UCSRC_UMSEL0 = 0x40; // USART Mode Select 0

const UCSRC_UPM1 = 0x20; // Parity Mode 1

const UCSRC_UPM0 = 0x10; // Parity Mode 0

const UCSRC_USBS = 0x8; // Stop Bit Select

const UCSRC_UCSZ1 = 0x4; // Character Size 1

const UCSRC_UCSZ0 = 0x2; // Character Size 0

const UCSRC_UCPOL = 0x1; // Clock Polarity

/* eslint-enable @typescript-eslint/no-unused-vars */

class AVRUSART {
  constructor(cpu, config, freqMHz) {
    this.cpu = cpu;
    this.config = config;
    this.freqMHz = freqMHz;
    this.onByteTransmit = null;
    this.onLineTransmit = null;
    this.lineBuffer = '';

    this.cpu.writeHooks[config.UCSRA] = value => {
      this.cpu.data[config.UCSRA] = value | UCSRA_UDRE | UCSRA_TXC;
      return true;
    };

    this.cpu.writeHooks[config.UCSRB] = (value, oldValue) => {
      if (value & UCSRB_TXEN && !(oldValue & UCSRB_TXEN)) {
        // Enabling the transmission - mark UDR as empty
        this.cpu.data[config.UCSRA] |= UCSRA_UDRE;
      }
    };

    this.cpu.writeHooks[config.UDR] = value => {
      if (this.onByteTransmit) {
        this.onByteTransmit(value);
      }

      if (this.onLineTransmit) {
        const ch = String.fromCharCode(value);

        if (ch === '\n') {
          this.onLineTransmit(this.lineBuffer);
          this.lineBuffer = '';
        } else {
          this.lineBuffer += ch;
        }
      }

      this.cpu.data[config.UCSRA] |= UCSRA_UDRE | UCSRA_TXC;
    };
  }

  tick() {
    if (this.cpu.interruptsEnabled) {
      const ucsra = this.cpu.data[this.config.UCSRA];
      const ucsrb = this.cpu.data[this.config.UCSRB];

      if (ucsra & UCSRA_UDRE && ucsrb & UCSRB_UDRIE) {
        (0, _interrupt.avrInterrupt)(this.cpu, this.config.dataRegisterEmptyInterrupt);
        this.cpu.data[this.config.UCSRA] &= ~UCSRA_UDRE;
      }

      if (ucsra & UCSRA_TXC && ucsrb & UCSRB_TXCIE) {
        (0, _interrupt.avrInterrupt)(this.cpu, this.config.txCompleteInterrupt);
        this.cpu.data[this.config.UCSRA] &= ~UCSRA_TXC;
      }
    }
  }

  get baudRate() {
    const UBRR = this.cpu.data[this.config.UBRRH] << 8 | this.cpu.data[this.config.UBRRL];
    const multiplier = this.cpu.data[this.config.UCSRA] & UCSRA_U2X ? 8 : 16;
    return Math.floor(this.freqMHz / (multiplier * (1 + UBRR)));
  }

  get bitsPerChar() {
    const ucsz = (this.cpu.data[this.config.UCSRC] & (UCSRC_UCSZ1 | UCSRC_UCSZ0)) >> 1 | this.cpu.data[this.config.UCSRB] & UCSRB_UCSZ2;

    switch (ucsz) {
      case 0:
        return 5;

      case 1:
        return 6;

      case 2:
        return 7;

      case 3:
        return 8;

      default: // 4..6 are reserved

      case 7:
        return 9;
    }
  }

}

exports.AVRUSART = AVRUSART;
},{"../cpu/interrupt":"../../src/cpu/interrupt.ts"}],"../../src/peripherals/eeprom.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVREEPROM = exports.eepromConfig = exports.EEPROMMemoryBackend = void 0;

var _interrupt = require("../cpu/interrupt");

class EEPROMMemoryBackend {
  constructor(size) {
    this.memory = new Uint8Array(size);
    this.memory.fill(0xff);
  }

  readMemory(addr) {
    return this.memory[addr];
  }

  writeMemory(addr, value) {
    this.memory[addr] &= value;
  }

  eraseMemory(addr) {
    this.memory[addr] = 0xff;
  }

}

exports.EEPROMMemoryBackend = EEPROMMemoryBackend;
const eepromConfig = {
  eepromReadyInterrupt: 0x2c,
  EECR: 0x3f,
  EEDR: 0x40,
  EEARL: 0x41,
  EEARH: 0x42,
  eraseCycles: 28800,
  writeCycles: 28800
};
exports.eepromConfig = eepromConfig;
const EERE = 1 << 0;
const EEPE = 1 << 1;
const EEMPE = 1 << 2;
const EERIE = 1 << 3;
const EEPM0 = 1 << 4;
const EEPM1 = 1 << 5;

class AVREEPROM {
  constructor(cpu, backend, config = eepromConfig) {
    this.cpu = cpu;
    this.backend = backend;
    this.config = config;
    /**
     * Used to keep track on the last write to EEMPE. From the datasheet:
     * The EEMPE bit determines whether setting EEPE to one causes the EEPROM to be written.
     * When EEMPE is set, setting EEPE within four clock cycles will write data to the EEPROM
     * at the selected address If EEMPE is zero, setting EEPE will have no effect.
     */

    this.writeEnabledCycles = 0;
    this.writeCompleteCycles = 0;

    this.cpu.writeHooks[this.config.EECR] = eecr => {
      const {
        EEARH,
        EEARL,
        EECR,
        EEDR
      } = this.config;
      const addr = this.cpu.data[EEARH] << 8 | this.cpu.data[EEARL];

      if (eecr & EEMPE) {
        this.writeEnabledCycles = this.cpu.cycles + 4;
      } // Read


      if (eecr & EERE) {
        this.cpu.data[EEDR] = this.backend.readMemory(addr); // When the EEPROM is read, the CPU is halted for four cycles before the
        // next instruction is executed.

        this.cpu.cycles += 4;
        return true;
      } // Write


      if (eecr & EEPE) {
        //  If EEMPE is zero, setting EEPE will have no effect.
        if (this.cpu.cycles >= this.writeEnabledCycles) {
          return true;
        } // Check for write-in-progress


        if (this.cpu.cycles < this.writeCompleteCycles) {
          return true;
        }

        const eedr = this.cpu.data[EEDR];
        this.writeCompleteCycles = this.cpu.cycles; // Erase

        if (!(eecr & EEPM1)) {
          this.backend.eraseMemory(addr);
          this.writeCompleteCycles += this.config.eraseCycles;
        } // Write


        if (!(eecr & EEPM0)) {
          this.backend.writeMemory(addr, eedr);
          this.writeCompleteCycles += this.config.writeCycles;
        }

        this.cpu.data[EECR] |= EEPE; // When EEPE has been set, the CPU is halted for two cycles before the
        // next instruction is executed.

        this.cpu.cycles += 2;
        return true;
      }

      return false;
    };
  }

  tick() {
    const {
      EECR,
      eepromReadyInterrupt
    } = this.config;

    if (this.writeEnabledCycles && this.cpu.cycles > this.writeEnabledCycles) {
      this.cpu.data[EECR] &= ~EEMPE;
    }

    if (this.writeCompleteCycles && this.cpu.cycles > this.writeCompleteCycles) {
      this.cpu.data[EECR] &= ~EEPE;

      if (this.cpu.interruptsEnabled && this.cpu.data[EECR] & EERIE) {
        (0, _interrupt.avrInterrupt)(this.cpu, eepromReadyInterrupt);
      }
    }
  }

}

exports.AVREEPROM = AVREEPROM;
},{"../cpu/interrupt":"../../src/cpu/interrupt.ts"}],"../../src/peripherals/twi.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVRTWI = exports.NoopTWIEventHandler = exports.twiConfig = void 0;

var _interrupt = require("../cpu/interrupt");

/* eslint-disable @typescript-eslint/no-unused-vars */
// Register bits:
const TWCR_TWINT = 0x80; // TWI Interrupt Flag

const TWCR_TWEA = 0x40; // TWI Enable Acknowledge Bit

const TWCR_TWSTA = 0x20; // TWI START Condition Bit

const TWCR_TWSTO = 0x10; // TWI STOP Condition Bit

const TWCR_TWWC = 0x8; //TWI Write Collision Flag

const TWCR_TWEN = 0x4; //  TWI Enable Bit

const TWCR_TWIE = 0x1; // TWI Interrupt Enable

const TWSR_TWS_MASK = 0xf8; // TWI Status

const TWSR_TWPS1 = 0x2; // TWI Prescaler Bits

const TWSR_TWPS0 = 0x1; // TWI Prescaler Bits

const TWSR_TWPS_MASK = TWSR_TWPS1 | TWSR_TWPS0; // TWI Prescaler mask

const TWAR_TWA_MASK = 0xfe; //  TWI (Slave) Address Register

const TWAR_TWGCE = 0x1; // TWI General Call Recognition Enable Bit

const STATUS_BUS_ERROR = 0x0;
const STATUS_TWI_IDLE = 0xf8; // Master states

const STATUS_START = 0x08;
const STATUS_REPEATED_START = 0x10;
const STATUS_SLAW_ACK = 0x18;
const STATUS_SLAW_NACK = 0x20;
const STATUS_DATA_SENT_ACK = 0x28;
const STATUS_DATA_SENT_NACK = 0x30;
const STATUS_DATA_LOST_ARBITRATION = 0x38;
const STATUS_SLAR_ACK = 0x40;
const STATUS_SLAR_NACK = 0x48;
const STATUS_DATA_RECEIVED_ACK = 0x50;
const STATUS_DATA_RECEIVED_NACK = 0x58; // TODO: add slave states

/* eslint-enable @typescript-eslint/no-unused-vars */

const twiConfig = {
  twiInterrupt: 0x30,
  TWBR: 0xb8,
  TWSR: 0xb9,
  TWAR: 0xba,
  TWDR: 0xbb,
  TWCR: 0xbc,
  TWAMR: 0xbd
}; // A simple TWI Event Handler that sends a NACK for all events

exports.twiConfig = twiConfig;

class NoopTWIEventHandler {
  constructor(twi) {
    this.twi = twi;
  }

  start() {
    this.twi.completeStart();
  }

  stop() {
    this.twi.completeStop();
  }

  connectToSlave() {
    this.twi.completeConnect(false);
  }

  writeByte() {
    this.twi.completeWrite(false);
  }

  readByte() {
    this.twi.completeRead(0xff);
  }

}

exports.NoopTWIEventHandler = NoopTWIEventHandler;

class AVRTWI {
  constructor(cpu, config, freqMHz) {
    this.cpu = cpu;
    this.config = config;
    this.freqMHz = freqMHz;
    this.eventHandler = new NoopTWIEventHandler(this);
    this.nextTick = null;
    this.updateStatus(STATUS_TWI_IDLE);

    this.cpu.writeHooks[config.TWCR] = value => {
      const clearInt = value & TWCR_TWINT;

      if (clearInt) {
        value &= ~TWCR_TWINT;
      }

      const {
        status
      } = this;

      if (clearInt && value & TWCR_TWEN) {
        const twdrValue = this.cpu.data[this.config.TWDR];

        this.nextTick = () => {
          if (value & TWCR_TWSTA) {
            this.eventHandler.start(status !== STATUS_TWI_IDLE);
          } else if (value & TWCR_TWSTO) {
            this.eventHandler.stop();
          } else if (status === STATUS_START) {
            this.eventHandler.connectToSlave(twdrValue >> 1, twdrValue & 0x1 ? false : true);
          } else if (status === STATUS_SLAW_ACK || status === STATUS_DATA_SENT_ACK) {
            this.eventHandler.writeByte(twdrValue);
          } else if (status === STATUS_SLAR_ACK || status === STATUS_DATA_RECEIVED_ACK) {
            const ack = !!(value & TWCR_TWEA);
            this.eventHandler.readByte(ack);
          }
        };

        this.cpu.data[config.TWCR] = value;
        return true;
      }
    };
  }

  tick() {
    if (this.nextTick) {
      this.nextTick();
      this.nextTick = null;
    }

    if (this.cpu.interruptsEnabled) {
      const {
        TWCR,
        twiInterrupt
      } = this.config;

      if (this.cpu.data[TWCR] & TWCR_TWIE && this.cpu.data[TWCR] & TWCR_TWINT) {
        (0, _interrupt.avrInterrupt)(this.cpu, twiInterrupt);
        this.cpu.data[TWCR] &= ~TWCR_TWINT;
      }
    }
  }

  get prescaler() {
    switch (this.cpu.data[this.config.TWSR] & TWSR_TWPS_MASK) {
      case 0:
        return 1;

      case 1:
        return 4;

      case 2:
        return 16;

      case 3:
        return 64;
    } // We should never get here:


    throw new Error('Invalid prescaler value!');
  }

  get sclFrequency() {
    return this.freqMHz / (16 + 2 * this.cpu.data[this.config.TWBR] * this.prescaler);
  }

  completeStart() {
    this.updateStatus(this.status === STATUS_TWI_IDLE ? STATUS_START : STATUS_REPEATED_START);
  }

  completeStop() {
    this.cpu.data[this.config.TWCR] &= ~TWCR_TWSTO;
    this.updateStatus(STATUS_TWI_IDLE);
  }

  completeConnect(ack) {
    if (this.cpu.data[this.config.TWDR] & 0x1) {
      this.updateStatus(ack ? STATUS_SLAR_ACK : STATUS_SLAR_NACK);
    } else {
      this.updateStatus(ack ? STATUS_SLAW_ACK : STATUS_SLAW_NACK);
    }
  }

  completeWrite(ack) {
    this.updateStatus(ack ? STATUS_DATA_SENT_ACK : STATUS_DATA_SENT_NACK);
  }

  completeRead(value) {
    const ack = !!(this.cpu.data[this.config.TWCR] & TWCR_TWEA);
    this.cpu.data[this.config.TWDR] = value;
    this.updateStatus(ack ? STATUS_DATA_RECEIVED_ACK : STATUS_DATA_RECEIVED_NACK);
  }

  get status() {
    return this.cpu.data[this.config.TWSR] & TWSR_TWS_MASK;
  }

  updateStatus(value) {
    const {
      TWCR,
      TWSR
    } = this.config;
    this.cpu.data[TWSR] = this.cpu.data[TWSR] & ~TWSR_TWS_MASK | value;
    this.cpu.data[TWCR] |= TWCR_TWINT;
  }

}

exports.AVRTWI = AVRTWI;
},{"../cpu/interrupt":"../../src/cpu/interrupt.ts"}],"../../src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CPU: true,
  ICPU: true,
  CPUMemoryHook: true,
  CPUMemoryHooks: true,
  avrInstruction: true,
  avrInterrupt: true,
  AVRTimer: true,
  timer0Config: true,
  timer1Config: true,
  timer2Config: true,
  AVRIOPort: true,
  GPIOListener: true,
  AVRPortConfig: true,
  portAConfig: true,
  portBConfig: true,
  portCConfig: true,
  portDConfig: true,
  portEConfig: true,
  portFConfig: true,
  portGConfig: true,
  portHConfig: true,
  portJConfig: true,
  portKConfig: true,
  portLConfig: true,
  PinState: true,
  AVRUSART: true,
  usart0Config: true,
  AVREEPROM: true,
  AVREEPROMConfig: true,
  EEPROMBackend: true,
  EEPROMMemoryBackend: true,
  eepromConfig: true
};
Object.defineProperty(exports, "CPU", {
  enumerable: true,
  get: function () {
    return _cpu.CPU;
  }
});
Object.defineProperty(exports, "ICPU", {
  enumerable: true,
  get: function () {
    return _cpu.ICPU;
  }
});
Object.defineProperty(exports, "CPUMemoryHook", {
  enumerable: true,
  get: function () {
    return _cpu.CPUMemoryHook;
  }
});
Object.defineProperty(exports, "CPUMemoryHooks", {
  enumerable: true,
  get: function () {
    return _cpu.CPUMemoryHooks;
  }
});
Object.defineProperty(exports, "avrInstruction", {
  enumerable: true,
  get: function () {
    return _instruction.avrInstruction;
  }
});
Object.defineProperty(exports, "avrInterrupt", {
  enumerable: true,
  get: function () {
    return _interrupt.avrInterrupt;
  }
});
Object.defineProperty(exports, "AVRTimer", {
  enumerable: true,
  get: function () {
    return _timer.AVRTimer;
  }
});
Object.defineProperty(exports, "timer0Config", {
  enumerable: true,
  get: function () {
    return _timer.timer0Config;
  }
});
Object.defineProperty(exports, "timer1Config", {
  enumerable: true,
  get: function () {
    return _timer.timer1Config;
  }
});
Object.defineProperty(exports, "timer2Config", {
  enumerable: true,
  get: function () {
    return _timer.timer2Config;
  }
});
Object.defineProperty(exports, "AVRIOPort", {
  enumerable: true,
  get: function () {
    return _gpio.AVRIOPort;
  }
});
Object.defineProperty(exports, "GPIOListener", {
  enumerable: true,
  get: function () {
    return _gpio.GPIOListener;
  }
});
Object.defineProperty(exports, "AVRPortConfig", {
  enumerable: true,
  get: function () {
    return _gpio.AVRPortConfig;
  }
});
Object.defineProperty(exports, "portAConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portAConfig;
  }
});
Object.defineProperty(exports, "portBConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portBConfig;
  }
});
Object.defineProperty(exports, "portCConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portCConfig;
  }
});
Object.defineProperty(exports, "portDConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portDConfig;
  }
});
Object.defineProperty(exports, "portEConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portEConfig;
  }
});
Object.defineProperty(exports, "portFConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portFConfig;
  }
});
Object.defineProperty(exports, "portGConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portGConfig;
  }
});
Object.defineProperty(exports, "portHConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portHConfig;
  }
});
Object.defineProperty(exports, "portJConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portJConfig;
  }
});
Object.defineProperty(exports, "portKConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portKConfig;
  }
});
Object.defineProperty(exports, "portLConfig", {
  enumerable: true,
  get: function () {
    return _gpio.portLConfig;
  }
});
Object.defineProperty(exports, "PinState", {
  enumerable: true,
  get: function () {
    return _gpio.PinState;
  }
});
Object.defineProperty(exports, "AVRUSART", {
  enumerable: true,
  get: function () {
    return _usart.AVRUSART;
  }
});
Object.defineProperty(exports, "usart0Config", {
  enumerable: true,
  get: function () {
    return _usart.usart0Config;
  }
});
Object.defineProperty(exports, "AVREEPROM", {
  enumerable: true,
  get: function () {
    return _eeprom.AVREEPROM;
  }
});
Object.defineProperty(exports, "AVREEPROMConfig", {
  enumerable: true,
  get: function () {
    return _eeprom.AVREEPROMConfig;
  }
});
Object.defineProperty(exports, "EEPROMBackend", {
  enumerable: true,
  get: function () {
    return _eeprom.EEPROMBackend;
  }
});
Object.defineProperty(exports, "EEPROMMemoryBackend", {
  enumerable: true,
  get: function () {
    return _eeprom.EEPROMMemoryBackend;
  }
});
Object.defineProperty(exports, "eepromConfig", {
  enumerable: true,
  get: function () {
    return _eeprom.eepromConfig;
  }
});

var _cpu = require("./cpu/cpu");

var _instruction = require("./cpu/instruction");

var _interrupt = require("./cpu/interrupt");

var _timer = require("./peripherals/timer");

var _gpio = require("./peripherals/gpio");

var _usart = require("./peripherals/usart");

var _eeprom = require("./peripherals/eeprom");

var _twi = require("./peripherals/twi");

Object.keys(_twi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _twi[key];
    }
  });
});
},{"./cpu/cpu":"../../src/cpu/cpu.ts","./cpu/instruction":"../../src/cpu/instruction.ts","./cpu/interrupt":"../../src/cpu/interrupt.ts","./peripherals/timer":"../../src/peripherals/timer.ts","./peripherals/gpio":"../../src/peripherals/gpio.ts","./peripherals/usart":"../../src/peripherals/usart.ts","./peripherals/eeprom":"../../src/peripherals/eeprom.ts","./peripherals/twi":"../../src/peripherals/twi.ts"}],"intelhex.ts":[function(require,module,exports) {
"use strict";
/**
 * Minimal Intel HEX loader
 * Part of AVR8js
 *
 * Copyright (C) 2019, Uri Shaked
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadHex = void 0;

function loadHex(source, target) {
  for (const line of source.split('\n')) {
    if (line[0] === ':' && line.substr(7, 2) === '00') {
      const bytes = parseInt(line.substr(1, 2), 16);
      const addr = parseInt(line.substr(3, 4), 16);

      for (let i = 0; i < bytes; i++) {
        target[addr + i] = parseInt(line.substr(9 + i * 2, 2), 16);
      }
    }
  }
}

exports.loadHex = loadHex;
},{}],"task-scheduler.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MicroTaskScheduler = void 0;

class MicroTaskScheduler {
  constructor() {
    this.messageName = 'zero-timeout-message';
    this.executionQueue = [];
    this.stopped = true;

    this.handleMessage = event => {
      if (event.data === this.messageName) {
        event.stopPropagation();
        const executeJob = this.executionQueue.shift();

        if (executeJob !== undefined) {
          executeJob();
        }
      }
    };
  }

  start() {
    if (this.stopped) {
      this.stopped = false;
      window.addEventListener('message', this.handleMessage, true);
    }
  }

  stop() {
    this.stopped = true;
    window.removeEventListener('message', this.handleMessage, true);
  }

  postTask(fn) {
    if (!this.stopped) {
      this.executionQueue.push(fn);
      window.postMessage(this.messageName, '*');
    }
  }

}

exports.MicroTaskScheduler = MicroTaskScheduler;
},{}],"execute.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVRRunner = void 0; //Edited version of demo file provided by Wokwi at https://github.com/wokwi/avr8js/blob/master/demo/src/execute.ts
//Edited by Mark Megarry August 2020

const avr8js_1 = require("avr8js");

const intelhex_1 = require("./intelhex");

const task_scheduler_1 = require("./task-scheduler"); // ATmega328p params


const FLASH = 0x8000;

class AVRRunner {
  constructor(hex) {
    this.program = new Uint16Array(FLASH);
    this.speed = 16e6; // 16 MHZ

    this.workUnitCycles = 500000;
    this.taskScheduler = new task_scheduler_1.MicroTaskScheduler();
    intelhex_1.loadHex(hex, new Uint8Array(this.program.buffer));
    this.cpu = new avr8js_1.CPU(this.program);
    this.timer0 = new avr8js_1.AVRTimer(this.cpu, avr8js_1.timer0Config);
    this.timer1 = new avr8js_1.AVRTimer(this.cpu, avr8js_1.timer1Config);
    this.timer2 = new avr8js_1.AVRTimer(this.cpu, avr8js_1.timer2Config);
    this.portB = new avr8js_1.AVRIOPort(this.cpu, avr8js_1.portBConfig);
    this.portC = new avr8js_1.AVRIOPort(this.cpu, avr8js_1.portCConfig);
    this.portD = new avr8js_1.AVRIOPort(this.cpu, avr8js_1.portDConfig);
    this.usart = new avr8js_1.AVRUSART(this.cpu, avr8js_1.usart0Config, this.speed); // Simulate analog port (so that analogRead() eventually return)

    this.cpu.writeHooks[0x7a] = value => {
      //globalThis.console.log(value);	Check what value is
      if (value & 1 << 6) {
        this.cpu.data[0x7a] = value & ~(1 << 6); // clear bit - conversion done

        const ADMUXval = this.cpu.data[0x7c]; //Value held in ADMUX selection register

        const analogPin = ADMUXval & 15; //Apply mask to clear first 4 bits as only latter half is important for selection

        globalThis.AVR8jsFalstad.Runner.portC.setAnalogValue(globalThis.AVR8jsFalstad.analogArray[analogPin]);
        return true; // don't update
      }
    };

    this.taskScheduler.start();
    globalThis.AVR8jsFalstad.CircuitTime = new globalThis.JSCircuitTime(); //Added by Mark Megarry

    globalThis.AVR8jsFalstad.prevTime = globalThis.AVR8jsFalstad.CircuitTime.getTime(); //Added by Mark Megarry
  } // CPU main loop
  //var timeDiff = globalThis.CircuitTime.getTime() - prevTime;
  //var timeBasedCycles = timeDiff*speed;


  execute(callback) {
    var timeDiff = globalThis.AVR8jsFalstad.CircuitTime.getTime() - globalThis.AVR8jsFalstad.prevTime; //Added by Mark Megarry

    globalThis.AVR8jsFalstad.timeBasedCycles = timeDiff * this.speed; //Added by Mark Megarry

    const cyclesToRun = this.cpu.cycles + globalThis.AVR8jsFalstad.timeBasedCycles; //Edited by Mark Megarry

    while (this.cpu.cycles < cyclesToRun) {
      avr8js_1.avrInstruction(this.cpu);
      this.timer0.tick();
      this.timer1.tick();
      this.timer2.tick();
      this.usart.tick();
    } //prevTime = CircuitTime.getTime();


    globalThis.AVR8jsFalstad.prevTime = globalThis.AVR8jsFalstad.CircuitTime.getTime(); //Added by Mark Megarry

    callback(this.cpu);
    this.taskScheduler.postTask(() => this.execute(callback));
  }

  stop() {
    this.taskScheduler.stop();
  }

}

exports.AVRRunner = AVRRunner;
},{"avr8js":"../../src/index.ts","./intelhex":"intelhex.ts","./task-scheduler":"task-scheduler.ts"}],"format-time.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = void 0;

function zeroPad(value, length) {
  let sval = value.toString();

  while (sval.length < length) {
    sval = '0' + sval;
  }

  return sval;
}

function formatTime(seconds) {
  const ms = Math.floor(seconds * 1000) % 1000;
  const secs = Math.floor(seconds % 60);
  const mins = Math.floor(seconds / 60);
  return `${zeroPad(mins, 2)}:${zeroPad(secs, 2)}.${zeroPad(ms, 3)}`;
}

exports.formatTime = formatTime;
},{}],"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"utils/editor-history.util.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorHistoryUtil = void 0;
const AVRJS8_EDITOR_HISTORY = 'AVRJS8_EDITOR_HISTORY';

class EditorHistoryUtil {
  static storeSnippet(codeSnippet) {
    if (!EditorHistoryUtil.hasLocalStorage) {
      return;
    }

    window.localStorage.setItem(AVRJS8_EDITOR_HISTORY, codeSnippet);
  }

  static clearSnippet() {
    if (!EditorHistoryUtil.hasLocalStorage) {
      return;
    }

    localStorage.removeItem(AVRJS8_EDITOR_HISTORY);
  }

  static getValue() {
    if (!EditorHistoryUtil.hasLocalStorage) {
      return;
    }

    return localStorage.getItem(AVRJS8_EDITOR_HISTORY);
  }

}

exports.EditorHistoryUtil = EditorHistoryUtil;
EditorHistoryUtil.hasLocalStorage = !!window.localStorage;
},{}],"index.ts":[function(require,module,exports) {
"use strict"; //This is an edited version of the demo program provided by Wokwi at https://github.com/wokwi/avr8js/blob/master/demo/src/index.ts
//Edited by Mark Megarry August 2020

Object.defineProperty(exports, "__esModule", {
  value: true
});

const compile_1 = require("./compile");

const cpu_performance_1 = require("./cpu-performance");

const execute_1 = require("./execute");

const format_time_1 = require("./format-time");

require("./index.css");

const editor_history_util_1 = require("./utils/editor-history.util");

let editor; // eslint-disable-line @typescript-eslint/no-explicit-any

const BLINK_CODE = `
//Pin 7 is accessed by pin D7
//Pin 13 is accessed by pin B5
//Pin 11 is accessed by pin B3

void setup() {
  pinMode(13, OUTPUT);
  pinMode(7, INPUT);
  digitalWrite(13, LOW);
  analogWrite(11, 100);
   Serial.begin(115200);
   Serial.println("Program is starting...");
}

void loop() {
  if(digitalRead(7) == HIGH){
    digitalWrite(13, HIGH);
  }

  else if(digitalRead(7) == LOW){
    digitalWrite(13, LOW);
  }
}`.trim();

window.require.config({
  paths: {
    vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min/vs'
  }
});

window.require(['vs/editor/editor.main'], () => {
  editor = monaco.editor.create(document.querySelector('.code-editor'), {
    value: editor_history_util_1.EditorHistoryUtil.getValue() || BLINK_CODE,
    language: 'cpp',
    minimap: {
      enabled: false
    }
  });
});

const runButton = document.querySelector('#run-button');
runButton.addEventListener('click', compileAndRun);
const stopButton = document.querySelector('#stop-button');
stopButton.addEventListener('click', stopCode);
const revertButton = document.querySelector('#revert-button');
revertButton.addEventListener('click', setBlinkSnippet);
const statusLabel = document.querySelector('#status-label');
const compilerOutputText = document.querySelector('#compiler-output-text');
const serialOutputText = document.querySelector('#serial-output-text');

function executeProgram(hex) {
  globalThis.AVR8jsFalstad.Runner = new execute_1.AVRRunner(hex);
  const MHZ = 16000000;

  globalThis.AVR8jsFalstad.Runner.usart.onByteTransmit = value => {
    serialOutputText.textContent += String.fromCharCode(value);
  };

  const cpuPerf = new cpu_performance_1.CPUPerformance(globalThis.AVR8jsFalstad.Runner.cpu, MHZ);
  globalThis.AVR8jsFalstad.Runner.execute(cpu => {
    const time = format_time_1.formatTime(cpu.cycles / MHZ);
    const speed = (cpuPerf.update() * 100).toFixed(0);
    statusLabel.textContent = `Simulation time: ${time} (${speed}%)`;
  });
}

async function compileAndRun() {
  storeUserSnippet();
  runButton.setAttribute('disabled', '1');
  revertButton.setAttribute('disabled', '1');
  serialOutputText.textContent = '';

  try {
    statusLabel.textContent = 'Compiling...';
    const result = await compile_1.buildHex(editor.getModel().getValue());
    compilerOutputText.textContent = result.stderr || result.stdout;

    if (result.hex) {
      compilerOutputText.textContent += '\nProgram running...';
      stopButton.removeAttribute('disabled');
      executeProgram(result.hex);
    } else {
      runButton.removeAttribute('disabled');
    }
  } catch (err) {
    runButton.removeAttribute('disabled');
    revertButton.removeAttribute('disabled');
    alert('Failed: ' + err);
  } finally {
    statusLabel.textContent = '';
  }
}

function storeUserSnippet() {
  editor_history_util_1.EditorHistoryUtil.clearSnippet();
  editor_history_util_1.EditorHistoryUtil.storeSnippet(editor.getValue());
}

function stopCode() {
  stopButton.setAttribute('disabled', '1');
  runButton.removeAttribute('disabled'); //revertButton.removeAttribute('disabled');

  if (globalThis.AVR8jsFalstad.Runner) {
    globalThis.AVR8jsFalstad.Runner.stop();
    globalThis.AVR8jsFalstad.Runner = null;
  }
}

function setBlinkSnippet() {
  editor.setValue(BLINK_CODE);
  editor_history_util_1.EditorHistoryUtil.storeSnippet(editor.getValue());
}
},{"./compile":"compile.ts","./cpu-performance":"cpu-performance.ts","./execute":"execute.ts","./format-time":"format-time.ts","./index.css":"index.css","./utils/editor-history.util":"utils/editor-history.util.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57298" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map