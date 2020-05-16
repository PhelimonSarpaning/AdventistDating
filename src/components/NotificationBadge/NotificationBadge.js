import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Badge } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import IconBadge from 'react-native-icon-badge';
import {sizes, colors} from '../../constants/theme';

const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18
  },
  badgeContainer: {
    position: "absolute"
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0
  }
});

  class NotificationBadge extends React.Component {
      constructor(props){
          super(props);
          this.state={
              badgeCount:1
          }

      }
    render() {
      return (
        <View>
           <IconBadge
    MainElement={
      <View>
           <Icon name="md-notifications" size={35} color={colors.primary} style={{marginRight:-25}} />
      </View>
    }
    BadgeElement={
      <Text style={{color:'#FFFFFF'}}>{this.state.badgeCount}</Text>
    }
    IconBadgeStyle={
      {width:-50,
      height:20,
      backgroundColor: '#FF00EE',
      marginRight:-30

    }
    }
    Hidden={this.state.badgeCount === 0}
    />
               
        </View>
      );
    }
  };

export default NotificationBadge;