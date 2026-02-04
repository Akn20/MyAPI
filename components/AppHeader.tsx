import { Text, View } from 'react-native';
import styles from '../styles/appStyles';

const AppHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

export default AppHeader;
