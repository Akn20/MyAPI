import { Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppHeader from '../components/AppHeader';
import styles from '../styles/appStyles';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppHeader title="Profile" />

      <View style={styles.center}>
        <Text style={[styles.profileName, { textAlign: 'center' }]}>
          Name: Wang Li
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Email: Wangli@gmail.com
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Mobile: 9996786745
        </Text>

        <AppButton title="Edit Profile" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileScreen;
