import React from 'react';
import { Dimensions, ActivityIndicator, StyleSheet, Platform, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { height, width } = Dimensions.get('window');

import logoSplashScreen from '../../assets/logoSplashScreen.svg';

export default (props) => {
  const { animating } = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} animating={animating} color="white" />
      <SvgXml xml={logoSplashScreen} width={width} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    backgroundColor: '#47233A',
    height: '100%',
  },
  logo: {
    position: 'absolute',
  },
});
