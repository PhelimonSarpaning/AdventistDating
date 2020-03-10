import React, {Component} from 'react';
import {
    Card,
  } from '@ui-kitten/components';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const Users = [
    { id: "1", name:"Timothy Garze", description:"Dog Mum, full time Traveller and an adventist", uri: require('../../img/1.jpg') },
    { id: "2", name:"Ttey rze", description:"I love to travel the world. meet me at the top", uri: require('../../img/2.jpg') },
    { id: "3", name:"Dan Bot", description:"I am an aDVENTIST Pastor and excited about this faith.", uri: require('../../img/3.jpg') },
    // { id: "4", uri: require('./assets/4.jpg') },
    // { id: "5", uri: require('./assets/5.jpg') },
]

const renderImage = (url, name, description)=> {
  return (
    <View style={{ flex:2, width:SCREEN_WIDTH, height:SCREEN_HEIGHT-400, paddingHorizontal:20, alignSelf:'center' }}>
      <View style={{ backgroundColor: "white", borderRadius: 10, overflow: "hidden", padding:20, paddingRight:20 }}>
        <View>
          <Image
            source={url}
            style={{
              alignSelf:'center',
              height: SCREEN_HEIGHT - 400,
              width: 340,
              borderRadius:10,
              padding:100,
            }}
          />
        </View>
        <View style={{padding: 10, width: 305, }}>
          <Text style={{alignSelf:'center', fontSize:30}}>{name}</Text>
          <Text style={{ color: "#777", alignSelf:'center' }}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
}
export default class CardImage extends Component {

    constructor() {
      super()
  
      this.position = new Animated.ValueXY()
      this.state = {
        currentIndex: 0
      }
  
      this.rotate = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH /2 ,0, SCREEN_WIDTH /2],
        outputRange: ['-30deg', '0deg', '10deg'],
        extrapolate: 'clamp'
      })
  
      this.rotateAndTranslate = {
        transform: [{
          rotate: this.rotate
        },
        ...this.position.getTranslateTransform()
        ]
      }
  
      this.likeOpacity = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
      })
      this.dislikeOpacity = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp'
      })
  
      this.nextCardOpacity = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp'
      })
      this.nextCardScale = this.position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: 'clamp'
      })
  
    }
    UNSAFE_componentWillMount() {
      this.PanResponder = PanResponder.create({
  
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onPanResponderMove: (evt, gestureState) => {
  
          this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
        },
        onPanResponderRelease: (evt, gestureState) => {
  
          if (gestureState.dx > 120) {
            Animated.spring(this.position, {
              toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
            }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                this.position.setValue({ x: 0, y: 0 })
              })
            })
          }
          else if (gestureState.dx < -120) {
            Animated.spring(this.position, {
              toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
            }).start(() => {
              this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                this.position.setValue({ x: 0, y: 0 })
              })
            })
          }
          else {
            Animated.spring(this.position, {
              toValue: { x: 0, y: 0 },
              friction: 4
            }).start()
          }
        }
      })
    }
  
    renderUsers = () => {
  
      return Users.map((item, i) => {
  
  
        if (i < this.state.currentIndex) {
          return null
        }
        else if (i == this.state.currentIndex) {
  
          return (
            
            <Animated.View
              {...this.PanResponder.panHandlers}
              key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 300, width: SCREEN_WIDTH, padding: 30, position: 'absolute' }]}>
                
              <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              
                <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
  
              </Animated.View>
  
              <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
  
              </Animated.View>
              {/* <Card style={{height:SCREEN_HEIGHT - 300, borderRadius:20}}> */}
              {/* <Image
                style={{ flex: 2, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                source={item.uri} /> */}
                  {/* </Card> */}
                  {renderImage(item.uri, item.name, item.description)}
               
      
            </Animated.View>
          
         
          )
        }
        else {
          return (
            <Animated.View
  
              key={item.id} style={[{
                opacity: this.nextCardOpacity,
                transform: [{ scale: this.nextCardScale }],
                height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
              }]}>
                {/* <Card style={{height:SCREEN_HEIGHT - 300, borderRadius:20}}> */}
              <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
                <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
  
              </Animated.View>
  
              <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
                <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
  
              </Animated.View>
            
              {/* <Image
                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
                source={item.uri} /> */}
              {/* </Card> */}
              {renderImage(item.uri, item.name, item.description)}
            </Animated.View>
            
          )
        }
      }).reverse()
    }
  
    render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ height: 60 }}>
  
          </View>
          <View style={{ flex: 1 }}>
            {this.renderUsers()}
          </View>
          <View style={{ height: 30 }}>
  
          </View>
  
  
        </View>
  
      );
    }
  }