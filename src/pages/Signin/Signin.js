import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TouchableOpacity
} from "react-native";
import Block from '../../components/Block/Block';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../components/Responsive/Responsive';
import {sizes, colors} from '../../constants/theme';


const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    loading: false
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });
    
    navigation.navigate("TabNavigator");
    // check with backend API or with some static data
    // if (email !== VALID_EMAIL) {
    //   errors.push("email");
    // }
    // if (password !== VALID_PASSWORD) {
    //   errors.push("password");
    // }

    // this.setState({ errors, loading: false });

    // if (!errors.length) {
    //   navigation.navigate("TabNavigator");
    // }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block style={{paddingHorizontal:wp('15%')}} styles={{backgroundColor:colors.white}}>
          <Block middle>
          <Text h1 bold primary style={styles.signupText}>
            Log In
          </Text>
          <Text style={styles.nextText}>
          {`Welcome back to Pine! Let's explore the world of investment and payments.`}
          </Text>
          <View style={styles.oval} />
          <View style={styles.path1} />
          <View style={styles.path2} />
          <View style={styles.path3} />
          <View style={styles.back} />
            <Input
              placeholder="Email"
              error={hasErrors("email")}
              style={[styles.emailInput, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              placeholder="Password"
              error={hasErrors("password")}
              style={[styles.passwordInput, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
        
            <TouchableOpacity center style={styles.newButton} onPress={() => this.handleLogin()}>
            {this.state.loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
              <Text style={{paddingVertical:hp('1.4%'), paddingHorizontal:hp('5%')}}>Log In</Text>
              )}
            </TouchableOpacity>

            <Button onPress={() => navigation.navigate("Forgot")} style={{top:hp('20%')}}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </Button>
            <Button onPress={() => navigation.navigate("Signup")} style={{top:hp('20%')}}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Don't have an account?Create one.
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:colors.white
  },
  newButton: {
    position: 'absolute',
    top: hp('60%'),
    left: wp('18%'),
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