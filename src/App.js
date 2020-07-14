/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import NavigationContainer from '../src/routes';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.topSpacingApp}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  topSpacingApp: {
    flex: 1,
    backgroundColor: '#47233A',
    paddingTop: getStatusBarHeight(),
  },
});
