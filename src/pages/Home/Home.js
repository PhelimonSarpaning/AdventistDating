import React, {Component} from 'react';
import {ScrollView,View, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';
import CreditCard from './../../components/CreditCard/CreditCard';
import CardView from 'react-native-cardview';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
//import Icon from 'react-native-vector-icons/Ionicons';
import NotificationBadge from './../../components/NotificationBadge/NotificationBadge';
import DropdownMenu from 'react-native-dropdown-menu';
import LinearGradient from 'react-native-linear-gradient';
import { styles as blockStyles } from '../../components/Block/Block';
import { styles as cardStyles } from '../../components/Card/Card';
import Block from '../../components/Block/Block';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Badge from '../../components/Badge/Badge';
import hexToRgba from 'hex-to-rgba';
import AdImage from '../../../assets/images/objects.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../components/Responsive/Responsive';
import {sizes, colors, fonts} from '../../constants/theme';
import Icon from "react-native-vector-icons/FontAwesome";

import { BottomNavigation, BottomNavigationTab, Layout } from '@ui-kitten/components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const { width, height } = Dimensions.get("window");

const data = [{
    value: 'USD',
  }, {
    value: 'GHC',
  }];
  // const { navigation } = this.props;
  // navigation.setOptions({
  //   headerTitle: () => (
  //     <Text>
  //       Welcomr
  //     </Text>
  //   ),
  // })
class Home extends Component{
  // navigation.setOptions({
  //   headerTitle: () => ( <Text style={fonts.header}>Welcome</Text>),
  //   headerRight: () => (
  //     <TouchableOpacity>
  //       <Block flex={false}>
  //         {/* <Image
  //           resizeMode="contain"
  //           source={require("../assets/images/Icon/Menu.png")}
  //           style={{ width: 20, height: 24 }}
  //         /> */}
  //         <Badge
  //           size={13}
  //           color={theme.colors.accent}
  //           style={{ position: "absolute", top: -4, right: -4 }}
  //         />
  //       </Block>
  //     </TouchableOpacity>
  //   )
  // });

    constructor(props){
        super(props);
        this.state={
            currentFunds:'10,000',
            conversionRate:' $ 1 - Ghc 5.44',
            firstname:'Phelimon',
            
        }
    }
   

    componentDidMount(){
      this.props.navigation.setOptions({
      title : 'Welcome'
  })
    }
    

    renderHeader(){
      return(
        <View>
          <Text h2  bold>Welcome,</Text>
          <Text style={{left: wp('3%')}} h3>{this.state.firstname}</Text>
          <TouchableOpacity>
          <Block flex={false}>
          <Image
            resizeMode="contain"
            source={require("../../../assets/images/Menu.png")}
            style={{ width: 20, height: 24 , position: "absolute", top: -35, right: -4 }}
          />
             <Badge
               size={13}
                 color={colors.accent}
                 style={{ position: "absolute", top: -38, right: -4 }}
               />
             </Block>
         </TouchableOpacity>
        </View>
      );
    }

    renderAwards() {
        return (
          <View style={{paddingTop:-10}}>
          <TouchableOpacity
            activeOpacity={0.8}
          >
          <LinearGradient
            end={{ x: 1, y: 0 }}
            style={[blockStyles.row, cardStyles.card, styles.awards, {borderRadius:10}]}
            colors={["#FF988A", colors.accent]}
          >
            <Block  middle flex={0.4} >
              <Badge color={hexToRgba(colors.white, "0.2")} size={74}>
                <Badge color={hexToRgba(colors.white, "0.2")} size={52}>
                  <Icon
                    name="plus"
                    color="white"
                    size={sizes.h2}
                  />
                </Badge>
              </Badge>
            </Block>
            <Block middle>
              <Text size={sizes.base} spacing={0.4} medium bold white>
                Fund your Account!
              </Text>
              <Text spacing={0.4} white >
                Add money to your account through mobile money!
              </Text>
            </Block>
          </LinearGradient>
          </TouchableOpacity>
        </View>
        );
      }

    renderBalance = () =>{
        return (
            <View>
          <TouchableOpacity
            activeOpacity={0.8}
          >
            <Card shadow style={{ paddingVertical: sizes.padding , borderRadius:10}}>     
              <Block>
                <Block center>
                  <Text h1 primary spacing={1.7}>
                    {this.state.currentBalance}
                  </Text>
                  <Text spacing={0.7}>Current Balance</Text>
                </Block>
    
                <Block color={colors.gray2} style={styles.hLine} />
    
                <Block row>
                  <Block center>
                    <Text
                      size={20}
                      spacing={0.6}
                      primary
                      style={{ marginBottom: 6 }}
                    >
                      {this.state.conversionRate}
                    </Text>
                    <Text body spacing={0.7}>
                      Conversion
                    </Text>
                    <Text body spacing={0.7}>
                      Rate
                    </Text>
                  </Block>
    
                  <Block flex={false} color={colors.gray2} style={styles.vLine} />
    
                  <Block center>
                    <Text
                      size={20}
                      spacing={0.6}
                      primary
                      style={{ marginBottom: 6 }}
                    >
                      USD
                    </Text>
                    <Text body spacing={0.7}>
                      Account
                    </Text>
                    <Text body spacing={0.7}>
                      Currency
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Card>
              </TouchableOpacity>
        </View>
        );
      }

      renderMoneyBox = () => {
        return(
          <View style={styles.moneyBox}>
            <View  style={styles.line}/>
            <Text style={styles.funds} > Ghc {this.state.currentFunds}</Text>
            <Text style={styles.currentFundHeader}>Current Funds</Text>
          </View>

        );
      }
      renderMoneyAd = () => {
        return(
          <View style={styles.moneyAd}>
            <Image
            style={styles.objects}
            source={AdImage}
            />
            <Text style={styles.headerAd}>
              {`International Stocks
Let help you invest in
the best stock`}
            </Text>
          </View>

        );
      }
      
   render(){
    return(
    <View style={styles.background} >
      <View style={styles.welcome} >
        {this.renderHeader()}
       {this.renderMoneyBox()}
        {this.renderMoneyAd()}
        {/* {this.renderBalance()} */}
        {/* <CreditCard
        type='visa'
        shiny={true}
        bar={true}
        focused={null}
        number="5252625662762433"
        name="Phelimon Sarpaning"
        expiry="04/08"
        cvc="012"/> */}

          {/* {this.renderAwards()} */}
        </View>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        ref="scrollView"
        onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}
        style={styles.nextView}>
          <View style={styles.investBox}>
          </View>
        </ScrollView>
        
      </View>
    );
   };
       
}

export default Home;

const styles = StyleSheet.create({
  background: {
    //position: 'absolute',
    top: 0,
    left: 0,
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: '#fff',
  },
    welcome: {
        top: hp('8%'),
        paddingHorizontal:wp('10%'),
        backgroundColor: '#fff'
      },
      nextView : {
        position:'relative',
        top: hp('10%'),
      },
      currentFundHeader: {
        top: hp('0.1%'),
        left: wp('10%'),
        color: '#1f1c51',
        fontFamily: 'Helvetica',
        fontSize: 12,
        fontWeight: '400',
      },
      funds: {
        //position: 'absolute',
        top: hp('5%'),
        left: wp('8%'),
        color: '#1f1c51',
        //fontFamily: 'Viga',
        fontSize: 25,
        fontWeight: '400',
        //lineHeight: 22,
      },
      investBox: {
        //position: 'absolute',
        top: hp('54%'),
        alignSelf:'center',
        width: wp('85%'),
        height: hp('10%'),
        borderRadius:10,
        backgroundColor: '#146687'
      },
      line: {
        position: 'absolute',
        top: hp('2.5%'),
        left: wp('5%'),
        width: 1,
        height: 48,
        borderColor: '#1f1c51',
        borderStyle: 'solid',
        borderWidth: 2,
      },
      objects: {
        position: 'absolute',
        top: hp('3%'),
        alignSelf:'center',
        width: wp('52%'),
        height: hp('35%'),
      },
      headerAd: {
        position: 'absolute',
        top: hp('35%'),
        left: wp('5%'),
        color: '#ffffff',
        fontFamily: 'Helvetica',
        fontSize: 12,
        fontWeight: '400',
      },
      moneyBox: {
        position: 'absolute',
        top: hp('6%'),
        alignSelf:'center',
        width: wp('85%'),
        height: hp('10%'),
        borderRadius:10,
        backgroundColor: '#fcca0d',
      },
      moneyAd: {
        position: 'absolute',
        top: hp('18%'),
        alignSelf:'center',
        width: wp('85%'),
        height: 370,
        borderRadius: 10,
        backgroundColor: '#00ceb9',
      },
      // horizontal line
      hLine: {
        marginVertical: sizes.base * 2,
        marginHorizontal: sizes.base * 2,
        height: 1
      },
      // vertical line
      vLine: {
        marginVertical: sizes.base / 2,
        width: 1
      },
      awards: {
        padding: sizes.base,
        marginBottom: sizes.padding
      },
      moreIcon: {
        width: 16,
        height: 17,
        position: "absolute",
        right: sizes.base,
        top: sizes.base
      },
      startTrip: {
        position: "absolute",
        left: (width - 144) / 2,
        bottom: 0
      },
    headCard:{
        margin:30,
            marginBottom:5,
            justifyContent:'center',
            alignContent:'center',
            backgroundColor:'white'
    },
    textHead:{
        margin:60,
        marginLeft:35,
        marginBottom:5,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    textSmall: {
        fontSize: 15,
        color: '#ddd',
        marginLeft:20,
        marginTop:15,
    },
    drop:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:20,
    },
    textConvert: {
        fontSize: 15,
        color: '#222527',
        marginLeft:20,
        marginTop:5,
        fontWeight:'700',
    },
    amountText: {
        //marginTop:10,
        color:'#222527',
        paddingTop:38,
        fontSize: 50,
        marginLeft:20,
        //fontWeight: '700',
        },
});