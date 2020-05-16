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

import {sizes, colors, fonts} from '../../constants/theme';
import Icon from "react-native-vector-icons/FontAwesome";

import { BottomNavigation, BottomNavigationTab, Layout } from '@ui-kitten/components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const { width } = Dimensions.get("window");

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
            currentBalance:'10,000',
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
        <Block style={{paddingBottom:20}}>
          <Text h2  bold>Welcome,</Text>
          <Text style={{right: -15}} h3>{this.state.firstname}</Text>
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
        </Block>
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
      
   render(){
    return(
    <React.Fragment>
        <ScrollView style={styles.welcome} showsVerticalScrollIndicator={false}>
        {this.renderHeader()}
        {this.renderBalance()}
        <CreditCard
        type='visa'
        shiny={true}
        bar={true}
        focused={null}
        number="5252625662762433"
        name="Phelimon Sarpaning"
        expiry="04/08"
        cvc="012"/>

          {this.renderAwards()}
        </ScrollView>
      </React.Fragment>
    );
   };
       
}

export default Home;

const styles = StyleSheet.create({
    welcome: {
        paddingTop: 100,
        paddingVertical: sizes.padding,
        paddingHorizontal: sizes.padding,
        backgroundColor: colors.gray4
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