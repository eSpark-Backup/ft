import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  TextInput,
  FlatList,
} from 'react-native';

import clc from 'cli-color';
import style from './style';
import {Icon} from 'react-native-material-ui';
import Modal from 'react-native-modal';
import {
  Badger,
  Daniel,
  Jason,
  Josh,
  Joshie,
  JT,
  Michael,
  Murph,
  Nate,
  Randy,
  TommyV,
  Griff,
  Ryan,
  Erin,
  MrJoshua,
  DT,
  Danny,
  Hansen,
  Tyler,
  Lumberjack20,
  Stephen,
  Garrett,
  WarFrank,
  McGhee,
  Paul,
  Jerry,
  Nutts,
  Arnie,
  TheSeven,
  RJ,
  Luce,
  Johnson,
  Roy,
  AdamBrown,
  Coe,
  Severin,
  Helton,
  Jack,
  Forrest,
  Bulger,
  Brenton,
  Blake,
  Collin,
  Thompson,
  Whitten,
  Bull,
  Rankel,
  Holbrook,
  Ledesma,
  Wittman,
  McCluskey,
  Weaver,
  Abbate,
  Hammer,
  Moore,
  Wilmot,
  Moon,
  Small,
  Morrison,
  Manion,
  Gator,
  Bradley,
  Meadows,
  Santiago,
  Carse,
  Bradshaw,
  White,
  Santora,
  Wood,
  Hidalgo,
  Ricky,
  DaeHan,
  Desforge,
  Rahoi,
  Zimmerman,
  Klepto,
  Del,
  Pheezy,
  JJ,
  Jag28,
  Brian,
  Nick,
  Strange,
  Tumilson,
  Ship,
  Jared,
  Tully,
  Holleyman,
  Adrian,
  Glen,
  Tom,
  Ralph,
  Clovis,
  Weston,
  Loredo,
  Sean,
  Hortman,
  Hamilton,
  Zeus,
  Barraza,
  Cameron,
  Jorge,
  Schmalls,
  Brehm,
  Omar,
  Gallant,
  Bruck,
  Falkel,
  Donny,
  Dobogai,
  Hotshots19,
  Roney,
  TheDon,
  Dragon,
  Walsh,
  Lee,
  Willy,
  Coffey,
  DG,
  TK,
  Taylor,
  Justin,
  Zembiec,
  Alexander,
  Wyk,
  Bell,
  Jbo,
  Kevin,
  Rocket,
  Riley,
  Feeks,
  Ned,
  Sham,
  Ozzy,
} from '../../../service/TheGirls/TheHeroes/index';
import {
  angie,
  annie,
  barbara,
  chelsea,
  cindy,
  diane,
  elizabeth,
  eva,
  fran,
  grace,
  helen,
  isabel,
  jackie,
  karen,
  kelly,
  linda,
  lynne,
  mary,
  nancy,
  nicole,
} from '../../../service/TheGirls';
import {
  open111,
  open112,
  open113,
  open114,
  open115,
  open121,
  open122,
  open123,
  open124,
  open125,
  open131,
  open132,
  open133,
  open134,
  open135,
  open141,
  open142,
  open143,
  open144,
  open145,
  open151,
  open152,
  open153,
  open154,
  open155,
  open161,
  open162,
  open163,
  open164,
  open165,
  open171,
  open172,
  open173,
  open174,
  open175,
  open181,
  open182,
  open183,
  open184,
  open185,
  open191,
  open192,
  open193,
  open194,
  open195,
  open201,
  open202,
  open203,
  open204,
  open205,
} from '../../../service/TheGirls/Open/index';
import {
  manageAllTheData,
  validateGirlsAndHeroes,
} from '../../../service/TheGirls/manageDataFn';

import Criteria1 from '../criteria1';
import Criteria2 from '../criteria2';

import {Fonts} from '../../../utils/fonts';
import {selectProgram} from '../../../Store/actions/program';
import {selectTheGirls} from '../../../Store/actions/theGirls';
import {store} from '../../../Store';
import {program} from '../../../config/program';
import CountUp from './../../Timer/timer1Modal/countUp';
import CountDown from './../../Timer/timer1Modal/countDown';
import EMOM from './../../Timer/timer1Modal/emom';
import Tabata from './../../Timer/timer1Modal/tabata';
import Clock from './../../Timer/timer1Modal/clock';

import {RNSerialport} from 'react-native-serialport';

const {height, width} = Dimensions.get('window');

export default class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 80,
      isModalVisible: false,
      selectTime: false,
      selectTimeUp: false,
      selectTimeDown: false,
      selectEmom: false,
      selectTabata: false,
      selectClock: false,
      disableActivity: true,
      time: 0,
      isShow: false,
      clearData: false,
      criteria: false,
      round: 0,
      round2: '1',
      emomMinutes: 0,
      data: [],
      forTimeOrMinutes: null,
      criteriaName: null,
      stop: false,
      selectedProgram: '',
      tabataMinutes: 0,
      tabataRest: 0,
      tabataRounds: 0,
    };
  }

  componentDidMount() {
    // console.log(this.props, 'program k props')
    // this.unsubscribe = store.subscribe(() => {
    //   console.log('object', store.getState()?.theGirls);
    // });
  }
  handleDisableActivity = (child) => {
    // console.log(child, 'disable activity ka child')
    this.setState({disableActivity: child}, () =>
      this.props.disableActivity(this.state.disableActivity),
    );
  };
  handleCriteriaName = (child) => {
    // console.log(child, 'Criteria name is child')
    this.setState({criteriaName: child}, () =>
      this.props.criteriaName(this.state.criteriaName),
    );
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      time: 0,
      round: 0,
      emomMinute: 0,
    });
  };
  programOpenAndClear = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      time: 0,
      round: 0,
      emomMinute: 0,
      criteriaName: null,
      forTimeOrMinutes: null,
      tabataMinutes: 0,
      tabataRest: 0,
      tabataRounds: 0,
    });
    if (this.props.serialConnected && !this.props.bluetoothOn) {
      RNSerialport.writeString('M');
      console.log('Send M to Device');
    }
    setTimeout(() => {
      this.props.clearAll(!this.state.clearData),
        this.props.minutes(0),
        this.props.forTime(0),
        this.props.emomMinutes(0);
      this.props.disableActivity(false);
    }, 50);
    setTimeout(() => {
      this.props.clearAll(this.state.clearData);
    }, 100);
  };

  changeLayoutMeter = () => {
    if (this.state.selectTimeUp == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTimeUp: !this.state.selectTimeUp,
      });
    }
  };
  changeLayoutMeterDown = () => {
    if (this.state.selectTimeDown == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTimeDown: !this.state.selectTimeDown,
      });
    }
  };
  changeLayoutEmom = () => {
    if (this.state.selectEmom == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectEmom: !this.state.selectEmom,
      });
    }
  };
  changeLayoutTabata = () => {
    if (this.state.selectTabata == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTabata: !this.state.selectTabata,
      });
    }
  };
  changeLayoutClock = () => {
    if (this.state.selectClock == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectClock: !this.state.selectClock,
      });
    }
  };
  handleTimeDown = (child) => {
    if (child == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: false,
        selectTimeDown: false,
      });
    }
  };
  handleEmomBack = (child) => {
    if (child == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: false,
        selectEmom: false,
      });
    }
  };

  handleTabataBack = (child) => {
    if (child == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: false,
        selectTabata: false,
      });
    }
  };

  handlePassingMinutes = (child) => {
    this.setState({tabataMinutes: child}, () =>
      this.props.tabataMinutes(this.state.tabataMinutes),
    );
    // console.log(child, 'child minutes')
  };
  handlePassingRest = (child) => {
    this.setState({tabataRest: child}, () =>
      this.props.tabataRest(this.state.tabataRest),
    );
    // console.log(child, 'child rest')
  };
  handlePassingRound = (child) => {
    this.setState({tabataRounds: child}, () =>
      this.props.tabataRounds(this.state.tabataRounds),
    );
    // console.log(child, 'child round ')
  };

  handleTime = (child) => {
    this.setState({time: child}, () => this.props.minutes(this.state.time));
  };

  handleForTime = (child) => {
    this.setState({round: child}, () => this.props.forTime(this.state.round));
  };
  handleEmom = (child) => {
    this.setState({emomMinutes: child}, () =>
      this.props.emomMinutes(this.state.emomMinutes),
    );
  };
  handleTimeUp = (child) => {
    this.setState({selectTime: child});
    if (child == false) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
        selectTime: !this.state.selectTime,
        selectTimeUp: !this.state.selectTimeUp,
      });
    }
  };
  handleModal = (child) => {
    this.setState({isModalVisible: child});
  };
  handleClock = (child) => {
    this.setState({selectTime: child});
    if (child == true) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
        selectTime: !this.state.selectTime,
        selectClock: !this.state.selectClock,
      });
    }
  };
  handleSelectProgram = (item) => {
    store.dispatch(selectProgram(item));
    !item.key == 'The Girls' ||
      ('The Heroes' && store.dispatch(selectTheGirls([])));
    if (item.key == 'AMRAP') {
      this.setState({itemName: item.value});
      this.changeLayoutMeterDown();
    } else if (item.key == 'The Heroes') {
      this.setState({selectedProgram: 'Heroes'});
      this.setState({disableActivity: true}, () =>
        this.props.disableActivity(this.state.disableActivity),
      );
      this.setState({criteria: !this.state.criteria});
      // this.changeLayoutMeterDown()
    } else if (item.key == 'The Girls') {
      this.setState({selectedProgram: 'Girls'});
      this.setState({disableActivity: true}, () =>
        this.props.disableActivity(this.state.disableActivity),
      );
      this.setState({criteria: !this.state.criteria});
      // this.changeLayoutMeterDown()
    } else if (item.key == 'The Open') {
      this.setState({selectedProgram: 'Open'});
      this.setState({disableActivity: true}, () =>
        this.props.disableActivity(this.state.disableActivity),
      );
      this.setState({criteria: !this.state.criteria});
      // this.changeLayoutMeterDown()
    } else if (item.key == 'For Time') {
      this.changeLayoutMeter();
    } else if (item.key == 'EMOM') {
      this.changeLayoutEmom();
    } else if (item.key == 'Tabata') {
      this.setState({disableActivity: true}, () =>
        this.props.disableActivity(this.state.disableActivity),
      );
      this.changeLayoutTabata();
    } else if (item.key == 'Clock') {
      this.changeLayoutClock();
    } else {
      this.setState({criteria: false});
    }
  };

  _renderMyList = ({item}) => (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: width * 0.7,
          height: height * 0.06,
          borderWidth: height * 0.005,
          backgroundColor: '#565656',
          borderColor: '#EDB0A6',
          margin: width * 0.01,
          borderRadius: width * 0.005,
          marginBottom: height * 0.012,
          paddingLeft: width * 0.01,
        }}
        onPress={() => this.handleSelectProgram(item)}>
        <Text
          style={{
            fontSize: height * 0.033,
            color: 'white',
          }}>
          {item.value}
        </Text>
      </TouchableOpacity>
    </View>
  );

  receiveDataFromChild = (val, item) => {
    if (item.value == 'Angie') {
      this.setState({data: angie});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(angie);
    }
    if (item.value == 'Annie') {
      this.setState({data: annie});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(annie);
    }
    if (item.value == 'Barbara') {
      this.setState({data: barbara});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(barbara);
    }
    if (item.value == 'Chelsea') {
      this.setState({data: chelsea});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(chelsea);
    }
    if (item.value == 'Cindy') {
      this.setState({data: cindy});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type * 60});
        setTimeout(() => {
          this.props.minutes(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(cindy);
    }
    if (item.value == 'Diane') {
      this.setState({data: diane});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(diane);
    }
    if (item.value == 'Elizabeth') {
      this.setState({data: elizabeth});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(elizabeth);
    }
    if (item.value == 'Eva') {
      this.setState({data: eva});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(eva);
    }
    if (item.value == 'Fran') {
      this.setState({data: fran});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(fran);
    }
    if (item.value == 'Grace') {
      this.setState({data: grace});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(grace);
    }
    if (item.value == 'Helen') {
      this.setState({data: helen});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(helen);
    }
    if (item.value == 'Isabel') {
      this.setState({data: isabel});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(isabel);
    }
    if (item.value == 'Jackie') {
      this.setState({data: jackie});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(jackie);
    }
    if (item.value == 'Karen') {
      this.setState({data: karen});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(karen);
    }
    if (item.value == 'Kelly') {
      this.setState({data: kelly});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(kelly);
    }
    if (item.value == 'Linda') {
      this.setState({data: linda});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(linda);
    }
    if (item.value == 'Lynne') {
      this.setState({data: lynne});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(lynne);
    }
    if (item.value == 'Mary') {
      this.setState({data: mary});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(mary);
    }
    if (item.value == 'Nancy') {
      this.setState({data: nancy});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(nancy);
    }
    if (item.value == 'Nicole') {
      this.setState({data: nicole});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type * 60});
        setTimeout(() => {
          this.props.minutes(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(nicole);
    }
    if (item.value == 'Badger') {
      this.setState({data: Badger});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Badger);
    }
    if (item.value == 'Daniel') {
      this.setState({data: Daniel});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Daniel);
    }
    if (item.value == 'Jason') {
      this.setState({data: Jason});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Jason);
    }
    if (item.value == 'Josh') {
      this.setState({data: Josh});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Josh);
    }
    if (item.value == 'Joshie') {
      this.setState({data: Joshie});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Joshie);
    }
    if (item.value == 'JT') {
      this.setState({data: JT});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(JT);
    }
    if (item.value == 'Michael') {
      this.setState({data: Michael});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Michael);
    }
    if (item.value == 'Murph') {
      this.setState({data: Murph});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Murph);
    }
    if (item.value == 'Nate') {
      this.setState({data: Nate});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Nate);
    }
    if (item.value == 'Randy') {
      this.setState({data: Randy});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Randy);
    }
    if (item.value == 'Tommy V') {
      this.setState({data: TommyV});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(TommyV);
    }
    if (item.value == 'Griff') {
      this.setState({data: Griff});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Griff);
    }
    if (item.value == 'Ryan') {
      this.setState({data: Ryan});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Ryan);
    }
    if (item.value == 'Erin') {
      this.setState({data: Erin});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Erin);
    }
    if (item.value == 'Mr.Joshua') {
      this.setState({data: MrJoshua});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(MrJoshua);
    }
    if (item.value == 'DT') {
      this.setState({data: DT});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(DT);
    }
    if (item.value == 'Danny') {
      this.setState({data: Danny});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Danny);
    }
    if (item.value == 'Hansen') {
      this.setState({data: Hansen});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Hansen);
    }
    if (item.value == 'Tyler') {
      this.setState({data: Tyler});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Tyler);
    }
    if (item.value == 'Lumberjack 20') {
      this.setState({data: Lumberjack20});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Lumberjack20);
    }
    if (item.value == 'Stephen') {
      this.setState({data: Stephen});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Stephen);
    }
    if (item.value == 'Garret') {
      this.setState({data: Garrett});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Garrett);
    }
    if (item.value == 'War Frank') {
      this.setState({data: WarFrank});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(WarFrank);
    }
    if (item.value == 'McGhee') {
      this.setState({data: McGhee});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(McGhee);
    }
    if (item.value == 'Paul') {
      this.setState({data: Paul});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Paul);
    }
    if (item.value == 'Jerry') {
      this.setState({data: Jerry});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Jerry);
    }
    if (item.value == 'Nutts') {
      this.setState({data: Nutts});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Nutts);
    }
    if (item.value == 'Arnie') {
      this.setState({data: Arnie});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Arnie);
    }
    if (item.value == 'The Seven') {
      this.setState({data: TheSeven});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(TheSeven);
    }
    if (item.value == 'RJ') {
      this.setState({data: RJ});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(RJ);
    }
    if (item.value == 'Luce') {
      this.setState({data: Luce});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Luce);
    }
    if (item.value == 'Johnson') {
      this.setState({data: Johnson});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Johnson);
    }
    if (item.value == 'Roy') {
      this.setState({data: Roy});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Roy);
    }
    if (item.value == 'AdamBrown') {
      this.setState({data: AdamBrown});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(AdamBrown);
    }
    if (item.value == 'Coe') {
      this.setState({data: Coe});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Coe);
    }
    if (item.value == 'Severin') {
      this.setState({data: Severin});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Severin);
    }
    if (item.value == 'Helton') {
      this.setState({data: Helton});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Helton);
    }
    if (item.value == 'Jack') {
      this.setState({data: Jack});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Jack);
    }
    if (item.value == 'Forrest') {
      this.setState({data: Forrest});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Forrest);
    }
    if (item.value == 'Bulger') {
      this.setState({data: Bulger});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Bulger);
    }
    if (item.value == 'Brenton') {
      this.setState({data: Brenton});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Brenton);
    }
    if (item.value == 'Blake') {
      this.setState({data: Blake});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Blake);
    }
    if (item.value == 'Collin') {
      this.setState({data: Collin});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Collin);
    }
    if (item.value == 'Thomson') {
      this.setState({data: Thompson});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Thompson);
    }
    if (item.value == 'Whitten') {
      this.setState({data: Whitten});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Whitten);
    }
    if (item.value == 'Bull') {
      this.setState({data: Bull});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Bull);
    }
    if (item.value == 'Rankel') {
      this.setState({data: Rankel});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Rankel);
    }
    if (item.value == 'Holbrook') {
      this.setState({data: Holbrook});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Holbrook);
    }
    if (item.value == 'Ledesma') {
      this.setState({data: Ledesma});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Ledesma);
    }
    if (item.value == 'Wittman') {
      this.setState({data: Wittman});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Wittman);
    }
    if (item.value == 'McCluskey') {
      this.setState({data: McCluskey});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(McCluskey);
    }
    if (item.value == 'Weaver') {
      this.setState({data: Weaver});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Weaver);
    }
    if (item.value == 'Abbate') {
      this.setState({data: Abbate});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Abbate);
    }
    if (item.value == 'Hammer') {
      this.setState({data: Hammer});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Hammer);
    }
    if (item.value == 'Moore') {
      this.setState({data: Moore});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Moore);
    }
    if (item.value == 'Wilmot') {
      this.setState({data: Wilmot});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Wilmot);
    }
    if (item.value == 'Moon') {
      this.setState({data: Moon});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Moon);
    }
    if (item.value == 'Small') {
      this.setState({data: Small});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Small);
    }
    if (item.value == 'Morrison') {
      this.setState({data: Morrison});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Morrison);
    }
    if (item.value == 'Manion') {
      this.setState({data: Manion});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Manion);
    }
    if (item.value == 'Gator') {
      this.setState({data: Gator});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Gator);
    }
    if (item.value == 'Bradley') {
      this.setState({data: Bradley});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Bradley);
    }
    if (item.value == 'Meadows') {
      this.setState({data: Meadows});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Meadows);
    }
    if (item.value == 'Santiago') {
      this.setState({data: Santiago});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Santiago);
    }
    if (item.value == 'Carse') {
      this.setState({data: Carse});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Carse);
    }
    if (item.value == 'Bradshaw') {
      this.setState({data: Bradshaw});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Bradshaw);
    }
    if (item.value == 'White') {
      this.setState({data: White});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(White);
    }
    if (item.value == 'Santora') {
      this.setState({data: Santora});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Santora);
    }
    if (item.value == 'Wood') {
      this.setState({data: Wood});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Wood);
    }
    if (item.value == 'Hidalgo') {
      this.setState({data: Hidalgo});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Hidalgo);
    }
    if (item.value == 'Ricky') {
      this.setState({data: Ricky});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Ricky);
    }
    if (item.value == 'Dae Han') {
      this.setState({data: DaeHan});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(DaeHan);
    }
    if (item.value == 'Desforge') {
      this.setState({data: Desforge});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Desforge);
    }
    if (item.value == 'Rahoi') {
      this.setState({data: Rahoi});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Rahoi);
    }
    if (item.value == 'Zimmerman') {
      this.setState({data: Zimmerman});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Zimmerman);
    }
    if (item.value == 'Klepto') {
      this.setState({data: Klepto});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Klepto);
    }
    if (item.value == 'Del') {
      this.setState({data: Del});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Del);
    }
    if (item.value == 'Pheezy') {
      this.setState({data: Pheezy});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Pheezy);
    }
    if (item.value == 'J.J.') {
      this.setState({data: JJ});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(JJ);
    }
    if (item.value == 'Jag 28') {
      this.setState({data: Jag28});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Jag28);
    }
    if (item.value == 'Brian') {
      this.setState({data: Brian});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Brian);
    }
    if (item.value == 'Nick') {
      this.setState({data: Nick});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Nick);
    }
    if (item.value == 'Strange') {
      this.setState({data: Strange});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Strange);
    }
    if (item.value == 'Tumilson') {
      this.setState({data: Tumilson});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Tumilson);
    }
    if (item.value == 'Ship') {
      this.setState({data: Ship});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Ship);
    }
    if (item.value == 'Jared') {
      this.setState({data: Jared});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Jared);
    }
    if (item.value == 'Tully') {
      this.setState({data: Tully});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Tully);
    }
    if (item.value == 'Holleyman') {
      this.setState({data: Holleyman});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Holleyman);
    }
    if (item.value == 'Adrian') {
      this.setState({data: Adrian});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Adrian);
    }
    if (item.value == 'Glen') {
      this.setState({data: Glen});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Glen);
    }
    if (item.value == 'Tom') {
      this.setState({data: Tom});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Tom);
    }
    if (item.value == 'Ralph') {
      this.setState({data: Ralph});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Ralph);
    }
    if (item.value == 'Clovis') {
      this.setState({data: Clovis});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Clovis);
    }
    if (item.value == 'Weston') {
      this.setState({data: Weston});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Weston);
    }
    if (item.value == 'Loredo') {
      this.setState({data: Loredo});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Loredo);
    }
    if (item.value == 'Sean') {
      this.setState({data: Sean});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Sean);
    }
    if (item.value == 'Hortman') {
      this.setState({data: Hortman});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Hortman);
    }
    if (item.value == 'Hamilton') {
      this.setState({data: Hamilton});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Hamilton);
    }
    if (item.value == 'Zeus') {
      this.setState({data: Zeus});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Zeus);
    }
    if (item.value == 'Barraza') {
      this.setState({data: Barraza});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Barraza);
    }
    if (item.value == 'Cameron') {
      this.setState({data: Cameron});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Cameron);
    }
    if (item.value == 'Jorge') {
      this.setState({data: Jorge});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Jorge);
    }
    if (item.value == 'Schmalls') {
      this.setState({data: Schmalls});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Schmalls);
    }
    if (item.value == 'Brehm') {
      this.setState({data: Brehm});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Brehm);
    }
    if (item.value == 'Omar') {
      this.setState({data: Omar});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Omar);
    }
    if (item.value == 'Gallant') {
      this.setState({data: Gallant});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Gallant);
    }
    if (item.value == 'Bruck') {
      this.setState({data: Bruck});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Bruck);
    }
    if (item.value == 'Falkel') {
      this.setState({data: Falkel});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Falkel);
    }
    if (item.value == 'Donny') {
      this.setState({data: Donny});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Donny);
    }
    if (item.value == 'Dobogai') {
      this.setState({data: Dobogai});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Dobogai);
    }
    if (item.value == 'Hotshots 19') {
      this.setState({data: Hotshots19});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Hotshots19);
    }
    if (item.value == 'Roney') {
      this.setState({data: Roney});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Roney);
    }
    if (item.value == 'The Don') {
      this.setState({data: TheDon});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(TheDon);
    }
    if (item.value == 'Dragon') {
      this.setState({data: Dragon});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Dragon);
    }
    if (item.value == 'Walsh') {
      this.setState({data: Walsh});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Walsh);
    }
    if (item.value == 'Lee') {
      this.setState({data: Lee});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Lee);
    }
    if (item.value == 'Willy') {
      this.setState({data: Willy});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Willy);
    }
    if (item.value == 'Coffey') {
      this.setState({data: Coffey});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Coffey);
    }
    if (item.value == 'DG') {
      this.setState({data: DG});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(DG);
    }
    if (item.value == 'TK') {
      this.setState({data: TK});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(TK);
    }
    if (item.value == 'Taylor') {
      this.setState({data: Taylor});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Taylor);
    }
    if (item.value == 'Justin') {
      this.setState({data: Justin});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Justin);
    }
    if (item.value == 'Zembiec') {
      this.setState({data: Zembiec});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Zembiec);
    }
    if (item.value == 'Alexander') {
      this.setState({data: Alexander});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Alexander);
    }
    if (item.value == 'Wyk') {
      this.setState({data: Wyk});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Wyk);
    }
    if (item.value == 'Bell') {
      this.setState({data: Bell});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Bell);
    }
    if (item.value == 'Jbo') {
      this.setState({data: Jbo});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Jbo);
    }
    if (item.value == 'Kevin') {
      this.setState({data: Kevin});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Kevin);
    }
    if (item.value == 'Rocket') {
      this.setState({data: Rocket});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Rocket);
    }
    if (item.value == 'Riley') {
      this.setState({data: Riley});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Riley);
    }
    if (item.value == 'Feeks') {
      this.setState({data: Feeks});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Feeks);
    }
    if (item.value == 'Ned') {
      this.setState({data: Ned});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Ned);
    }
    if (item.value == 'Sham') {
      this.setState({data: Sham});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Sham);
    }
    if (item.value == 'Ozzy') {
      this.setState({data: Ozzy});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(Ozzy);
    }
    if (item.value == '11.1') {
      this.setState({data: open111});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open111);
    }
    if (item.value == '11.2') {
      this.setState({data: open112});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open112);
    }
    if (item.value == '11.3') {
      this.setState({data: open113});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open113);
    }
    if (item.value == '11.4') {
      this.setState({data: open114});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open114);
    }
    if (item.value == '11.5') {
      this.setState({data: open115});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open115);
    }
    if (item.value == '12.1') {
      this.setState({data: open121});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open121);
    }
    if (item.value == '12.2') {
      this.setState({data: open122});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open122);
    }
    if (item.value == '12.3') {
      this.setState({data: open123});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open123);
    }
    if (item.value == '12.4') {
      this.setState({data: open124});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open124);
    }
    if (item.value == '12.5') {
      this.setState({data: open125});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open125);
    }
    if (item.value == '13.1') {
      this.setState({data: open131});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open131);
    }
    if (item.value == '13.2') {
      this.setState({data: open132});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open132);
    }
    if (item.value == '13.3') {
      this.setState({data: open133});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open133);
    }
    if (item.value == '13.4') {
      this.setState({data: open134});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open134);
    }
    if (item.value == '13.5') {
      this.setState({data: open135});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open135);
    }
    if (item.value == '14.1') {
      this.setState({data: open141});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open141);
    }
    if (item.value == '14.2') {
      this.setState({data: open142});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open142);
    }
    if (item.value == '14.3') {
      this.setState({data: open143});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open143);
    }
    if (item.value == '14.4') {
      this.setState({data: open144});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open144);
    }
    if (item.value == '14.5') {
      this.setState({data: open145});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open145);
    }
    if (item.value == '15.1') {
      this.setState({data: open151});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open151);
    }
    if (item.value == '15.2') {
      if (this.props.serialConnected && !this.props.bluetoothOn) {
        setTimeout(() => {
          RNSerialport.writeString('S');
          console.log(clc.xterm(194)('Sent S--->>>>>>>'));
        }, 800);
      }
      this.setState({data: open152});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open152);
    }
    if (item.value == '15.3') {
      this.setState({data: open153});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open153);
    }
    if (item.value == '15.4') {
      this.setState({data: open154});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open154);
    }
    if (item.value == '15.5') {
      this.setState({data: open155});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open155);
    }
    if (item.value == '16.1') {
      this.setState({data: open161});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open161);
    }
    if (item.value == '16.2') {
      this.setState({data: open162});
      this.setState({forTimeOrMinutes: 2});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.emomMinutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open162);
    }
    if (item.value == '16.3') {
      this.setState({data: open163});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open163);
    }
    if (item.value == '16.4') {
      this.setState({data: open164});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open164);
    }
    if (item.value == '16.5') {
      this.setState({data: open165});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open165);
    }
    if (item.value == '17.1') {
      this.setState({data: open171});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open171);
    }
    if (item.value == '17.2') {
      this.setState({data: open172});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open172);
    }
    if (item.value == '17.3') {
      this.setState({data: open173});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open173);
    }
    if (item.value == '17.4') {
      this.setState({data: open174});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open174);
    }
    if (item.value == '17.5') {
      this.setState({data: open175});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open175);
    }
    if (item.value == '18.1') {
      this.setState({data: open181});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open181);
    }
    if (item.value == '18.2') {
      this.setState({data: open182});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open182);
    }
    if (item.value == '18.3') {
      this.setState({data: open183});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open183);
    }
    if (item.value == '18.4') {
      this.setState({data: open184});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open184);
    }
    if (item.value == '18.5') {
      this.setState({data: open185});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open185);
    }
    if (item.value == '19.1') {
      this.setState({data: open191});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open191);
    }
    if (item.value == '19.2') {
      this.setState({data: open192});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open192);
    }
    if (item.value == '19.3') {
      this.setState({data: open193});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open193);
    }
    if (item.value == '19.4') {
      this.setState({data: open194});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open194);
    }
    if (item.value == '19.5') {
      this.setState({data: open195});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open195);
    }
    if (item.value == '20.1') {
      this.setState({data: open201});
      this.setState({forTimeOrMinutes: 0});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.forTime(this.state.round);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open201);
    }
    if (item.value == '20.2') {
      this.setState({data: open202});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open202);
    }
    if (item.value == '20.3') {
      this.setState({data: open203});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open203);
    }
    if (item.value == '20.4') {
      this.setState({data: open204});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open204);
    }
    if (item.value == '20.5') {
      this.setState({data: open205});
      this.setState({forTimeOrMinutes: 1});
      setTimeout(() => {
        this.setState({round: this.state.data.type});
        setTimeout(() => {
          this.props.minutes(this.state.round * 60);
        }, 50);
      }, 50);
      store.dispatch(selectTheGirls([]));
      return manageAllTheData(open205);
    }

    // validateGirlsAndHeroes({ item })

    // let crit = angie;
    this.setState({itemName: item?.target});
    // console.log(crit,'critiiiiiii')
    // manageAllTheData({ crit });
    // this.changeLayoutMeterDown();
  };
  handleModalFalse = (child) => {
    this.setState({isModalVisible: child, criteria: child});
  };

  renderClockModal = () => {
    return (
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={this.state.isModalVisible}
        style={style.modalContainer}>
        <View style={style.modalInner}>
          <View
            style={{
              width: !this.state.selectTime ? width * 0.75 : width * 0,
              height: !this.state.selectTime ? height * 0.71 : height * 0,
              overflow: 'hidden',
            }}>
            <View style={style.boxInner}>
              {/* Box Header */}
              <View style={style.boxHeader}>
                <View style={style.boxHeaderInner}>
                  <Text style={style.modalHeading}> Select Your Program</Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        isModalVisible: !this.state.isModalVisible,
                        time: 0,
                      });
                      this.setState({disableActivity: true}, () =>
                        this.props.disableActivity(this.state.disableActivity),
                      );
                    }}>
                    <Icon name={'cancel'} size={width * 0.04} color="#FF6100" />
                  </TouchableOpacity>
                </View>
              </View>
              {/* Box Body */}
              {/* <ScrollView> */}
              <View
                style={{
                  height: height * 0.58,
                  width: width * 0.75,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FlatList data={program} renderItem={this._renderMyList} />
              </View>
              {/* </ScrollView> */}
            </View>
          </View>
          <View
            style={{
              width: !this.state.selectTimeUp ? 0 : width * 0.55,
              height: !this.state.selectTimeUp ? height * 0 : height * 0.71,
              overflow: 'hidden',
            }}>
            <CountUp
              selectTime={this.handleTimeUp}
              round={this.handleForTime}
              modalOff={this.handleModal}
            />
          </View>
          <View
            style={{
              width: !this.state.selectTimeDown ? 0 : width * 0.55,
              height: !this.state.selectTimeDown ? height * 0 : height * 0.71,
              overflow: 'hidden',
            }}>
            <CountDown
              selectTime={this.handleTimeDown}
              minutes={this.handleTime}
              modalOff={this.handleModal}
              name={this.state.itemName}
            />
          </View>

          <View
            style={{
              width: !this.state.selectEmom ? 0 : width * 0.55,
              height: !this.state.selectEmom ? height * 0 : height * 0.71,
              overflow: 'hidden',
            }}>
            <EMOM
              emomMinute={this.handleEmom}
              modalOff={this.handleModal}
              selectTime={this.handleEmomBack}
            />
          </View>
          <View
            style={{
              width: !this.state.selectTabata ? 0 : width * 0.55,
              height: !this.state.selectTabata ? height * 0 : height * 0.71,
              overflow: 'hidden',
            }}>
            <Tabata
              // selectTabata={this.handleTabata}
              selectTime={this.handleTabataBack}
              passingMinutes={this.handlePassingMinutes}
              passingRest={this.handlePassingRest}
              tabataRounds={this.handlePassingRound}
              modalOff={this.handleModal}
            />
          </View>
          <View
            style={{
              width: !this.state.selectClock ? 0 : width * 0.55,
              height: !this.state.selectClock ? height * 0 : height * 0.71,
              overflow: 'hidden',
            }}>
            <Clock selectClock={this.handleClock} />
          </View>
        </View>
      </Modal>
    );
  };

  stopTimer = () => {
    this.setState({stop: true}, () => this.props.stopTimer(this.state.stop));
    setTimeout(() => {
      this.setState({stop: false});
    }, 30);
  };

  render() {
    // console.log('For Time tell Me', this.props.forTime)
    const {criteria} = this.state;
    if (this.props.playOnOrOff == true && this.state.isShow == false) {
      if (!this.state.time == 0) {
        setTimeout(() => {
          this.setState({isShow: true});
        }, 100);
        setTimeout(() => {
          this.setState({time: 0});
          setTimeout(() => {
            this.setState({isShow: false});
          }, 200);
        }, this.state.time * 1000);
      }
      if (!this.state.emomMinutes == 0) {
        setTimeout(() => {
          this.setState({isShow: true});
        }, 100);
        setTimeout(() => {
          this.setState({emomMinutes: 0});
          setTimeout(() => {
            this.setState({isShow: false});
          }, 200);
        }, this.state.emomMinutes * 1000);
      }
    }
    return (
      <View>
        <View style={style.header3Inner}>
          <TouchableOpacity
            style={style.chooseProgramView}
            onPress={
              this.props.circle == true ? null : this.programOpenAndClear
            }>
            <Text style={style.chooseProgram}>
              {this.state.round == 0 &&
              this.state.time == 0 &&
              this.state.emomMinutes == 0 &&
              this.state.tabataRounds == 0
                ? 'Program'
                : store.getState().program.value}
            </Text>
            {this.state.criteriaName == '15.2' ? (
              <TouchableOpacity
                onPress={this.props.circle == true ? this.stopTimer : null}>
                <View
                  style={{
                    backgroundColor: '#FF6100',
                    width: width * 0.07,
                    height: height * 0.05,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: width * 0.003,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: width * 0.0205,
                      fontFamily: Fonts.VarelaRoundRegular,
                    }}>
                    Stop
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}
            {this.state.forTimeOrMinutes == 0 && this.state.data.type == 1 ? (
              <Text
                style={{
                  fontSize: width * 0.018,
                  color: 'white',
                  fontFamily: Fonts.VarelaRoundRegular,
                  borderRadius: width * 0.003,
                  borderWidth: width * 0.002,
                  borderColor: '#5F4B2F',
                  padding: width * 0.002,
                  paddingHorizontal: width * 0.004,
                  textAlign: 'center',
                }}>
                {this.state.data.type} Round For Time
              </Text>
            ) : null}
            {this.state.forTimeOrMinutes == 0 && this.state.data.type > 1 ? (
              <Text
                style={{
                  fontSize: width * 0.018,
                  color: 'white',
                  fontFamily: Fonts.VarelaRoundRegular,
                  borderRadius: width * 0.003,
                  borderWidth: width * 0.002,
                  borderColor: '#5F4B2F',
                  padding: width * 0.002,
                  paddingHorizontal: width * 0.004,
                  textAlign: 'center',
                }}>
                {this.state.data.type} Rounds{'\n'} For Time
              </Text>
            ) : null}
            {this.state.forTimeOrMinutes == 1 ? (
              <Text
                style={{
                  fontSize: width * 0.018,
                  color: 'white',
                  fontFamily: Fonts.VarelaRoundRegular,
                  borderRadius: width * 0.003,
                  borderWidth: width * 0.002,
                  borderColor: '#5F4B2F',
                  padding: width * 0.002,
                  paddingHorizontal: width * 0.004,
                  textAlign: 'center',
                }}>
                {this.state.data.type} Mins AMRAP
              </Text>
            ) : null}
            {this.state.forTimeOrMinutes == 2 ? (
              <Text
                style={{
                  fontSize: width * 0.018,
                  color: 'white',
                  fontFamily: Fonts.VarelaRoundRegular,
                  borderRadius: width * 0.003,
                  borderWidth: width * 0.002,
                  borderColor: '#5F4B2F',
                  padding: width * 0.002,
                  paddingHorizontal: width * 0.004,
                  textAlign: 'center',
                }}>
                {this.state.data.type} Mins EMOM
              </Text>
            ) : null}
          </TouchableOpacity>
        </View>
        {/* <Criteria1 /> */}
        {criteria && (
          <Criteria1
            modalFalse={this.handleModalFalse}
            isModalVisible={true}
            criteriaName={this.handleCriteriaName}
            selectedProgram={this.state.selectedProgram}
            disableActivity={this.handleDisableActivity}
            receiveDataFromChild={this.receiveDataFromChild}
          />
        )}
        {this.renderClockModal()}
      </View>
    );
  }
}
