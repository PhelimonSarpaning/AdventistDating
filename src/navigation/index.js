import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from "react-navigation";
//import { createStackNavigator } from "react-navigation-stack";

import Onboard from '../pages/Onboarding/Onboard';
import Home from '../pages/Home/Home';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';
import VerificationCode from '../pages/VerificationCode/VerificationCode';
// import Welcome from "../screens/Welcome";
// import Rewards from "../screens/Rewards";
// import Trip from "../screens/Trip";

import { colors, sizes } from '../constants/theme';

const Stack = createStackNavigator();

<NavigationContainer styles={{backgroundColor:'white'}}>
<Stack.Navigator initialRouteName="Onboard" screenOptions={{headerShown:false}} styles={{backgroundColor:'white'}}>
  <Stack.Screen name="Onboard" component={Onboard} />
  <Stack.Screen name="Signup" component={Signup} />
  <Stack.Screen name="Signin" component={Signin} />
  <Stack.Screen name="VerificationCode" component={VerificationCode}/>
</Stack.Navigator>
</NavigationContainer>
//   {
//     Home: {
//        screen: Onboard,
//     }
//     // Signup,
//     // Signin,
//     // VerificationCode,
//     // Home,

//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         height: 60,
//         backgroundColor: colors.gray4,
//         borderBottomColor: "transparent"
//       },
//       headerTitleContainerStyle: {
//         alignItems: "flex-end",
//         paddingLeft: sizes.padding
//       },
//       headerLeftContainerStyle: {
//         alignItems: "flex-end",
//         marginLeft: sizes.padding,
//         paddingRight: sizes.base
//       },
//       headerRightContainerStyle: {
//         alignItems: "flex-end",
//         marginRight: sizes.padding
//       }
//     },
//     headerLayoutPreset: "left"
//   }
// );

export default createAppContainer(Stack);