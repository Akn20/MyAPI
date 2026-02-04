import { Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import styles from '../styles/appStyles';

const LoginScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <AppInput placeholder="Email / Mobile" />
    <AppInput placeholder="Password" secureTextEntry />
    <AppButton title="Login" onPress={() => navigation.replace('Home')} />
  </View>
);

export default LoginScreen;
