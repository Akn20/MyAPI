import { View } from 'react-native';
import AppButton from '../components/AppButton';
import AppHeader from '../components/AppHeader';
import styles from '../styles/appStyles';

const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1 }}>
    <AppHeader title="Welcome, User" />
    <View style={styles.menu}>
      <AppButton title="Profile" onPress={() => navigation.navigate('Profile')} />
      <AppButton title="Settings" onPress={() => {}} />
      <AppButton title="About" onPress={() => {}} />
      <AppButton title="Dog Image" onPress={() => navigation.navigate('DogImage')} />
        <AppButton title="Movie" onPress={() => navigation.navigate('Movie')} />

      <AppButton title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  </View>
);

export default HomeScreen;
