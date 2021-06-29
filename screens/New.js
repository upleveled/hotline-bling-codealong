import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
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
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setImage(pickerResult.uri);
  };

  const save = async () => {
    await addData({ title, image });
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
              placeholder={'Guest name'}
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
