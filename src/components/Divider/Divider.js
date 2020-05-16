import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from "../Block/Block";
import { colors, sizes } from "../../constants/theme";

export default class Divider extends Component {
  render() {
    const { color, style, ...props } = this.props;
    const dividerStyles = [styles.divider, style];

    return (
      <Block
        color={color || colors.gray2}
        style={dividerStyles}
        {...props}
      />
    );
  }
}

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    margin: sizes.base * 2,
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});