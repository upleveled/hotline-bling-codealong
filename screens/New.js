import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';
import Screen from '../components/Screen';
import { addData } from '../util/storage';

export default function New() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');

  const save = async () => {
    await addData({ title });
    navigation.goBack();
  };
  return (
    <Screen>
      <Header label="Which guest would you like to add to the list?" />
      <Container fill>
        <ScrollView style={{ flex: 1 }}>
          <Container>
            <Input
              value={title}
              onChangeText={(text) => setTitle(text)}
              placeholder="Guest name"
            />
          </Container>
        </ScrollView>
      </Container>
      <Container>
        <Button label="Save" disabled={title === ''} onPress={() => save()} />
      </Container>
    </Screen>
  );
}
