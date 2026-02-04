import { Pressable, Text } from 'react-native';
import styles from '../styles/appStyles';

const AppButton = ({ title, onPress }: any) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
);

export default AppButton;
