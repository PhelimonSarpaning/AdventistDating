// import React, {Component} from 'react';
// import {View} from 'react-native';
// import alpacaApi from '../../services/Api';
// import {Card, CardItem, Body} from 'native-base';
// import MultiPicker from './../../components/MultiPicker/MultiPicker';
// import styles from './WatchList.styles';
// import CardList from './../../components/CardList/CardList';
// import { BottomNavigation, BottomNavigationTab, Layout, Text ,Icon} from '@ui-kitten/components';

// class WatchList extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             watchList : [
//                 {
//                     "id": "8cdb8ed0-033d-4f39-8e9c-87dde7b283da",
//                     "class": "us_equity",
//                     "exchange": "ARCA",
//                     "symbol": "VPL",
//                     "name": "",
//                     "status": "active",
//                     "tradable": true,
//                     "marginable": true,
//                     "shortable": true,
//                     "easy_to_borrow": true
//                 },
//                 {
//                     "id": "2d9e926c-e17c-47c3-ad8c-26c7a594e48f",
//                     "class": "us_equity",
//                     "exchange": "NASDAQ",
//                     "symbol": "QQQ",
//                     "name": "",
//                     "status": "active",
//                     "tradable": true,
//                     "marginable": true,
//                     "shortable": false,
//                     "easy_to_borrow": false
//                 },
//                 {
//                     "id": "f289b772-84c1-48f4-8711-577ddf3698df",
//                     "class": "us_equity",
//                     "exchange": "ARCA",
//                     "symbol": "BSWN",
//                     "name": "",
//                     "status": "inactive",
//                     "tradable": false,
//                     "marginable": false,
//                     "shortable": false,
//                     "easy_to_borrow": false
//                 },
//                 {
//                     "id": "4c68b8f9-df54-4bfe-bdd3-f5470b9d219d",
//                     "class": "us_equity",
//                     "exchange": "NYSE",
//                     "symbol": "FLY",
//                     "name": "",
//                     "status": "active",
//                     "tradable": true,
//                     "marginable": true,
//                     "shortable": true,
//                     "easy_to_borrow": true
//                 },
//                 {
//                     "id": "dbef6d70-4c4a-4f74-b22b-2fd69ab8d960",
//                     "class": "us_equity",
//                     "exchange": "NYSE",
//                     "symbol": "SOR",
//                     "name": "",
//                     "status": "active",
//                     "tradable": true,
//                     "marginable": true,
//                     "shortable": false,
//                     "easy_to_borrow": false
//                 },
//                 {
//                     "id": "5cf4cbe2-95dd-47bb-9126-c96d37b2bf96",
//                     "class": "us_equity",
//                     "exchange": "NASDAQ",
//                     "symbol": "UBNK",
//                     "name": "",
//                     "status": "inactive",
//                     "tradable": false,
//                     "marginable": false,
//                     "shortable": false,
//                     "easy_to_borrow": false
//                 },
//                 {
//                     "id": "ce2f773f-43cf-4c5e-9595-0ce14e0705e2",
//                     "class": "us_equity",
//                     "exchange": "AMEX",
//                     "symbol": "EMI",
//                     "name": "",
//                     "status": "inactive",
//                     "tradable": false,
//                     "marginable": false,
//                     "shortable": false,
//                     "easy_to_borrow": false
//                 },
//                 {
//                     "id": "96f1d1a6-0c4e-4e93-97c7-7a8947133287",
//                     "class": "us_equity",
//                     "exchange": "ARCA",
//                     "symbol": "DBAP",
//                     "name": "",
//                     "status": "inactive",
//                     "tradable": false,
//                     "marginable": false,
//                     "shortable": false,
//                     "easy_to_borrow": false
//                 },
//                 {
//                     "id": "a5a7a7b7-5a80-44c6-8051-989b3bb4a1c2",
//                     "class": "us_equity",
//                     "exchange": "NYSE",
//                     "symbol": "BBY",
//                     "name": "",
//                     "status": "active",
//                     "tradable": true,
//                     "marginable": true,
//                     "shortable": true,
//                     "easy_to_borrow": true
//                 },]
//         };
//       }

//     //   componentDidMount(){
//     //       const api = alpacaApi();

//     //       api.getAccount().then((response) => {
//     //         console.log(response);
//     //       });
//     //   }
//    render(){
//        return(
//         <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#d1d6d9' }}>
//         <Text category='h1'>WatchList</Text>
//     </Layout>
//        )
//    };
       
// }

// export default WatchList;