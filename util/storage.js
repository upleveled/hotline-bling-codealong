import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@hotline-bling/items';

export async function storeData(value) {
  try {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, json);
  } catch (error) {
    console.log(error);
  }
}

export async function getData() {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json === null) return null;
    return JSON.parse(json);
  } catch (error) {
    console.log(error);
  }
}

export async function addData(value) {
  let data = [];
  const existing = await getData();
  if (existing) data = [...existing];
  data.push(value);
  await storeData(data);
}
