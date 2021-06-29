import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const guestStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  wrapperLast: {
    borderBottomWidth: 0,
  },
  image: {
    marginRight: 10,
    height: 50,
    width: 50,
  },
  title: { fontSize: 20, color: 'black', textAlign: 'left' },
});

export default function Guest(props) {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View
        style={[guestStyles.wrapper, props.isLast && guestStyles.wrapperLast]}
      >
        <Text style={guestStyles.title}>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
