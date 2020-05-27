import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Block from '../../components/Block/Block';
//import Text from '../../components/Text/Text';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../components/Responsive/Responsive';
import {sizes, colors} from '../../constants/theme';


class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            navigation: this.props.navigation,
            email: '',
            password: '',
            errors: [],
            //loading: false
          };

    }
    
  render() {
    //const { navigation } = this.props;
    //const { loading, errors } = this.state;
    //const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
        <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block style={{paddingHorizontal:wp('15%'), backgroundColor:'white'}}>
          <Block middle >
          <Text h1 bold primary style={styles.signupText}>
            Welcome to Pine
          </Text>
          <Text style={styles.nextText}>
          {`Enjoying using our platform for the best international investment and stock exchange.`}
          </Text>
          <View style={styles.oval} />
          <View style={styles.path1} />
          <View style={styles.path2} />
          <View style={styles.path3} />
          <View style={styles.back} />
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signin')} style={styles.newButton}>
            {/* {state.loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : ( */}
              <Text style={{paddingVertical:hp('1.4%'), paddingHorizontal:hp('5%')}}>LogIn</Text>
              {/* )} */}
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signup')} style={styles.secondButton}>
            {/* {state.loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : ( */}
              <Text style={{paddingVertical:hp('1.4%'), paddingHorizontal:hp('5%')}}>SignUp</Text>
              {/* )} */}
            </TouchableOpacity>
            </View>
          </Block>
        </Block>
        </KeyboardAvoidingView>
    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'white'
  },
  newButton: {
    position: 'absolute',
    top: hp('80%'),
    left: wp('2%'),
    width: 135,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#71fcc6',
  },
  secondButton: {
    position: 'relative',
    top: hp('80%'),
    left: wp('40%'),
    width: 130,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#71fcc6',
  },
  nextText: {
    position: 'absolute',
    top: hp('26%'),
    color: '#707070',
    borderColor:'white',
    lineHeight: 21,
  },
  emailInput: {
    borderColor:'white',
    paddingLeft:wp('5%'),
    position: 'absolute',
    top: hp('0.1%'),
    width: 294,
    height: 44,
    borderRadius: 9,
    backgroundColor: '#e4e9eb',
  },
  passwordInput: {
    borderColor:'white',
    paddingLeft:wp('5%'),
    position: 'absolute',
    top: hp('2.5%'),
    width: 294,
    height: 44,
    borderRadius: 9,
    backgroundColor: '#e4e9eb',
  },
  signupText: {
    position: 'absolute',
    top: hp('22%'),
    color: '#1f1c51',
  },
  oval: {
    position: 'absolute',
    top: 300,
    left: -84,
    width: 39,
    height: 39,
    borderRadius: 50,
    borderColor: '#a9fddc',
    borderStyle: 'solid',
    borderWidth: 7,
  },
  path1: {
    position: 'absolute',
    top: 226,
    left: 330,
    width: 56,
    height: 55,
    borderRadius: 50,
    borderColor: '#fcca0d',
    borderStyle: 'solid',
    borderWidth: 7,
  },
  path2: {
  position: 'absolute',
  top: -8,
  left: 166,
  width: 68,
  height: 69,
  borderRadius: 30,
  borderColor: '#a9fddc',
  borderStyle: 'solid',
  borderWidth: 11,
  },
  path3: {
    position: 'absolute',
    top: hp('20%'),
    left: wp('78%'),
    width: wp('39%'),
    height: hp('0.5%'),
    borderColor: '#ff708b',
    borderStyle: 'solid',
    borderWidth: 8,
    borderRadius:7,
    transform: [
      {rotate: '20deg'}
    ]
  },
  back: {
    position: 'absolute',
    top: 55,
    left: 36,
    width: 15,
    height: 20,
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    borderColor: '#1f1c51',
    borderStyle: 'solid',
    borderWidth: 4,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: colors.accent
  }
});