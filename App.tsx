import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Home from './screens/Home';
import Carousel from './screens/Carousel';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Carousel" component={Carousel} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
