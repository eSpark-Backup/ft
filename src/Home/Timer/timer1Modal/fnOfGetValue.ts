export const handleAmrapTime = (props, state) => {
  props.amrap == 20 || props.emomMinutes == 20 || props.tabataMinutes == 20
    ? (state.minArray.push('00'), state.secArray.push('20'))
    : props.amrap == 30 || props.emomMinutes == 30 || props.tabataMinutes == 30
    ? (state.minArray.push('00'), state.secArray.push('30'))
    : props.amrap == 45 || props.emomMinutes == 45 || props.tabataMinutes == 45
    ? (state.minArray.push('00'), state.secArray.push('45'))
    : props.amrap == 60 || props.emomMinutes == 60 || props.tabataMinutes == 60
    ? (state.minArray.push('00'), state.secArray.push('60'))
    : props.amrap == 75 || props.emomMinutes == 75 || props.tabataMinutes == 75
    ? (state.minArray.push('01'), state.secArray.push('15'))
    : props.amrap == 90 || props.emomMinutes == 90 || props.tabataMinutes == 90
    ? (state.minArray.push('01'), state.secArray.push('30'))
    : props.amrap == 105 ||
      props.emomMinutes == 105 ||
      props.tabataMinutes == 105
    ? (state.minArray.push('01'), state.secArray.push('45'))
    : props.amrap == 120 ||
      props.emomMinutes == 120 ||
      props.tabataMinutes == 120
    ? (state.minArray.push('02'), state.secArray.push('00'))
    : props.amrap == 135 ||
      props.emomMinutes == 135 ||
      props.tabataMinutes == 135
    ? (state.minArray.push('02'), state.secArray.push('15'))
    : props.amrap == 150 ||
      props.emomMinutes == 150 ||
      props.tabataMinutes == 150
    ? (state.minArray.push('02'), state.secArray.push('30'))
    : props.amrap == 180 ||
      props.emomMinutes == 180 ||
      props.tabataMinutes == 180
    ? (state.minArray.push('03'), state.secArray.push('00'))
    : props.amrap == 210 ||
      props.emomMinutes == 210 ||
      props.tabataMinutes == 210
    ? (state.minArray.push('03'), state.secArray.push('30'))
    : props.amrap == 240 ||
      props.emomMinutes == 240 ||
      props.tabataMinutes == 240
    ? (state.minArray.push('04'), state.secArray.push('00'))
    : props.amrap == 270 ||
      props.emomMinutes == 270 ||
      props.tabataMinutes == 270
    ? (state.minArray.push('04'), state.secArray.push('30'))
    : props.amrap == 300 ||
      props.emomMinutes == 300 ||
      props.tabataMinutes == 300
    ? (state.minArray.push('05'), state.secArray.push('00'))
    : props.amrap == 360 ||
      props.emomMinutes == 360 ||
      props.tabataMinutes == 360
    ? (state.minArray.push('06'), state.secArray.push('00'))
    : props.amrap == 420 ||
      props.emomMinutes == 420 ||
      props.tabataMinutes == 420
    ? (state.minArray.push('07'), state.secArray.push('00'))
    : props.amrap == 480 ||
      props.emomMinutes == 480 ||
      props.tabataMinutes == 480
    ? (state.minArray.push('08'), state.secArray.push('00'))
    : props.amrap == 540 ||
      props.emomMinutes == 540 ||
      props.tabataMinutes == 540
    ? (state.minArray.push('09'), state.secArray.push('00'))
    : props.amrap == 600 ||
      props.emomMinutes == 600 ||
      props.tabataMinutes == 600
    ? (state.minArray.push('10'), state.secArray.push('00'))
    : props.amrap == 660 ||
      props.emomMinutes == 660 ||
      props.tabataMinutes == 660
    ? (state.minArray.push('11'), state.secArray.push('00'))
    : props.amrap == 720 ||
      props.emomMinutes == 720 ||
      props.tabataMinutes == 720
    ? (state.minArray.push('12'), state.secArray.push('00'))
    : props.amrap == 780 ||
      props.emomMinutes == 780 ||
      props.tabataMinutes == 780
    ? (state.minArray.push('13'), state.secArray.push('00'))
    : props.amrap == 840 ||
      props.emomMinutes == 840 ||
      props.tabataMinutes == 840
    ? (state.minArray.push('14'), state.secArray.push('00'))
    : props.amrap == 900 ||
      props.emomMinutes == 900 ||
      props.tabataMinutes == 900
    ? (state.minArray.push('15'), state.secArray.push('00'))
    : props.amrap == 960 ||
      props.emomMinutes == 960 ||
      props.tabataMinutes == 960
    ? (state.minArray.push('16'), state.secArray.push('00'))
    : props.amrap == 1020 ||
      props.emomMinutes == 1020 ||
      props.tabataMinutes == 1020
    ? (state.minArray.push('17'), state.secArray.push('00'))
    : props.amrap == 1080 ||
      props.emomMinutes == 1080 ||
      props.tabataMinutes == 1080
    ? (state.minArray.push('18'), state.secArray.push('00'))
    : props.amrap == 1140 ||
      props.emomMinutes == 1140 ||
      props.tabataMinutes == 1140
    ? (state.minArray.push('19'), state.secArray.push('00'))
    : props.amrap == 1200 ||
      props.emomMinutes == 1200 ||
      props.tabataMinutes == 1200
    ? (state.minArray.push('20'), state.secArray.push('00'))
    : props.amrap == 1260 ||
      props.emomMinutes == 1260 ||
      props.tabataMinutes == 1260
    ? (state.minArray.push('21'), state.secArray.push('00'))
    : props.amrap == 1320 ||
      props.emomMinutes == 1320 ||
      props.tabataMinutes == 1320
    ? (state.minArray.push('22'), state.secArray.push('00'))
    : props.amrap == 1380 ||
      props.emomMinutes == 1380 ||
      props.tabataMinutes == 1380
    ? (state.minArray.push('23'), state.secArray.push('00'))
    : props.amrap == 1440 ||
      props.emomMinutes == 1440 ||
      props.tabataMinutes == 1440
    ? (state.minArray.push('24'), state.secArray.push('00'))
    : props.amrap == 1500 ||
      props.emomMinutes == 1500 ||
      props.tabataMinutes == 1500
    ? (state.minArray.push('25'), state.secArray.push('00'))
    : props.amrap == 1560 ||
      props.emomMinutes == 1560 ||
      props.tabataMinutes == 1560
    ? (state.minArray.push('26'), state.secArray.push('00'))
    : props.amrap == 1620 ||
      props.emomMinutes == 1620 ||
      props.tabataMinutes == 1620
    ? (state.minArray.push('27'), state.secArray.push('00'))
    : props.amrap == 1680 ||
      props.emomMinutes == 1680 ||
      props.tabataMinutes == 1680
    ? (state.minArray.push('28'), state.secArray.push('00'))
    : props.amrap == 1740 ||
      props.emomMinutes == 1740 ||
      props.tabataMinutes == 1740
    ? (state.minArray.push('29'), state.secArray.push('00'))
    : props.amrap == 1800 ||
      props.emomMinutes == 1800 ||
      props.tabataMinutes == 1800
    ? (state.minArray.push('30'), state.secArray.push('00'))
    : props.amrap == 1860 ||
      props.emomMinutes == 1860 ||
      props.tabataMinutes == 1860
    ? (state.minArray.push('31'), state.secArray.push('00'))
    : props.amrap == 1920 ||
      props.emomMinutes == 1920 ||
      props.tabataMinutes == 1920
    ? (state.minArray.push('32'), state.secArray.push('00'))
    : props.amrap == 1980 ||
      props.emomMinutes == 1980 ||
      props.tabataMinutes == 1980
    ? (state.minArray.push('33'), state.secArray.push('00'))
    : props.amrap == 2040 ||
      props.emomMinutes == 2040 ||
      props.tabataMinutes == 2040
    ? (state.minArray.push('34'), state.secArray.push('00'))
    : props.amrap == 2100 ||
      props.emomMinutes == 2100 ||
      props.tabataMinutes == 2100
    ? (state.minArray.push('35'), state.secArray.push('00'))
    : props.amrap == 2160 ||
      props.emomMinutes == 2160 ||
      props.tabataMinutes == 2160
    ? (state.minArray.push('36'), state.secArray.push('00'))
    : props.amrap == 2220 ||
      props.emomMinutes == 2220 ||
      props.tabataMinutes == 2220
    ? (state.minArray.push('37'), state.secArray.push('00'))
    : props.amrap == 2280 ||
      props.emomMinutes == 2280 ||
      props.tabataMinutes == 2280
    ? (state.minArray.push('38'), state.secArray.push('00'))
    : props.amrap == 2340 ||
      props.emomMinutes == 2340 ||
      props.tabataMinutes == 2340
    ? (state.minArray.push('39'), state.secArray.push('00'))
    : props.amrap == 2400 ||
      props.emomMinutes == 2400 ||
      props.tabataMinutes == 2400
    ? (state.minArray.push('40'), state.secArray.push('00'))
    : props.amrap == 2460 ||
      props.emomMinutes == 2460 ||
      props.tabataMinutes == 2460
    ? (state.minArray.push('41'), state.secArray.push('00'))
    : props.amrap == 2520 ||
      props.emomMinutes == 2520 ||
      props.tabataMinutes == 2520
    ? (state.minArray.push('42'), state.secArray.push('00'))
    : props.amrap == 2580 ||
      props.emomMinutes == 2580 ||
      props.tabataMinutes == 2580
    ? (state.minArray.push('43'), state.secArray.push('00'))
    : props.amrap == 2640 ||
      props.emomMinutes == 2640 ||
      props.tabataMinutes == 2640
    ? (state.minArray.push('44'), state.secArray.push('00'))
    : props.amrap == 2700 ||
      props.emomMinutes == 2700 ||
      props.tabataMinutes == 2700
    ? (state.minArray.push('45'), state.secArray.push('00'))
    : props.amrap == 2760 ||
      props.emomMinutes == 2760 ||
      props.tabataMinutes == 2760
    ? (state.minArray.push('46'), state.secArray.push('00'))
    : props.amrap == 2820 ||
      props.emomMinutes == 2820 ||
      props.tabataMinutes == 2820
    ? (state.minArray.push('47'), state.secArray.push('00'))
    : props.amrap == 2880 ||
      props.emomMinutes == 2880 ||
      props.tabataMinutes == 2880
    ? (state.minArray.push('48'), state.secArray.push('00'))
    : props.amrap == 2940 ||
      props.emomMinutes == 2940 ||
      props.tabataMinutes == 2940
    ? (state.minArray.push('49'), state.secArray.push('00'))
    : props.amrap == 3000 ||
      props.emomMinutes == 3000 ||
      props.tabataMinutes == 3000
    ? (state.minArray.push('50'), state.secArray.push('00'))
    : props.amrap == 3060 ||
      props.emomMinutes == 3060 ||
      props.tabataMinutes == 3060
    ? (state.minArray.push('51'), state.secArray.push('00'))
    : props.amrap == 3120 ||
      props.emomMinutes == 3120 ||
      props.tabataMinutes == 3120
    ? (state.minArray.push('52'), state.secArray.push('00'))
    : props.amrap == 3180 ||
      props.emomMinutes == 3180 ||
      props.tabataMinutes == 3180
    ? (state.minArray.push('53'), state.secArray.push('00'))
    : props.amrap == 3240 ||
      props.emomMinutes == 3240 ||
      props.tabataMinutes == 3240
    ? (state.minArray.push('54'), state.secArray.push('00'))
    : props.amrap == 3300 ||
      props.emomMinutes == 3300 ||
      props.tabataMinutes == 3300
    ? (state.minArray.push('55'), state.secArray.push('00'))
    : props.amrap == 3360 ||
      props.emomMinutes == 3360 ||
      props.tabataMinutes == 3360
    ? (state.minArray.push('56'), state.secArray.push('00'))
    : props.amrap == 3420 ||
      props.emomMinutes == 3420 ||
      props.tabataMinutes == 3420
    ? (state.minArray.push('57'), state.secArray.push('00'))
    : props.amrap == 3480 ||
      props.emomMinutes == 3480 ||
      props.tabataMinutes == 3480
    ? (state.minArray.push('58'), state.secArray.push('00'))
    : props.amrap == 3540 ||
      props.emomMinutes == 3540 ||
      props.tabataMinutes == 3540
    ? (state.minArray.push('59'), state.secArray.push('00'))
    : props.amrap == 3600 ||
      props.emomMinutes == 3600 ||
      props.tabataMinutes == 3600
    ? (state.minArray.push('60'), state.secArray.push('00'))
    : props.amrap == 3660 ||
      props.emomMinutes == 3660 ||
      props.tabataMinutes == 3660
    ? (state.minArray.push('61'), state.secArray.push('00'))
    : props.amrap == 3720 ||
      props.emomMinutes == 3720 ||
      props.tabataMinutes == 3720
    ? (state.minArray.push('62'), state.secArray.push('00'))
    : props.amrap == 3780 ||
      props.emomMinutes == 3780 ||
      props.tabataMinutes == 3780
    ? (state.minArray.push('63'), state.secArray.push('00'))
    : props.amrap == 3840 ||
      props.emomMinutes == 3840 ||
      props.tabataMinutes == 3840
    ? (state.minArray.push('64'), state.secArray.push('00'))
    : props.amrap == 3900 ||
      props.emomMinutes == 3900 ||
      props.tabataMinutes == 3900
    ? (state.minArray.push('65'), state.secArray.push('00'))
    : props.amrap == 3960 ||
      props.emomMinutes == 3960 ||
      props.tabataMinutes == 3960
    ? (state.minArray.push('66'), state.secArray.push('00'))
    : props.amrap == 4020 ||
      props.emomMinutes == 4020 ||
      props.tabataMinutes == 4020
    ? (state.minArray.push('67'), state.secArray.push('00'))
    : props.amrap == 4080 ||
      props.emomMinutes == 4080 ||
      props.tabataMinutes == 4080
    ? (state.minArray.push('68'), state.secArray.push('00'))
    : props.amrap == 4140 ||
      props.emomMinutes == 4140 ||
      props.tabataMinutes == 4140
    ? (state.minArray.push('69'), state.secArray.push('00'))
    : props.amrap == 4200 ||
      props.emomMinutes == 4200 ||
      props.tabataMinutes == 4200
    ? (state.minArray.push('70'), state.secArray.push('00'))
    : props.amrap == 4260 ||
      props.emomMinutes == 4260 ||
      props.tabataMinutes == 4260
    ? (state.minArray.push('71'), state.secArray.push('00'))
    : props.amrap == 4320 ||
      props.emomMinutes == 4320 ||
      props.tabataMinutes == 4320
    ? (state.minArray.push('72'), state.secArray.push('00'))
    : props.amrap == 4380 ||
      props.emomMinutes == 4380 ||
      props.tabataMinutes == 4380
    ? (state.minArray.push('73'), state.secArray.push('00'))
    : props.amrap == 4440 ||
      props.emomMinutes == 4440 ||
      props.tabataMinutes == 4440
    ? (state.minArray.push('74'), state.secArray.push('00'))
    : props.amrap == 4500 ||
      props.emomMinutes == 4500 ||
      props.tabataMinutes == 4500
    ? (state.minArray.push('75'), state.secArray.push('00'))
    : props.amrap == 4560 ||
      props.emomMinutes == 4560 ||
      props.tabataMinutes == 4560
    ? (state.minArray.push('76'), state.secArray.push('00'))
    : props.amrap == 4620 ||
      props.emomMinutes == 4620 ||
      props.tabataMinutes == 4620
    ? (state.minArray.push('77'), state.secArray.push('00'))
    : props.amrap == 4680 ||
      props.emomMinutes == 4680 ||
      props.tabataMinutes == 4680
    ? (state.minArray.push('78'), state.secArray.push('00'))
    : props.amrap == 4740 ||
      props.emomMinutes == 4740 ||
      props.tabataMinutes == 4740
    ? (state.minArray.push('79'), state.secArray.push('00'))
    : props.amrap == 4800 ||
      props.emomMinutes == 4800 ||
      props.tabataMinutes == 4800
    ? (state.minArray.push('80'), state.secArray.push('00'))
    : props.amrap == 4860 ||
      props.emomMinutes == 4860 ||
      props.tabataMinutes == 4860
    ? (state.minArray.push('81'), state.secArray.push('00'))
    : props.amrap == 4920 ||
      props.emomMinutes == 4920 ||
      props.tabataMinutes == 4920
    ? (state.minArray.push('82'), state.secArray.push('00'))
    : props.amrap == 4980 ||
      props.emomMinutes == 4980 ||
      props.tabataMinutes == 4980
    ? (state.minArray.push('83'), state.secArray.push('00'))
    : props.amrap == 5040 ||
      props.emomMinutes == 5040 ||
      props.tabataMinutes == 5040
    ? (state.minArray.push('84'), state.secArray.push('00'))
    : props.amrap == 5100 ||
      props.emomMinutes == 5100 ||
      props.tabataMinutes == 5100
    ? (state.minArray.push('85'), state.secArray.push('00'))
    : props.amrap == 5160 ||
      props.emomMinutes == 5160 ||
      props.tabataMinutes == 5160
    ? (state.minArray.push('86'), state.secArray.push('00'))
    : props.amrap == 5220 ||
      props.emomMinutes == 5220 ||
      props.tabataMinutes == 5220
    ? (state.minArray.push('87'), state.secArray.push('00'))
    : props.amrap == 5280 ||
      props.emomMinutes == 5280 ||
      props.tabataMinutes == 5280
    ? (state.minArray.push('88'), state.secArray.push('00'))
    : props.amrap == 5340 ||
      props.emomMinutes == 5340 ||
      props.tabataMinutes == 5340
    ? (state.minArray.push('89'), state.secArray.push('00'))
    : props.amrap == 5400 ||
      props.emomMinutes == 5400 ||
      props.tabataMinutes == 5400
    ? (state.minArray.push('90'), state.secArray.push('00'))
    : props.amrap == 5460 ||
      props.emomMinutes == 5460 ||
      props.tabataMinutes == 5460
    ? (state.minArray.push('91'), state.secArray.push('00'))
    : props.amrap == 5520 ||
      props.emomMinutes == 5520 ||
      props.tabataMinutes == 5520
    ? (state.minArray.push('92'), state.secArray.push('00'))
    : props.amrap == 5580 ||
      props.emomMinutes == 5580 ||
      props.tabataMinutes == 5580
    ? (state.minArray.push('93'), state.secArray.push('00'))
    : props.amrap == 5640 ||
      props.emomMinutes == 5640 ||
      props.tabataMinutes == 5640
    ? (state.minArray.push('94'), state.secArray.push('00'))
    : props.amrap == 5700 ||
      props.emomMinutes == 5700 ||
      props.tabataMinutes == 5700
    ? (state.minArray.push('95'), state.secArray.push('00'))
    : props.amrap == 5760 ||
      props.emomMinutes == 5760 ||
      props.tabataMinutes == 5760
    ? (state.minArray.push('96'), state.secArray.push('00'))
    : props.amrap == 5820 ||
      props.emomMinutes == 5820 ||
      props.tabataMinutes == 5820
    ? (state.minArray.push('97'), state.secArray.push('00'))
    : props.amrap == 5880 ||
      props.emomMinutes == 5880 ||
      props.tabataMinutes == 5880
    ? (state.minArray.push('98'), state.secArray.push('00'))
    : props.amrap == 5940 ||
      props.emomMinutes == 5940 ||
      props.tabataMinutes == 5940
    ? (state.minArray.push('99'), state.secArray.push('00'))
    : props.amrap == 5999 ||
      props.emomMinutes == 5999 ||
      props.tabataMinutes == 5999
    ? (state.minArray.push('99'), state.secArray.push('59'))
    : (state.minArray.push('00'), state.secArray.push('00'));
};
