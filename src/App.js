/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import SlidingUpPanel from './components/SlidingUpPanel';
import MainScreen from './screens/main';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <SafeAreaView /> */}
      <MainScreen />
      <SlidingUpPanel />
    </>
  );
};

export default App;
