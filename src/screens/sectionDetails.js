import React, { useCallback } from 'react';
import { StyleSheet, View, Platform, Dimensions, Text, TouchableWithoutFeedback } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import { refSlidingUpPanel, changeBottomRangeMenu } from '../components/SlidingUpPanel';
import NavigationServices from '../navigationServices';

const { height, width } = Dimensions.get('window');

import closeIcon from '../../assets/close.svg';

export default () => {
  const { params } = useRoute();
  useFocusEffect(
    useCallback(() => {
      refSlidingUpPanel.hide();
      return () => {
        changeBottomRangeMenu(100);
      };
    }, [])
  );
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <>
      <View style={styles.topBar}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => NavigationServices.goBack()}>
            <SvgXml width={30} height={30} xml={closeIcon} style={styles.icon} />
          </TouchableWithoutFeedback>
          <Text style={styles.title}>{params.title}</Text>
          <GestureRecognizer
            onSwipeDown={() => NavigationServices.goBack()}
            config={config}
            style={{
              position: 'absolute',
              backgroundColor: '#FFF1FA',
              height: height / 3,
              width: width,
              bottom: 0,
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    backgroundColor: '#47233A',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF1FA',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  icon: {
    alignSelf: 'flex-end',
    margin: 15,
  },
});
