import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Dimensions, Platform, PanResponder, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import SoundPlayer from 'react-native-sound-player';

import NavigationServices from '../navigationServices';

const { height, width } = Dimensions.get('window');

import constantStyles from '../constantsStyles';
import IconArrowUp from '../../assets/Vector 3 (Stroke) Up.svg';
import iconArrowDown from '../../assets/Vector 3 (Stroke) Down.svg';

import SlidingUpPanel from 'rn-sliding-up-panel';

export let changeBottomRangeMenu = (number) => {};
export let refreshIconArrowMenu = () => {};

export let refSlidingUpPanel = null;

let panResponder = {};

export default (props) => {
  const _onGrant = () => {
    changeDragPanel(false);
    return true;
  };
  const _onRelease = () => {
    changeDragPanel(true);
  };
  const _refreshIconArrow = () => {
    changeArrow(IconArrowUp);
  };
  const [arrow, changeArrow] = useState(IconArrowUp);
  const [bottomRange, changeBottomRange] = useState(100);
  const [dragPanel, changeDragPanel] = useState(true);
  useEffect(() => {
    changeBottomRangeMenu = changeBottomRange.bind(this);
    refreshIconArrowMenu = _refreshIconArrow.bind(this);
    Platform.OS === 'ios' &&
      (panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: _onGrant.bind(this),
        onPanResponderRelease: _onRelease.bind(this),
        onPanResponderTerminate: _onRelease.bind(this),
      }));
  }, []);
  const heightPanel = height / 2;
  let firstRender = true;
  const _onViewableItemsChangedRef = useRef((viewableItems) => {
    try {
      !firstRender && SoundPlayer.playSoundFile('scroll2', '.mp3');
    } catch (e) {
      //console.log('cannot play the sound file', e);
    }
    firstRender = false;
  });
  return (
    <SlidingUpPanel
      ref={(c) => (refSlidingUpPanel = c)}
      allowDragging={Platform.OS === 'ios' ? dragPanel : true}
      backdropOpacity={0}
      draggableRange={{ top: heightPanel, bottom: bottomRange }}
      height={heightPanel}
      onDragEnd={(value) => {
        if (value < 120) {
          changeArrow(IconArrowUp);
        } else if (value > heightPanel - 20) {
          changeArrow(iconArrowDown);
        }
      }}
      onMomentumDragEnd={(value) => {
        if (value < 120) {
          changeArrow(IconArrowUp);
        } else if (value > heightPanel - 20) {
          changeArrow(iconArrowDown);
        }
      }}
      friction={0.1}
      children={(dragHandler) => (
        <View style={styles.container} {...dragHandler}>
          <SvgXml width={30} height={40} xml={arrow} />
          <FlatList
            data={sections}
            renderItem={({ item }) => {
              return (
                <View style={{ alignItems: 'flex-end' }}>
                  {item.notifications > 0 && (
                    <View style={styles.notification}>
                      <Text style={styles.notificationText}>{item.notifications}</Text>
                    </View>
                  )}
                  <TouchableOpacity
                    style={[styles.sectionItem, { backgroundColor: item.color }]}
                    onPress={() => {
                      //refreshIconArrowMenu();
                      //refSlidingUpPanel.hide();
                      NavigationServices.navigate(item.screen, { title: item.name });
                    }}
                  >
                    <Text style={styles.sectionItemText}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={_onViewableItemsChangedRef.current}
            {...panResponder.panHandlers}
          />
        </View>
      )}
    />
  );
};

const styles = {
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sectionItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: (width / 2.5) * 1.5,
    width: width / 2.5,
    backgroundColor: 'red',
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    zIndex: 0,
    ...constantStyles.defaultShadow,
  },
  sectionItemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dragHandler: {
    alignSelf: 'stretch',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  notification: {
    height: 30,
    borderRadius: 20,
    backgroundColor: '#FF6600',
    color: 'white',
    zIndex: 10,
    elevation: 10,
    position: 'absolute',
  },
  notificationText: {
    color: 'white',
    padding: 10,
    paddingTop: 2,
    fontSize: 20,
  },
};

const sections = [
  { name: 'Картка', color: '#FFA3A3', screen: 'Card', notifications: 1 },
  { name: 'Розділ 2', color: '#FFC194', screen: 'Section2', notifications: 0 },
  { name: 'Розділ 3', color: '#FDFF9A', screen: 'Section3', notifications: 20 },
  { name: 'Розділ 4', color: '#C9FF9E', screen: 'Section4', notifications: 999 },
  { name: 'Розділ 5', color: '#A5FAFF', screen: 'Section5', notifications: 0 },
  { name: 'Розділ 6', color: '#98A2FD', screen: 'Section6', notifications: 0 },
  { name: 'Розділ 7', color: '#E1A3FF', screen: 'Section7', notifications: 0 },
];
