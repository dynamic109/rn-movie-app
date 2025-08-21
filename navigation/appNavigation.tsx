import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import '../global.css';
import MovieScreen from 'screens/movie-screen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Movie: { id: number };
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{ headerShown: false }} component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
