import React, {Component} from 'react';
import {
   Dimensions,
   Image,
   StyleSheet,
   Alert,
   ActivityIndicator,
   Keyboard,
   KeyboardAvoidingView,
   TouchableOpacity,
   View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateFirstname, updateLastname, signup, signupError } from '../../actions/index';
//import styles from './Signup.styles';
//import signup from './../../../assets/images/signup.png';
import Block from '../../components/Block/Block';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../components/Responsive/Responsive';
import Button from '../../components/Button/Button';
//import NewButton from '../../components/Button/newButton';
import {sizes, colors} from '../../constants/theme';
import { auth } from 'firebase';

const { width, height } = Dimensions.get("window");

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname:null,
      lastname:null,
      password:null,
      errors:[],
      errorMessage:'',
      email:null,
      loading:false
    }
  }

// componentDidMount(){
//   this.setState
// }

  handleSignUp(authMsg) {
    const { email, firstname,lastname, password } = this.state;
    // const { authMsg } = this.props;
    const err = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    if (!email) err.push("email");
    if (!firstname) err.push("firstname");
    if (!lastname) err.push("lastname");
    if (!password) err.push("password");

    this.setState({ errors:err, loading: false });
    // check with backend API or with some static data
    this.props.updateEmail(email)
    this.props.updatePassword(password)
    this.props.updateFirstname(firstname)
    this.props.updateLastname(lastname)
    this.props.signup()

    setTimeout(function() { //Start the timer
      this.setState({errorMessage: authMsg})
      this.alertTrue(err); //After 1 second, set render to true
  }.bind(this), 4000)
    
    
  }

  alertTrue(err){
    const { navigation } = this.props;
    if (!err.length || this.state.errorMessage==='undefined'  || this.state.errorMessage=="")  {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("PhoneAuth");
            }
          }
        ],
        { cancelable: false }
      );
    }
    else{
      console.log("the new error is " + this.state.errorMessage)
      Alert.alert(
        "Error",
        "Your email is wrong",
        [
          {
            text: "Ok"
          }
        ]
      )
    }
  } 

  errorAlert(){

  }
  
    render() {
      const { navigation, authMsg } = this.props;

      {console.log("The thing go skrrrrrr "  + authMsg)}

    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
      return (
        <KeyboardAvoidingView style={styles.signupStyle} behavior="padding">
        <Block  style={{paddingHorizontal:wp('15%')}}>
        {/* padding={[0, sizes.base * 2]} */}
          <Block >
          {/* middle style={{paddingTop:50}} */}
          <Text h1 bold primary style={styles.signupText}>
            Here To Join Us!
            {" "}
          </Text>
          <Text style={styles.nextText}>
          {`New to Pine? Let's explore the world of investment and payments.`}
          </Text>
          <View style={styles.oval} />
          <View style={styles.path1} />
          <View style={styles.path2} />
          <View style={styles.path3} />
          <View style={styles.back} />
            <Input
              placeholder="FirstName"
              error={hasErrors("firstname")}
              style={[styles.nameInput, hasErrors("firstname")]}
              defaultValue={this.state.firstname}
              onChangeText={text => this.setState({ firstname: text })}
            />
            <Input
              placeholder="LastName"
              error={hasErrors("lastname")}
              style={[styles.name2Input, hasErrors("lastname")]}
              defaultValue={this.state.lastname}
              onChangeText={text => this.setState({ lastname: text })}
            />
            <Input
              email
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
            <TouchableOpacity center style={styles.newButton} onPress={() => this.handleSignUp(authMsg)}>
            {this.state.loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
              <Text style={{paddingVertical:hp('1.4%'), paddingHorizontal:hp('5%')}}>Next</Text>
              )}
            </TouchableOpacity>

            <Button onPress={() => navigation.navigate("Signin")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline", top:hp('69%') }}
              >
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
      );
    }
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updateFirstname, updateLastname, signup }, dispatch)
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
  )(Signup)

  const styles = StyleSheet.create({
    signupStyle: {
      flex: 1,
      justifyContent: "center",
      backgroundColor:'white'
    },
    newButton: {
      position: 'absolute',
      top: hp('80%'),
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
    nameInput: {
      borderColor:'white',
      paddingLeft:wp('5%'),
      position: 'absolute',
      top: hp('35%'),
      width: 294,
      height: 44,
      borderRadius: 9,
      backgroundColor: '#e4e9eb',
    },
    name2Input: {
      borderColor:'white',
      paddingLeft:wp('5%'),
      position: 'absolute',
      top: hp('38%'),
      width: 294,
      height: 44,
      borderRadius: 9,
      backgroundColor: '#e4e9eb',
    },
    emailInput: {
      borderColor:'white',
      paddingLeft:wp('5%'),
      position: 'absolute',
      top: hp('41%'),
      width: 294,
      height: 44,
      borderRadius: 9,
      backgroundColor: '#e4e9eb',
    },
    passwordInput: {
      borderColor:'white',
      paddingLeft:wp('5%'),
      position: 'absolute',
      top: hp('44%'),
      width: 294,
      height: 44,
      borderRadius: 9,
      backgroundColor: '#e4e9eb',
    },
    signupText: {
      position: 'absolute',
      top: 202,
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
    hasErrors: {
      borderBottomColor: colors.accent
    }
  });