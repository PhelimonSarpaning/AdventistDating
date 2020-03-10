import React from 'react';
import { StyleSheet,Text } from 'react-native';
//import * as eva from 'eva-icons';
import {
  Button,
  Layout,
  Icon
} from '@ui-kitten/components';

export const LocationButton = () => (
//   <Layout style={styles.container}>

    <Button style={styles.button} size='tiny' color='black' icon={renderIcon}>Location</Button>

//   </Layout>
);

const renderIcon = () => (
    <Icon
    name='pin-outline'
    width={15}
    height={15}
    fill='white'
    />
  );
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    color:'white',
    backgroundColor:'white',
  },
  button: {
    color:'white',
    borderRadius:15,
    margin: 8,
    borderColor:'white',
    alignSelf: 'flex-start',
    marginTop: -550,
  },
});