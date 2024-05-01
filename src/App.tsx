import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from 'src/screens/HomeScreen';
import UploadMpesaStatementScreen from 'src/screens/UploadMpesaStatementScreen';
import GrantPermissionScreen from 'src/screens/GrantPermissionScreen';
import EndWizard from 'src/screens/EndWizard';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UploadMpesaStatementScreen" component={UploadMpesaStatementScreen} />
          <Stack.Screen name="GrantPermissionScreen" component={GrantPermissionScreen} />
          <Stack.Screen name="EndWizard" component={EndWizard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
