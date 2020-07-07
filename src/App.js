/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import NavigationContainer from '../src/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer />
    </>
  );
};

export default App;
