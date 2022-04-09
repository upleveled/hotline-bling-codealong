import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const headerStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#000000',
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 20,
  },
  label: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function Header(props) {
  return (
    <SafeAreaView style={headerStyles.safeAreaView}>
      <View style={headerStyles.wrapper} testID="HeaderView">
        <Text style={headerStyles.label}>{props.label}</Text>
      </View>
    </SafeAreaView>
  );
}
