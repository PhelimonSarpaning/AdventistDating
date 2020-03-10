import React from 'react';
import { StyleSheet,Text, View,Dimensions } from 'react-native';
//import * as eva from 'eva-icons';

import {
  Button,
  Layout,
  Icon
} from '@ui-kitten/components';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export const FilterButton = () => (
  <View style={styles.container}>

    <Button style={[styles.button]} size='tiny' color='black' icon={renderLocationIcon}>Location</Button>
    <Button style={[styles.button, {width:100, justifyContent:'space-evenly'}]} size='tiny' color='black' icon={renderIcon}>Filter</Button>

 </View>
);

const renderLocationIcon = () => (
    <Icon
    name='pin-outline'
    width={15}
    height={15}
    fill='white'
    />
  );
const renderIcon = () => (
    <Icon
    name='funnel-outline'
    width={15}
    height={15}
    fill='white'
    />
  );
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 70,
    marginBottom:-80,
    
    //marginTop: -600,
    // alignItems: 'center',
    //flexWrap: 'wrap',
    // color:'white',
   // backgroundColor:'#d1d6d9',
  },
  button: {
    borderRadius:15,
    marginHorizontal:60,
    justifyContent: 'space-between',
   
    
    //marginTop: 70,
  },
  buttonRight: {
    //...StyleSheet.absoluteFillObject,
    // flexDirection: 'row',
    //backgroundColor:'white',
    width:100,
  },
});