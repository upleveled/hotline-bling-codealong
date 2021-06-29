import React from 'react';
import { StyleSheet, View } from 'react-native';

const screenStyles = StyleSheet.create({
  screen: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  screenFill: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function Screen(props) {
  return (
    <View style={props.fill ? screenStyles.screenFill : screenStyles.screen}>
      {props.children}
    </View>
  );
}
