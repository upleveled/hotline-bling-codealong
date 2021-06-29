import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import Guest from '../components/Guest';
import Header from '../components/Header';
import Screen from '../components/Screen';
import { getData } from '../util/storage';

export default function Home() {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useFocusEffect(() => {
    getData().then((data) => {
      if (data) setItems(data);
    });
  });
  return (
    <Screen>
      <Header label="Guest List" />
      <Container fill>
        {items.length > 0 && (
          <ScrollView style={{ flex: 1 }}>
            <Container>
              {items.map((item, index) => (
                <Guest
                  key={index}
                  item={item}
                  isLast={index === items.length - 1}
                />
              ))}
            </Container>
          </ScrollView>
        )}
      </Container>
      <Container>
        <Button
          label="Add Guest"
          onPress={() => {
            navigation.navigate('New');
          }}
        />
      </Container>
    </Screen>
  );
}
