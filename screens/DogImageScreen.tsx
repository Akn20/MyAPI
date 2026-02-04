import { useState } from 'react';
import { Alert, Image, View } from 'react-native';
import AppButton from '../components/AppButton';
import { getRandomDogImage } from '../services/dogApi';
import styles from '../styles/appStyles';

const DogImageScreen = () => {
  const [dogImage, setDogImage] = useState<string | null>(null);

  const loadDogImage = async () => {
    try {
      const data = await getRandomDogImage();
      setDogImage(data.message);
    } catch {
      Alert.alert('Error', 'Unable to load dog image');
    }
  };

  return (
    <View style={styles.container}>
      <AppButton title="Click here" onPress={loadDogImage} />
      {dogImage && <Image source={{ uri: dogImage }} style={styles.dogImage} />}
    </View>
  );
};

export default DogImageScreen;
