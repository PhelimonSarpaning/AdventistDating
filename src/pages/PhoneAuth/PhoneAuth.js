import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';

//import Frisbee from 'frisbee';
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signupWithPhoneNumber } from '../../actions/index';
//import styles from './Signup.styles';
import CountryPicker from 'react-native-country-picker-modal';
import Block from '../../components/Block/Block';

// const api = new Frisbee({
//   baseURI: 'http://localhost:3000',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// });

const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 20;


// if you want to customize the country picker
const countryPickerCustomStyles = {};

// your brand's theme primary color
const brandColor = '#744BAC';

const styles = StyleSheet.create({
  countryPicker: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  header: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 22,
    margin: 20,
    color: '#4A4A4A',
  },
  form: {
    margin: 20
  },
  textInput: {
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: 20,
    color: brandColor
  },
  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: brandColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold'
  },
  wrongNumberText: {
    margin: 10,
    fontSize: 14,
    textAlign: 'center'
  },
  disclaimerText: {
    marginTop: 30,
    fontSize: 12,
    color: 'grey'
  },
  callingCodeView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  callingCodeText: {
    fontSize: 20,
    color: brandColor,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    paddingRight: 10
  }
});

class PhoneAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterCode: false,
      phone:'',
      spinner: false,
      confirm:'',
      withFlag:true,
      country: {
        cca2: 'GH',
        callingCode: '233'
      }
    };
  }

  signInWithPhoneNumber = async (phoneNumber)  => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setState({confirm : confirmation});
    return confirmation;
  }

  _getCode = async () => {

    this.setState({ spinner: true });

    setTimeout(async () => {

      try {
        {console.log("I got here")}
        const phoneNo = this.refs.form.getValues();

        const finalNum = JSON.stringify(phoneNo['phoneNumber']).replace(/^"(.*)"$/, '$1')

        this.setState({phone : finalNum})

        console.log("the fix num " + this.state.country.callingCode)
        const res = await this.props.signupWithPhoneNumber(this.state.phone)
        //this.props.signupWithPhoneNumber(this.state.phone)
         
        //console.log("the res is " + res)

        //if (res.err) throw res.err;

        this.setState({
          spinner: false,
          enterCode: true,
          //verification: res.body
        });
        this.refs.form.refs.textInput.setNativeProps({ text: '' });

        setTimeout(() => {
          Alert.alert('Sent!', "We've sent you a verification code", [{
            text: 'OK',
            onPress: () => this.refs.form.refs.textInput.focus()
          }]);
        }, 100);

      } catch (err) {
        console.log(err.message)
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }

    }, 600);

  }

 
  _verifyCode = () => {

    this.setState({ spinner: true });

    setTimeout(async () => {

      try {

        const res = await api.put('/v1/verifications', {
          body: {
            ...this.refs.form.getValues(),
            ...this.state.country
          }
        });

        if (res.err) throw res.err;

        this.refs.form.refs.textInput.blur();
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Success!', 'You have successfully verified your phone number');
        }, 100);

      } catch (err) {
        // <https://github.com/niftylettuce/react-native-loading-spinner-overlay/issues/30#issuecomment-276845098>
        this.setState({ spinner: false });
        setTimeout(() => {
          Alert.alert('Oops!', err.message);
        }, 100);
      }

    }, 100);

  }

  _onChangeText = (val) => {
    {console.log("the value is " + val)}
    this.setState({phone: val})
    if (!this.state.enterCode) return;
    if (val.length === MAX_LENGTH_CODE)
    this._verifyCode();
  }

  _tryAgain = () => {
    this.refs.form.refs.textInput.setNativeProps({ text: '' })
    this.refs.form.refs.textInput.focus();
    this.setState({ enterCode: false });
  }

  _getSubmitAction = () => {
    {console.log("i am in submit")}
    this.state.enterCode ? this._verifyCode() : this._getCode();
  }

  _changeCountry = (country) => {
    this.setState({ country });
    this.refs.form.refs.textInput.focus();
  }

  _renderFooter = () => {

    if (this.state.enterCode)
      return (
        <View>
          <Text style={styles.wrongNumberText} onPress={this._tryAgain}>
            Enter the wrong number or need a new code?
          </Text>
        </View>
      );

    return (
      <View>
        <Text style={styles.disclaimerText}>By tapping "Send confirmation code" above, we will send you an SMS to confirm your phone number. Message &amp; data rates may apply.</Text>
      </View>
    );

  }

  _renderCountryPicker = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <CountryPicker

        ref={'countryPicker'}
        closeable
        style={styles.countryPicker}
        onChange={this._changeCountry}
        cca2={this.state.country.cca2}
        styles={countryPickerCustomStyles}
        translation='eng'
       />
    );

  }

  _renderCallingCode = () => {

    if (this.state.enterCode)
      return (
        <View />
      );

    return (
      <View style={styles.callingCodeView}>
        <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
      </View>
    );

  }

  render() {

    let headerText = `What's your ${this.state.enterCode ? 'verification code' : 'phone number'}?`
    let buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Send confirmation code';
    let textStyle = this.state.enterCode ? {
      height: 50,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: 'Courier'
    } : {};

    return (
        <Block middle >
      <View style={styles.container}>

        <Text style={styles.header}>{headerText}</Text>

        <Form ref={'form'} style={styles.form}>

          <View style={{ flexDirection: 'row' }}>

            {/* {this._renderCountryPicker()} */}
            {this._renderCallingCode()}

            <TextInput
              ref={'textInput'}
              name={this.state.enterCode ? 'code' : 'phoneNumber' }
              type={'TextInput'}
              underlineColorAndroid={'transparent'}
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={this._onChangeText}
              placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Phone Number'}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
              style={[ styles.textInput, textStyle ]}
              returnKeyType='go'
              autoFocus
              placeholderTextColor={brandColor}
              selectionColor={brandColor}
              maxLength={this.state.enterCode ? 6 : 20}
              onSubmitEditing={this._getSubmitAction} />

          </View>

          <TouchableOpacity style={styles.button} onPress={this._getSubmitAction}>
            {console.log("the code is " + this.state.enterCode)}
            <Text style={styles.buttonText}>{ buttonText }</Text>
          </TouchableOpacity>

          {this._renderFooter()}

        </Form>

        <Spinner
          visible={this.state.spinner}
          textContent={'One moment...'}
          textStyle={{ color: '#fff' }} />

      </View>
      </Block>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signupWithPhoneNumber }, dispatch)
}

const mapStateToProps = state => {
  {console.log("the user " + state.user.authMsg)}
  return {
    user: state.user,
    authMsg: state.user.authMsg
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneAuth)
