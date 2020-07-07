import React from 'react';
import { StyleSheet, View, Platform, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import Swiper from 'react-native-swiper';
import NavigationServices from '../navigationServices';
import { changeBottomRangeMenu } from '../components/SlidingUpPanel';

const { height, width } = Dimensions.get('window');

import info from '../../assets/info.svg';
import opacityFlower from '../../assets/opacityFlower.svg';

export default () => {
  const { params } = useRoute();
  const headerHeight = Platform.OS === 'ios' ? 100 : 120;
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.header, { height: headerHeight }]}>
          <SvgXml xml={info} width={30} height={30} style={styles.iconInfo} />
          <Text numberOfLines={2} style={styles.headerText}>
            {params.title}
          </Text>
        </View>
        <View style={{ height: height - headerHeight - 100 }}>
          <Swiper
            style={styles.slider}
            dot={
              <View
                style={{
                  backgroundColor: '#C4C4C4',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#FF6600',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7,
                }}
              />
            }
            paginationStyle={{
              marginBottom: 20,
            }}
            on
            loop={false}
          >
            {subSections.map((item, index) => (
              <TouchableOpacity
                style={styles.slide}
                onPress={() => {
                  NavigationServices.navigate('SectionDetails', { title: item.name });
                  changeBottomRangeMenu(0);
                }}
                key={index}
              >
                <Text style={styles.slideText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </Swiper>
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

const subSections = [
  { name: 'Підрозділ 1' },
  { name: 'Підрозділ 2' },
  { name: 'Підрозділ 3' },
  { name: 'Підрозділ 4' },
  { name: 'Підрозділ 5' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47233A',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  slider: {
    backgroundColor: '#FFF1FA',
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  slideText: {
    fontSize: 14,
  },
  header: { alignItems: 'center', justifyContent: 'flex-start' },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 50,
  },
  iconInfo: { alignSelf: 'flex-end', marginRight: 20, marginTop: Platform.OS === 'android' ? 20 : 0 },
  backgroundFlower: {
    position: 'absolute',
    opacity: 0.5,
  },
  textSlider: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 10,
  },
});
