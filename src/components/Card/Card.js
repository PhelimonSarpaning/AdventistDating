import React, { Component } from "react";
import { StyleSheet } from "react-native";

import Block from '../Block/Block';
import { sizes, colors } from '../../constants/theme';

export default class Card extends Component {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <Block color={color || colors.white} style={cardStyles} {...props}>
        {children}
      </Block>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: sizes.border,
    padding: sizes.base + 4,
    marginBottom: sizes.base
  },
  shadow: {
    shadowColor: colors.black,
    shadowOpacity: 0.11,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 13
  }
});