import React from 'react';
import { StyleSheet, View, Platform, Dimensions, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { height, width } = Dimensions.get('window');

import logo from '../../assets/LogoCardScreen.svg';
import QR from '../../assets/QR.svg';
import opacityFlower from '../../assets/opacityFlower.svg';

export default () => {
  return (
    <>
      <View style={styles.container}>
        <SvgXml width={width} height={height * 0.1} xml={logo} />
        <View style={styles.cardContainer}>
          <SvgXml width={width / 1.75} xml={QR} />
          <Text style={styles.textCard}>№ 95515465464846</Text>
          <Text style={styles.text}>Номер бонусної картки</Text>
        </View>
      </View>
      <SvgXml
        xml={opacityFlower}
        width={width / 1.3}
        height={height / 1.3}
        style={[styles.backgroundFlower, { alignSelf: 'flex-end', top: -100, right: -40 }]}
      />
      <SvgXml
        xml={opacityFlower}
        width={width / 1.3}
        height={height / 1.3}
        style={[styles.backgroundFlower, { alignSelf: 'flex-start', bottom: -100, left: -40 }]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: '#47233A',
    paddingTop: Platform.OS === 'ios' ? height * 0.08 + 30 : height * 0.08,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    marginTop: 30,
    alignItems: 'center',
  },
  backgroundFlower: {
    position: 'absolute',
    opacity: 0.5,
  },
  textCard: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 5,
  },
});
