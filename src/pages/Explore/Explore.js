import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack';
import { BottomNavigation, BottomNavigationTab, Layout, Text ,Icon} from '@ui-kitten/components';
import {FilterButton} from '../../components/FilterButton/FilterButton';
import CardImage from '../../components/SwipeCards/CardImage';
import { BlurView } from "@react-native-community/blur";
import Home from '../Home/Home';
import Transactions from '../../components/Transactions/Transactions';
import Settings from '../Settings/Settings';
import Watchlist from '../WatchList/WatchList';
import {LocationButton} from '../../components/LocationButton/LocationButton';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const WatchlistStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackScreen= () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);


const TransactionScreen= () => (
  <WatchlistStack.Navigator>
    <WatchlistStack.Screen 
    name="Transactions" 
    component={Transactions}  
    options={{ 
      headerTitleAlign:"left",
    }}/>
  </WatchlistStack.Navigator>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', backgroundColor:'#d1d6d9'}}>
    <FilterButton/>
    <CardImage/>
    
    {/* <LocationButton/> */}
    
    {/* <Text category='h1'>ORDERS</Text> */}
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => {

  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <View >
      <BottomNavigation selectedIndex={state.index} onSelect={onSelect}>
      <BottomNavigationTab title='HOME'/>
      <BottomNavigationTab title='TRANSACTIONS'/>
      {/* <BottomNavigationTab title='NOTIFICATIONS'/> */}
      <BottomNavigationTab title='ACCOUNT'/>
        {/* <BottomNavigationTab title='USERS'/>
        <BottomNavigationTab title='ORDERS'/> */}
      </BottomNavigation>
    </View>
  );
};

export const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />} style={{backgroundColor:'#fff'}}>
    <BottomTab.Screen name='Home' component={Home}/>
    <BottomTab.Screen name='Transactions' component={TransactionScreen}/>
    {/* <BottomTab.Screen name='Notifications' component={OrdersScreen}/> */}
    <BottomTab.Screen name='Account' component={Settings}/>
  </BottomTab.Navigator>
);

// export const AppNavigator = () => (
 
//   <NavigationContainer>
      
//     <TabNavigator/>
    
//   </NavigationContainer> 
  
   
// );

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   absolute: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0
//   }
// });