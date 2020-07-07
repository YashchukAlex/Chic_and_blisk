import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { height, width } = Dimensions.get('window');

import logo from '../../assets/LogoCardScreen.svg';
import QR from '../../assets/QR.svg';
import background from '../../assets/background.svg';

export default () => {
  return (
    <>
      <SvgXml xml={background} width={width} height={height / 1.3} />
      <View style={styles.container}>
        <SvgXml width={width} xml={logo} />
        <View style={styles.cardContainer}>
          <SvgXml width={width / 1.75} xml={QR} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    marginTop: 30,
    position: 'absolute',
  },
});
