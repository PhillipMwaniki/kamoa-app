/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';
import Header from './components/Header';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView className="bg-orange-50 flex flex-col flex-1 items-center">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Header header="Upload a 6 month M-Pesa Statement" />
          <Image
            source={require('./images/wallet.png')}
            className="mx-auto mt-12"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
