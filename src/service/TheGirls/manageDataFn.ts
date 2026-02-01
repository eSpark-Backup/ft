// import React, { Component } from 'react';
import { store } from '../../Store';
import { selectTheGirls } from '../../Store/actions/theGirls';

// export default class Programs extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       points: 80,
//       isModalVisible: false,
//       selectTime: false,
//       selectTimeUp: false,
//       selectTimeDown: false,
//       selectEmom: false,
//       selectTabata: false,
//       selectClock: false,
//       disableActivity: false,
//       time: 0,
//       isShow: false,
//       clearData: false,
//       criteria: false,
//       round: 0,
//       round2: '1',
//       emomMinutes: 0,
//       data: [],
//     };
//   }
// }

export const manageAllTheData = (crit) => {
  return store.dispatch(selectTheGirls(crit));
};




// export const validateGirlsAndHeroes = ({ item }) => {


//   if (item.value == 'Angie' ) {
//     this.setState({ data: angie });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(angie);
//   }  if (item.value == 'Annie') {
//     this.setState({ data: annie });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(annie);
//   } if (item.value == 'Barbara') {
//     this.setState({ data: barbara });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(barbara);
//   } if (item.value == 'Chelsea') {
//     this.setState({ data: chelsea });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(chelsea);
//   } if (item.value == 'Cindy') {
//     this.setState({ data: cindy });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type * 60 });
//       setTimeout(() => {
//         this.props.minutes(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(cindy);
//   } if (item.value == 'Diane') {
//     this.setState({ data: diane });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(diane);
//   } if (item.value == 'Elizabeth') {
//     this.setState({ data: elizabeth });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(elizabeth);
//   } if (item.value == 'Eva') {
//     this.setState({ data: eva });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(eva);
//   } if (item.value == 'Fran') {
//     this.setState({ data: fran });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(fran);
//   } if (item.value == 'Grace') {
//     this.setState({ data: grace });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(grace);
//   } if (item.value == 'Helen') {
//     this.setState({ data: helen });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(helen);
//   } if (item.value == 'Isabel') {
//     this.setState({ data: isabel });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(isabel);
//   } if (item.value == 'Jackie') {
//     this.setState({ data: jackie });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(jackie);
//   } if (item.value == 'Karen') {
//     this.setState({ data: karen });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(karen);
//   } if (item.value == 'Kelly') {
//     this.setState({ data: kelly });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(kelly);
//   } if (item.value == 'Linda') {
//     this.setState({ data: linda });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(linda);
//   } if (item.value == 'Lynne') {
//     this.setState({ data: lynne });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(lynne);
//   } if (item.value == 'Mary') {
//     this.setState({ data: mary });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(mary);
//   } if (item.value == 'Nancy') {
//     this.setState({ data: nancy });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type });
//       setTimeout(() => {
//         this.props.forTime(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(nancy);
//   } if (item.value == 'Nicole') {
//     this.setState({ data: nicole });
//     setTimeout(() => {
//       this.setState({ round: this.state.data.type * 60 });
//       setTimeout(() => {
//         this.props.minutes(this.state.round)
//       }, 50);
//     }, 50);
//     store.dispatch(selectTheGirls([]))
//     return manageAllTheData(nicole);
//   } 






//   // return store.dispatch(selectTheGirls(crit));
// };
