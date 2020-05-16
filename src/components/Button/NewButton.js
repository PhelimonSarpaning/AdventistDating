import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";


class NewButton extends Component {
  render() {
    const {
      children,
      ...props
    } = this.props;

    return (
      <TouchableOpacity
        style={newButton}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }
}


export default NewButton;

const styles = StyleSheet.create({
  newButton: {
    position: 'absolute',
    top: 712,
    left: 123,
    width: 130,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#71fcc6',
  },
});