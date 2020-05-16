import Firebase, { PhoneAuth,  db } from "../config/Firebase";
import auth from '@react-native-firebase/auth';
import { UPDATE_EMAIL, OTP, UPDATE_PASSWORD,UPDATE_FIRSTNAME, UPDATE_LASTNAME, LOGIN, SIGNUP, CREATE_USER_FAIL } from "./types";

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const updateFirstname = firstname => {
    return {
        type: UPDATE_FIRSTNAME,
        payload: firstname
    }
}

export const updateLastname = lastname => {
    return {
        type: UPDATE_LASTNAME,
        payload: lastname
    }
}




export const signupError = () =>{
    {console.log("got here")}
    return {
        type: CREATE_USER_FAIL
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch({ type: LOGIN, payload: response.user })
        } catch (e) {
            console.log(e)
        }
    }
}

export const signupWithPhoneNumber = (phoneNumber) => {
    return async(dispatch, getState) => {
        try{
            console.log("this is here too philly")
            //var appVerifier = window.recaptchaVerifier;
            console.log("the phone number is " + phoneNumber)

            const confirmationResult = await auth().signInWithPhoneNumber("+" + phoneNumber)
            console.log("the confrimation" + confirmationResult)
            dispatch({type: OTP, payload: confirmationResult})
        } catch(e){
            console.log("the error is + " + e)
        }
// .then(function (confirmationResult) {

//    {console.log("the result"  + confirmationResult[0])}
//  // SMS sent. Prompt user to type the code from the message, then sign the
//  // user in with confirmationResult.confirm(code).
//  window.confirmationResult = confirmationResult;
//  dispatch({type: OTP, payload: confirmationResult})
// }).catch(function (error) {
//    console.log("the error in here" + error)
 // Error; SMS not sent
 // ...
//});
    }
    
}

export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { firstname, lastname, email, password } = getState().user
            //const { firstname, lastname} = getState().profile

            
            // console.log("first name is " + firstname)
            // console.log('user email is ' + email)
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            //console.log("use is " + response.user)
            const { uid } = Firebase.auth().currentUser;

            const userData = {
                firstname,
                lastname,
                email,
                uid
            }
            const userInfo = response.user

            await db.collection('Users').doc(uid).set(userData);
            //console.log("user signup info " + uid)

            dispatch({ type: SIGNUP, payload: response.user })
        } catch (e) {
            console.log(e)
            dispatch(signupError())
            
        }
        
    }
}