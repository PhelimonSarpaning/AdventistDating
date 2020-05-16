import React, { Component } from 'react';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,
  TouchableOpacity,
  Image          // Container component
} from 'react-native';
//import Image from '../../../assets/images/Path_2.png';
import Swiper from '../../components/Swiper/Swiper';
import Welcome from '../../pages/Welcome/Welcome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from '../../components/Responsive/Responsive';

export default class Boarding extends Component {
    
  render() {
    return (
      <Swiper>
      <View style={[styles.background]}>
        <Image 
        style={styles.path2}
        source={require('../../../assets/images/Path_2.png')}
        />
        <Image 
        style={styles.path3}
        source={require('../../../assets/images/Path_3.png')}
        />
        <Image 
        style={styles.path5}
        source={require('../../../assets/images/Path_5.png')}
        />
        <Image 
        style={styles.path8}
        source={require('../../../assets/images/Path_8.png')}
        />
        <Image 
        style={styles.path9}
        source={require('../../../assets/images/Path_9.png')}
        />
        <View style={styles.ellipse1} />
        <View style={styles.ellipse2} />
        <View style={styles.ellipse6} />
        <View style={styles.path2} />
        <View style={styles.path10} />
        <View style={styles.path11} />

        <Text style={styles.header}>International Investment</Text>
        <Text style={styles.text}>We make investment in international stock easy and seamless</Text>
      </View>

      {/* Second Screen */}
      <View style={[styles.background2]}>
        <Image 
        style={styles.path179}
        source={require('../../../assets/images/Path_179.png')}
        />
        <Image 
        style={styles.path178}
        source={require('../../../assets/images/Path_178.png')}
        />

        <View style={styles.rectangle2} />
        <Text style={styles.visa2}>Visa</Text>
        <View style={styles.rectangle3} />
        <Text style={styles.visa}>Visa</Text>
        <View style={styles.rectangle4} />
        <Text style={styles.visa1}>Visa</Text>
        <View style={styles.ellipse1} />
        <View style={styles.ellipse2} />
        <View style={styles.ellipse6} />
        <View style={styles.path2} />
        <View style={styles.path10} />
        <View style={styles.path11} />
    
        <Text style={styles.header}>Virtual Cards</Text>
        <Text style={styles.text}>We provide users with virtual cards to make global payments.</Text>
        {/* <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>Start</Text>
        </View>
      </TouchableOpacity> */}
      </View>
      <View>
          <Welcome navigation={this.props.navigation}/>
      </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: wp('100%'),
      height: hp('100%'),
      backgroundColor: '#a0fcd9',
    },
    background2: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#d2f5fc',
      },
      visa1: {
        position: 'absolute',
        top: hp('75%'),
        left: wp('80%'),
        width: 40,
        height: 31,
        color: '#ffffff',
        //fontFamily: 'Sharp Grotesk DB Semibold',
        fontSize: 20,
        fontWeight: '300',
        transform: [
            {rotate: '-107deg'}
          ]
      },
      visa2: {
        position: 'absolute',
        top: hp('68%'),
        left: wp('50%'),
        width: 40,
        height: 31,
        color: '#ffffff',
        //fontFamily: 'Sharp Grotesk DB Semibold',
        fontSize: 20,
        fontWeight: '300',
        transform: [
            {rotate: '-125deg'}
          ]
      },
      visa: {
        position: 'absolute',
        top: hp('71%'),
        left: 277,
        width: 40,
        height: 31,
        color: '#ffffff',
        //fontFamily: 'Sharp Grotesk DB Semibold',
        fontSize: 20,
        fontWeight: '300',
        transform: [
            {rotate: '-107deg'}
          ]
      },
      rectangle2: {
        position: 'absolute',
        top: hp('70%'),
        left: wp('20%'),
        width: 220,
        height: 265,
        borderRadius: 10,
        backgroundColor: '#ff708b',
        transform: [
            {rotate: '150deg'}
          ]
      },
      rectangle3: {
        position: 'absolute',
        top: hp('72%'),
        left: wp('30%'),
        width: 220,
        height: 265,
        borderRadius: 10,
        backgroundColor: '#7dcfe5',
        transform: [
            {rotate: '165deg'}
          ]
      },
      rectangle4: {
        position: 'absolute',
        top: hp('75%'),
        left: wp('42%'),
        width: 220,
        height: 265,
        borderRadius: 10,
        backgroundColor: '#71fcc6',
        transform: [
            {rotate: '168deg'}
          ]
      },
    button: {
    position: 'absolute',
    top: hp('60%'),
    left: wp('18%'),
    width: 130,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#71fcc6',
      },
      // Button text
      text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
      },
    header: {
        position: 'absolute',
        top: 200,
        left: 40,
        width: wp('80%'),
        height: 19,
        color: '#1f1c51',
        //fontFamily: 'Viga',
        fontSize: 18,
        fontWeight: '600',
      },
      text: {
        position: 'absolute',
        top: 227,
        left: 40,
        width: wp('65%'),
        height: 59,
        color: '#1f1c51',
        //fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21,
      },
      path2: {
        position: 'absolute',
        top: 528,
        left: -63,
        width: 583,
        height: 369,
        //borderRadius: 60,
        //backgroundColor: '#b9efdf',
        opacity: 0.26
      },
      path3: {
        position: 'absolute',
        top: hp('55%'),
        left: -32,
        width: 553,
        height: 372,
        //backgroundColor: '#58cc9f',
        opacity: 0.26,
      },
      path5: {
        position: 'absolute',
        top: hp('72%'),
        left: wp('5%'),
        width: 496,
        height: 253,
        //backgroundColor: '#c8fcee',
      },
      path8: {
        position: 'absolute',
        top: 525,
        left: wp('20%'),
        width: wp('28%'),
        height: 30,
        //backgroundColor: '#f6f9f2',
      },
      path9: {
        position: 'absolute',
        top: 479,
        left: wp('60%'),
        width: 102,
        height: 41,
        //backgroundColor: '#f6f9f2',
      },
      path10: {
        position: 'absolute',
        top: 628,
        left: -5,
        width: 20,
        height: 19,
        borderRadius:20,
        backgroundColor: '#cbe3df',
        opacity: 0.25,
      },
      path11: {
        position: 'absolute',
        top: 501,
        left: 82,
        width: 11,
        height: 11,
        borderRadius:20,
        backgroundColor: '#cbe3df',
        opacity: 0.25,
      },
      path178: {
        position: 'absolute',
        top: hp('70%'),
        left: -63,
        width: 548,
        height: 467,
        transform: [
            {rotate: '20deg'}
          ]
        //backgroundColor: '#a1e7f5',
      },
      path179: {
        position: 'absolute',
        top: 433,
        left: 16,
        width: 436,
        height: 593,
        //backgroundColor: '#81daf2',
        opacity: 0.4,
      },
      ellipse1: {
        position: 'absolute',
        top: 550,
        left: -22,
        width: 55,
        height: 65,
        borderRadius:35,
        backgroundColor: '#cbe3df',
        opacity: 0.25,
      },
      ellipse2: {
        position: 'absolute',
        top: 440,
        left: 160,
        width: 36,
        height: 37,
        borderRadius:20,
        backgroundColor: '#cbe3df',
        opacity: 0.25,
      },
      ellipse6: {
        position: 'absolute',
        top: 524,
        left: 34,
        width: 15,
        height: 15,
        borderRadius:35,
        backgroundColor: '#cbe3df',
        opacity: 0.25,
      },
  })