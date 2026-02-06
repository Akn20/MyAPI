import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DogImageScreen from '../../screens/DogImageScreen';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import MovieScreen from '../../screens/MovieScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import RegisterScreen from '../../screens/RegisterScreen';
/*import SplashScreen from '../../screens/SplashScreen';*/
import App from '@/screens/App';
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/*  <Stack.Screen name="Splash" component={SplashScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="DogImage" component={DogImageScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="App" component={App} />
    </Stack.Navigator>
    
  );
}
