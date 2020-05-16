import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, CardItem, Body, Text, Left, Title, Subtitle, Right} from 'native-base';
import { white } from 'color-name';



class CardList extends Component{
    constructor(props){
        super(props);
    }
up =() =>{
    return(
        
            <Text style={styles.UpSquare}>
          UP 
       </Text>
        
       
    )
}
    render(){
        const data = this.props.data;
        return(
        <ScrollView style={{backgroundColor:'#f9f9f7'}}>
            {data.map(item => 
         <Card style={{borderRadius:50}} key={item.id}>
            <CardItem>
              <Left>
                <View style={{alignItems:'flex-start',}}>
                    <Title>Amazon</Title>
                    <Subtitle>{item.symbol}</Subtitle>
                </View>
              </Left>
              <Right>
              <View style={{alignItems:'flex-end',}}>
                    <Subtitle style={{paddingBottom:10}}>$180.74</Subtitle>
                    <Subtitle>{this.up()} <Text style={{color:'#0dc597'}}>0.37%</Text> </Subtitle>
                </View>
              </Right>
            </CardItem>
            </Card>)}
          </ScrollView>
        );
    }
}

export default CardList;

const styles = StyleSheet.create({
  UpSquare:{
      width: 50 * 2,
      height:15,
      borderRadius:1,
      justifyContent:'center',
      textAlign:'center',
      color:'white',
      backgroundColor:'#0dc597',
      fontSize:15,

  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
