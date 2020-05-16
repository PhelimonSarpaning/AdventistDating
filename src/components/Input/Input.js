import React, { Component } from "react";
import { StyleSheet, TextInput} from "react-native";
import * as Icon from 'react-native-vector-icons';

import Text from '../Text/Text';
import Block from "../Block/Block";
import Button from '../Button/Button';
import { colors, sizes } from '../../constants/theme';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggleSecure: false
          };
    }
  

  renderLabel() {
    const { label, error } = this.props;

    return (
      <Block flex={false}>
        {label ? (
          <Text gray2={!error} accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }

  renderToggle() {
    const { secure, rightLabel } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}
      >
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon.Ionicons
            color={colors.gray}
            size={sizes.font * 1.35}
            name={!toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </Button>
    );
  }

  renderRight() {
    const { rightLabel, rightStyle, onRightPress } = this.props;

    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  render() {
    const { email, phone, number, secure, error, style, ...props } = this.props;

    const { toggleSecure } = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      error && { borderColor: colors.accent },
      style
    ];

    const inputType = email
      ? "email-address"
      : number
      ? "numeric"
      : phone
      ? "phone-pad"
      : "default";

    return (
      <Block flex={false} margin={[sizes.base, 0]}>
        {this.renderLabel()}
        <TextInput
          style={inputStyles}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
        {/*{this.renderToggle()} */}
         {this.renderRight()}
      </Block>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black,
    borderRadius: sizes.radius,
    fontSize: sizes.font,
    fontWeight: "500",
    color: colors.black,
    height: sizes.base * 3
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: sizes.base * 2,
    height: sizes.base * 2,
    top: sizes.base,
    right: 0
  }
});