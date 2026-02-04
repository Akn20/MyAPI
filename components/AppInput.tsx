import { TextInput } from 'react-native';
import styles from '../styles/appStyles';

const AppInput = (props: any) => (
  <TextInput style={styles.input} {...props} />
);

export default AppInput;
