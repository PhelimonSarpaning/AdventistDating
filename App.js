/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { ApplicationProvider, Layout, Text,IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TabNavigator} from './src/pages/Explore/Explore';
//import Onboard from './src/pages/Onboarding/Onboard';
import Boarding from './src/pages/Boarding/Boarding';
import Welcome from './src/pages/Welcome/Welcome';
import Signup from './src/pages/Signup/Signup';
import Signin from './src/pages/Signin/Signin';
import Home from './src/pages/Home/Home';
import Block from './src/components/Block/Block';
import PhoneAuth from './src/pages/PhoneAuth/PhoneAuth';
import VerificationCode from './src/pages/VerificationCode/VerificationCode';
import {
  StyleSheet,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from './src/reducers';

const Stack = createStackNavigator();
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const App: () => React$Node = () => {
  return (
    <>
        <Provider store={store}>
         <Block>
         <IconRegistry icons={EvaIconsPack} />
         <ApplicationProvider mapping={mapping} theme={lightTheme} >
         <NavigationContainer styles={{backgroundColor:'white'}}>
      <Stack.Navigator initialRouteName="Boarding" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Signin" component={Signin} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={({route, navigation}) => (
                    {
                    navigation: {navigation}}
                )} />
        <Stack.Screen name="VerificationCode" component={VerificationCode}/>
        <Stack.Screen name="PhoneAuth" component={PhoneAuth}/>
      </Stack.Navigator>
    </NavigationContainer>
           {/* <Onboard/> */}
          {/* <AppNavigator/> */}
          </ApplicationProvider>
         </Block>
         </Provider>
           
        
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
