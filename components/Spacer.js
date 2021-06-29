import React from 'react';
import { StyleSheet, View } from 'react-native';

const spacerStyles = StyleSheet.create({ spacer: { height: 25, width: 25 } });

export default function Spacer(props) {
  return <View style={spacerStyles.spacer} />;
}
