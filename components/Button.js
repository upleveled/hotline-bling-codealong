import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const buttonStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  wrapperDisabled: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default function Button(props) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      underlayColor="#000000"
      onPress={() => props.onPress()}
      style={
        props.disabled ? buttonStyles.wrapperDisabled : buttonStyles.wrapper
      }
    >
      <Text style={buttonStyles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
}
