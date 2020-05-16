import React, {Component} from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {View} from 'react-native';
//import { Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Block from '../../components/Block/Block';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import {colors,sizes} from '../../constants/theme';
import signup from './../../../assets/images/signup.png';

class Onboard extends Component{
  constructor(props){
    super(props);
  };
    render(){
        return(
          <View style={{backgroundColor:colors.white, flex:1, paddingTop:50}}>
          <Block middle >
            <Onboarding  bottomBarColor={backgroundColor=colors.white}
  pages={[
    {
      backgroundColor: colors.white,
      image: <Image source={require('./../../../assets/images/creditCard.png')}  style={{ width:400, height:400,  }} />,
      //imageContainerStyles: {width:10, height:10, paddingBottom:100},
      title: 'Create Virtual Credit/Debit Cards',
      subtitle: 'Create virtual cards from your phone and make payments globally',
      titleStyles:{color:colors.primary, fontWeight:'500'},
      //containerStyles:paddingTop=-100
      
      //subTitleStyles: {color:colors.secondary}
    },
    {
      backgroundColor: colors.white,
      image: <Image source={require('./../../../assets/images/fund.png')} style={{ width:400, height:400, paddingTop:-10 }}/>,
      title: 'Fund Account with Mobile Money',
      subtitle: 'With no stress and hassle, fund your virtual account right from your phone',
      titleStyles:{color:colors.primary, fontWeight:'500'},
    },
    {
      backgroundColor: colors.white,
      image: <Image source={require('./../../../assets/images/nofees.png')} style={{ width:400, height:400, }} />,
      title: 'No Hidden Fees',
      subtitle: 'Make payments and transfer funds internationally with no hidden fees',
      titleStyles:{color:colors.primary, fontWeight:'500'},
    },
    {
      title: "Let's get started",
      image: <Image source={require('./../../../assets/images/wallet.png')} 
      style={{ width:300, height:300,paddingTop:300}} />,
      subtitle:(
        <View style={{paddingTop:50}}>
        <Block  flex={0.5} margin={[0, sizes.padding * 2]}>
          <Button gradient onPress={() => this.props.navigation.navigate("Signin")}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
          <Button shadow onPress={() => this.props.navigation.navigate("Signup")}>
            <Text center semibold>
              Signup
            </Text>
          </Button>
          <Button onPress={() => this.setState({ showTerms: true })}>
            <Text center caption gray>
              Terms of service
            </Text>
          </Button>
        {/* </Block>
        {this.renderTermsService()} */}
      </Block>
  </View>
      ),
      backgroundColor: colors.white,
      
    },
  ]}
/>
</Block>
</View>
        );
    }
};
export default Onboard;