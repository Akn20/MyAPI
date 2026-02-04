import { Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import styles from '../styles/appStyles';

const RegisterScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <AppInput placeholder="Name" />
      <AppInput placeholder="Email / Mobile" />
      <AppInput placeholder="Password" secureTextEntry />
      <AppInput placeholder="Confirm Password" secureTextEntry />

      <AppButton
        title="Register"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  );
};

export default RegisterScreen;
