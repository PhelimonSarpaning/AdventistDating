import {Animated, Image, SafeAreaView,StyleSheet, View, Alert} from 'react-native';
import React, {useState} from 'react';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './VerificationCode.styles';
import { useNavigationState } from '@react-navigation/core';
import Block from '../../components/Block/Block';
import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';
import {sizes, colors} from '../../constants/theme';

const { Value, Text: AnimatedText} = Animated;

const showAlert  = (value) => {
//     if(value !== ''){
//     Alert.alert(
//         'Verification Successful'
//     )
//    }
//NavigationPreloadManager.
}

const CELL_COUNT = 4;
const source = {
  uri:
    'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const VerificationCode = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={thisStyles.signup}>
      <Block middle style={{backgroundColor:'white'}}>
      <Text h1 bold center primary>
        Verification
      </Text>
      <Image style={styles.icon} source={source} />
      <Text h3 gray2  center style={{ marginTop: sizes.padding / 2 }}>
      Please enter the verification code{'\n'}
      we sent to your number 'put number here'
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={renderCell}
      />

      <Button onPress={() => navigation.navigate("Login")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Resend Code
              </Text>
            </Button>
      
      <Button style={{paddingHorizontal:50}} gradient onPress={() => navigation.navigate('TabNavigator')}>
              {/* {this.state.loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : ( */}
                <Text bold white center>
                  Verify
                </Text>
              {/* )} */}
            </Button>
      </Block>
      </SafeAreaView>
  );
};

export default VerificationCode;

const thisStyles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'white'
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: colors.accent
  }
});