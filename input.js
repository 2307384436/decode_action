      return _0x1ef277;
    }
    [_0x29bdca(173) + _0x29bdca(835)]() {
      const _0x140049 = _0x29bdca;
      return this[_0x140049(173) + _0x140049(1976) + "ern"](_0x2aafe6[_0x140049(1926)]);
    }
    [_0x29bdca(173) + _0x29bdca(343) + "ng"](_0x1e4fee, _0x58454d = _0x29bdca(1948) + _0x29bdca(574) + "45678" + "9") {
      const _0x437585 = _0x29bdca;
      let _0x437894 = "";
      for (let _0x5b91d3 = 0; _0x2aafe6.xTofR(_0x5b91d3, _0x1e4fee); _0x5b91d3++) {
        _0x437894 += _0x58454d[_0x437585(818) + "t"](Math.floor(Math[_0x437585(173) + "m"]() * _0x58454d.length));
      }
      return _0x437894;
    }
    [_0x29bdca(173) + _0x29bdca(658)](_0x243ee5) {
      const _0x2c94aa = _0x29bdca;
      let _0x5d4508 = Math[_0x2c94aa(1322)](_0x2aafe6[_0x2c94aa(985)](Math.random(), _0x243ee5[_0x2c94aa(1417) + "h"]));
      return _0x243ee5[_0x5d4508];
    }
    wait(_0x7fb1b7) {
      return new Promise(_0x13dc83 => setTimeout(_0x13dc83, _0x7fb1b7));
    }
    async [_0x29bdca(605) + "ow"]() {
      const _0x44d799 = _0x29bdca;
      await this[_0x44d799(778) + "sg"]();
      let _0x3b76e8 = Date[_0x44d799(1274)](),
        _0x4e1727 = _0x2aafe6[_0x44d799(1647)](_0x2aafe6[_0x44d799(617)](_0x3b76e8, this.startTime), 1000);
      this.log("");
      const _0x265b3c = {};
      _0x265b3c[_0x44d799(795)] = true;
      this[_0x44d799(1046)]("[" + this[_0x44d799(246)] + (_0x44d799(1018) + _0x44d799(233)) + _0x4e1727 + "秒", _0x265b3c);
      process[_0x44d799(1648)](0);
    }
    ["norma" + _0x29bdca(697) + _0x29bdca(795)](_0x138270, _0x5b6289 = {}) {
      const _0x5ead18 = _0x29bdca;
      let _0x40e1b4 = _0x5b6289[_0x5ead18(1072)] || this["default_ti" + _0x5ead18(1010) + _0x5ead18(1288) + "n"];
      _0x138270 = _0x138270[_0x5ead18(1323) + _0x5ead18(185)]();
      let _0x2a2577 = _0x138270[_0x5ead18(1417) + "h"];
      while (_0x2a2577 < _0x40e1b4) {
        _0x138270 += "0";
      }
      if (_0x2a2577 > _0x40e1b4) {
        _0x138270 = _0x138270[_0x5ead18(536)](0, 13);
      }
      return _0x2aafe6.nqEKu(parseInt, _0x138270);
    }
    async [_0x29bdca(1284) + _0x29bdca(787)](_0x25aba7, _0x4c0658 = {}) {
      const _0x5e6e21 = _0x29bdca;
      let _0x219c45 = _0x4c0658.logger || this,
        _0x501f43 = _0x4c0658[_0x5e6e21(966) + _0x5e6e21(856)] || default_wait_interval,
        _0x51a46f = _0x4c0658[_0x5e6e21(897)] || default_wait_limit,
        _0xbc5c1a = _0x4c0658[_0x5e6e21(1862)] || default_wait_ahead;
      if (_0x2aafe6[_0x5e6e21(476)](typeof _0x25aba7, _0x2aafe6[_0x5e6e21(678)]) && _0x25aba7[_0x5e6e21(1459) + _0x5e6e21(1230)](":")) {
        if (_0x25aba7[_0x5e6e21(1459) + "des"]("-")) {
          _0x25aba7 = new Date(_0x25aba7).getTime();
        } else {
          let _0x59861b = this[_0x5e6e21(795)](_0x2aafe6.wOjQA);
          _0x25aba7 = new Date(_0x2aafe6.Vqhta(_0x59861b, _0x25aba7))[_0x5e6e21(1382) + "me"]();
        }
      }
      let _0x1afff0 = _0x2aafe6[_0x5e6e21(176)](this[_0x5e6e21(1184) + _0x5e6e21(697) + "time"](_0x25aba7), _0xbc5c1a),
        _0x5e4710 = this[_0x5e6e21(795)](_0x2aafe6[_0x5e6e21(1875)], _0x1afff0),
        _0x1b5a4f = Date[_0x5e6e21(1274)]();
      if (_0x2aafe6[_0x5e6e21(947)](_0x1b5a4f, _0x1afff0)) {
        _0x1afff0 += _0x2aafe6.SDyoy(_0x2aafe6[_0x5e6e21(1281)](_0x2aafe6[_0x5e6e21(785)](24, 60), 60), 1000);
      }
      let _0x10797a = _0x2aafe6[_0x5e6e21(176)](_0x1afff0, _0x1b5a4f);
      if (_0x2aafe6.MmmEu(_0x10797a, _0x51a46f)) {
        const _0x1b182a = {
          time: true
        };
        _0x219c45.log(_0x5e6e21(760) + "[" + _0x5e4710 + "]大于" + _0x51a46f / 1000 + "秒,不等待", _0x1b182a);
      } else {
        const _0x2644ea = {
          time: true
        };
        _0x219c45[_0x5e6e21(1046)](_0x5e6e21(760) + "[" + _0x5e4710 + _0x5e6e21(285) + _0x2aafe6[_0x5e6e21(1647)](_0x10797a, 1000) + (_0x5e6e21(1551) + "待"), _0x2644ea);
        while (_0x2aafe6[_0x5e6e21(2046)](_0x10797a, 0)) {
          let _0x59135c = Math[_0x5e6e21(554)](_0x10797a, _0x501f43);
          await this[_0x5e6e21(923)](_0x59135c);
          _0x1b5a4f = Date[_0x5e6e21(1274)]();
          _0x10797a = _0x2aafe6[_0x5e6e21(1656)](_0x1afff0, _0x1b5a4f);
        }
        const _0x246dd7 = {};
        _0x246dd7[_0x5e6e21(795)] = true;
        _0x219c45.log(_0x5e6e21(1485), _0x246dd7);
      }
    }
    async [_0x29bdca(1284) + _0x29bdca(1471) + _0x29bdca(2040) + "al"](_0x380985, _0x47b42d) {
      const _0x3c984a = _0x29bdca;
      let _0x55e493 = _0x2aafe6[_0x3c984a(232)](Date[_0x3c984a(1274)](), _0x380985);
      if (_0x2aafe6[_0x3c984a(1406)](_0x55e493, _0x47b42d)) {
        await this[_0x3c984a(923)](_0x47b42d - _0x55e493);
      }
    }
  }(_0x3dc8ae);
