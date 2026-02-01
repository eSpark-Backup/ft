export const handleTabataRestTime = (props, state) => {
    props.tabataRest == 20
      ? (state.restMinArray.push('00'), state.restSecArray.push('20'))
      : props.tabataRest == 30
      ? (state.restMinArray.push('00'), state.restSecArray.push('30'))
      : props.tabataRest == 45
      ? (state.restMinArray.push('00'), state.restSecArray.push('45'))
      : props.tabataRest == 60
      ? (state.restMinArray.push('00'), state.restSecArray.push('60'))
      : props.tabataRest == 75
      ? (state.restMinArray.push('01'), state.restSecArray.push('15'))
      : props.tabataRest == 90
      ? (state.restMinArray.push('01'), state.restSecArray.push('30'))
      : props.tabataRest == 105
      ? (state.restMinArray.push('01'), state.restSecArray.push('45'))
      : props.tabataRest == 120
      ? (state.restMinArray.push('02'), state.restSecArray.push('00'))
      : props.tabataRest == 135
      ? (state.restMinArray.push('02'), state.restSecArray.push('15'))
      : props.tabataRest == 150
      ? (state.restMinArray.push('02'), state.restSecArray.push('30'))
      : props.tabataRest == 180
      ? (state.restMinArray.push('03'), state.restSecArray.push('00'))
      : props.tabataRest == 210
      ? (state.restMinArray.push('03'), state.restSecArray.push('30'))
      : props.tabataRest == 240
      ? (state.restMinArray.push('04'), state.restSecArray.push('00'))
      : props.tabataRest == 270
      ? (state.restMinArray.push('04'), state.restSecArray.push('30'))
      : props.tabataRest == 300
      ? (state.restMinArray.push('05'), state.restSecArray.push('00'))
      : props.tabataRest == 360
      ? (state.restMinArray.push('06'), state.restSecArray.push('00'))
      : props.tabataRest == 420
      ? (state.restMinArray.push('07'), state.restSecArray.push('00'))
      : props.tabataRest == 480
      ? (state.restMinArray.push('08'), state.restSecArray.push('00'))
      : props.tabataRest == 540
      ? (state.restMinArray.push('09'), state.restSecArray.push('00'))
      : props.tabataRest == 600
      ? (state.restMinArray.push('10'), state.restSecArray.push('00'))
      : props.tabataRest == 660
      ? (state.restMinArray.push('11'), state.restSecArray.push('00'))
      : props.tabataRest == 720
      ? (state.restMinArray.push('12'), state.restSecArray.push('00'))
      : props.tabataRest == 780
      ? (state.restMinArray.push('13'), state.restSecArray.push('00'))
      : props.tabataRest == 840
      ? (state.restMinArray.push('14'), state.restSecArray.push('00'))
      : props.tabataRest == 900
      ? (state.restMinArray.push('15'), state.restSecArray.push('00'))
      : props.tabataRest == 960
      ? (state.restMinArray.push('16'), state.restSecArray.push('00'))
      : props.tabataRest == 1020
      ? (state.restMinArray.push('17'), state.restSecArray.push('00'))
      : props.tabataRest == 1080
      ? (state.restMinArray.push('18'), state.restSecArray.push('00'))
      : props.tabataRest == 1140
      ? (state.restMinArray.push('19'), state.restSecArray.push('00'))
      : props.tabataRest == 1200
      ? (state.restMinArray.push('20'), state.restSecArray.push('00'))
      : props.tabataRest == 1260
      ? (state.restMinArray.push('21'), state.restSecArray.push('00'))
      : props.tabataRest == 1320
      ? (state.restMinArray.push('22'), state.restSecArray.push('00'))
      : props.tabataRest == 1380
      ? (state.restMinArray.push('23'), state.restSecArray.push('00'))
      : props.tabataRest == 1440
      ? (state.restMinArray.push('24'), state.restSecArray.push('00'))
      : props.tabataRest == 1500
      ? (state.restMinArray.push('25'), state.restSecArray.push('00'))
      : props.tabataRest == 1560
      ? (state.restMinArray.push('26'), state.restSecArray.push('00'))
      : props.tabataRest == 1620
      ? (state.restMinArray.push('27'), state.restSecArray.push('00'))
      : props.tabataRest == 1680
      ? (state.restMinArray.push('28'), state.restSecArray.push('00'))
      : props.tabataRest == 1740
      ? (state.restMinArray.push('29'), state.restSecArray.push('00'))
      : props.tabataRest == 1800
      ? (state.restMinArray.push('30'), state.restSecArray.push('00'))
      : props.tabataRest == 1860
      ? (state.restMinArray.push('31'), state.restSecArray.push('00'))
      : props.tabataRest == 1920
      ? (state.restMinArray.push('32'), state.restSecArray.push('00'))
      : props.tabataRest == 1980
      ? (state.restMinArray.push('33'), state.restSecArray.push('00'))
      : props.tabataRest == 2040
      ? (state.restMinArray.push('34'), state.restSecArray.push('00'))
      : props.tabataRest == 2100
      ? (state.restMinArray.push('35'), state.restSecArray.push('00'))
      : props.tabataRest == 2160
      ? (state.restMinArray.push('36'), state.restSecArray.push('00'))
      : props.tabataRest == 2220
      ? (state.restMinArray.push('37'), state.restSecArray.push('00'))
      : props.tabataRest == 2280
      ? (state.restMinArray.push('38'), state.restSecArray.push('00'))
      : props.tabataRest == 2340
      ? (state.restMinArray.push('39'), state.restSecArray.push('00'))
      : props.tabataRest == 2400
      ? (state.restMinArray.push('40'), state.restSecArray.push('00'))
      : props.tabataRest == 2460
      ? (state.restMinArray.push('41'), state.restSecArray.push('00'))
      : props.tabataRest == 2520
      ? (state.restMinArray.push('42'), state.restSecArray.push('00'))
      : props.tabataRest == 2580
      ? (state.restMinArray.push('43'), state.restSecArray.push('00'))
      : props.tabataRest == 2640
      ? (state.restMinArray.push('44'), state.restSecArray.push('00'))
      : props.tabataRest == 2700
      ? (state.restMinArray.push('45'), state.restSecArray.push('00'))
      : props.tabataRest == 2760
      ? (state.restMinArray.push('46'), state.restSecArray.push('00'))
      : props.tabataRest == 2820
      ? (state.restMinArray.push('47'), state.restSecArray.push('00'))
      : props.tabataRest == 2880
      ? (state.restMinArray.push('48'), state.restSecArray.push('00'))
      : props.tabataRest == 2940
      ? (state.restMinArray.push('49'), state.restSecArray.push('00'))
      : props.tabataRest == 3000
      ? (state.restMinArray.push('50'), state.restSecArray.push('00'))
      : props.tabataRest == 3060
      ? (state.restMinArray.push('51'), state.restSecArray.push('00'))
      : props.tabataRest == 3120
      ? (state.restMinArray.push('52'), state.restSecArray.push('00'))
      : props.tabataRest == 3180
      ? (state.restMinArray.push('53'), state.restSecArray.push('00'))
      : props.tabataRest == 3240
      ? (state.restMinArray.push('54'), state.restSecArray.push('00'))
      : props.tabataRest == 3300
      ? (state.restMinArray.push('55'), state.restSecArray.push('00'))
      : props.tabataRest == 3360
      ? (state.restMinArray.push('56'), state.restSecArray.push('00'))
      : props.tabataRest == 3420
      ? (state.restMinArray.push('57'), state.restSecArray.push('00'))
      : props.tabataRest == 3480
      ? (state.restMinArray.push('58'), state.restSecArray.push('00'))
      : props.tabataRest == 3540
      ? (state.restMinArray.push('59'), state.restSecArray.push('00'))
      : props.tabataRest == 3600
      ? (state.restMinArray.push('60'), state.restSecArray.push('00'))
      : props.tabataRest == 3660
      ? (state.restMinArray.push('61'), state.restSecArray.push('00'))
      : props.tabataRest == 3720
      ? (state.restMinArray.push('62'), state.restSecArray.push('00'))
      : props.tabataRest == 3780
      ? (state.restMinArray.push('63'), state.restSecArray.push('00'))
      : props.tabataRest == 3840
      ? (state.restMinArray.push('64'), state.restSecArray.push('00'))
      : props.tabataRest == 3900
      ? (state.restMinArray.push('65'), state.restSecArray.push('00'))
      : props.tabataRest == 3960
      ? (state.restMinArray.push('66'), state.restSecArray.push('00'))
      : props.tabataRest == 4020
      ? (state.restMinArray.push('67'), state.restSecArray.push('00'))
      : props.tabataRest == 4080
      ? (state.restMinArray.push('68'), state.restSecArray.push('00'))
      : props.tabataRest == 4140
      ? (state.restMinArray.push('69'), state.restSecArray.push('00'))
      : props.tabataRest == 4200
      ? (state.restMinArray.push('70'), state.restSecArray.push('00'))
      : props.tabataRest == 4260
      ? (state.restMinArray.push('71'), state.restSecArray.push('00'))
      : props.tabataRest == 4320
      ? (state.restMinArray.push('72'), state.restSecArray.push('00'))
      : props.tabataRest == 4380
      ? (state.restMinArray.push('73'), state.restSecArray.push('00'))
      : props.tabataRest == 4440
      ? (state.restMinArray.push('74'), state.restSecArray.push('00'))
      : props.tabataRest == 4500
      ? (state.restMinArray.push('75'), state.restSecArray.push('00'))
      : props.tabataRest == 4560
      ? (state.restMinArray.push('76'), state.restSecArray.push('00'))
      : props.tabataRest == 4620
      ? (state.restMinArray.push('77'), state.restSecArray.push('00'))
      : props.tabataRest == 4680
      ? (state.restMinArray.push('78'), state.restSecArray.push('00'))
      : props.tabataRest == 4740
      ? (state.restMinArray.push('79'), state.restSecArray.push('00'))
      : props.tabataRest == 4800
      ? (state.restMinArray.push('80'), state.restSecArray.push('00'))
      : props.tabataRest == 4860
      ? (state.restMinArray.push('81'), state.restSecArray.push('00'))
      : props.tabataRest == 4920
      ? (state.restMinArray.push('82'), state.restSecArray.push('00'))
      : props.tabataRest == 4980
      ? (state.restMinArray.push('83'), state.restSecArray.push('00'))
      : props.tabataRest == 5040
      ? (state.restMinArray.push('84'), state.restSecArray.push('00'))
      : props.tabataRest == 5100
      ? (state.restMinArray.push('85'), state.restSecArray.push('00'))
      : props.tabataRest == 5160
      ? (state.restMinArray.push('86'), state.restSecArray.push('00'))
      : props.tabataRest == 5220
      ? (state.restMinArray.push('87'), state.restSecArray.push('00'))
      : props.tabataRest == 5280
      ? (state.restMinArray.push('88'), state.restSecArray.push('00'))
      : props.tabataRest == 5340
      ? (state.restMinArray.push('89'), state.restSecArray.push('00'))
      : props.tabataRest == 5400
      ? (state.restMinArray.push('90'), state.restSecArray.push('00'))
      : props.tabataRest == 5460
      ? (state.restMinArray.push('91'), state.restSecArray.push('00'))
      : props.tabataRest == 5520
      ? (state.restMinArray.push('92'), state.restSecArray.push('00'))
      : props.tabataRest == 5580
      ? (state.restMinArray.push('93'), state.restSecArray.push('00'))
      : props.tabataRest == 5640
      ? (state.restMinArray.push('94'), state.restSecArray.push('00'))
      : props.tabataRest == 5700
      ? (state.restMinArray.push('95'), state.restSecArray.push('00'))
      : props.tabataRest == 5760
      ? (state.restMinArray.push('96'), state.restSecArray.push('00'))
      : props.tabataRest == 5820
      ? (state.restMinArray.push('97'), state.restSecArray.push('00'))
      : props.tabataRest == 5880
      ? (state.restMinArray.push('98'), state.restSecArray.push('00'))
      : props.tabataRest == 5940
      ? (state.restMinArray.push('99'), state.restSecArray.push('00'))
      : props.tabataRest == 5999
      ? (state.restMinArray.push('99'), state.restSecArray.push('59'))
      : (state.restMinArray.push('00'), state.restSecArray.push('00'));
  };