import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const inputStyles = StyleSheet.create({
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});

export default function Input(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={(text) => props.onChangeText(text)}
      value={props.value}
      style={inputStyles.input}
    />
  );
}
