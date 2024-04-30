/**
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';
import Header from './components/Header';
import { StyledImage, StyledSafeAreaView } from './components/StyledComponents';
import Features from './components/Features';
import ProgressIndicator from './components/ProgressIndicator';
import AppButton from './components/AppButton';
import AppLineButton from './components/AppLineButton';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const wallet = require('./images/wallet.png');
  return (
    <StyledSafeAreaView className="bg-orange-50 flex flex-col flex-1 items-center">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Header header="Upload a 6 month M-Pesa Statement" />
          <StyledImage
            source={wallet}
            className="mx-auto mt-12"
          />
          <Features />
          <ProgressIndicator step={1} length={3} />
          <AppButton title='Continue' onPress={() => console.log('continue here')} />
          <AppLineButton title='Back to Login' onPress={() => console.log('continue here')} />
        </View>
      </ScrollView>
    </StyledSafeAreaView>
  );
}

export default App;
