import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import Home from './screens/Home';
import New from './screens/New';

const Stack = createNativeStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
    <Fragment>
      <StatusBar backgroundColor="#000000" translucent={true} style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="New" component={New} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
