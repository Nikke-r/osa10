import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../themes';

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    error && styles.errorBorder
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;