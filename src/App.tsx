/**
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { StyledSafeAreaView } from './components/StyledComponents';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StyledSafeAreaView className="bg-orange-50 flex flex-col flex-1 items-center">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HomeScreen />
      </ScrollView>
    </StyledSafeAreaView>
  );
}

export default App;
