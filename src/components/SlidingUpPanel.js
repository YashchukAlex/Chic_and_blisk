import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
const { height, width } = Dimensions.get('window');
import constantStyles from '../constantsStyles';
import IconArrowUp from '../../assets/Vector 3 (Stroke) Up.svg';
import iconArrowDown from '../../assets/Vector 3 (Stroke) Down.svg';

import SlidingUpPanel from 'rn-sliding-up-panel';

export default () => {
  const [arrow, changeArrow] = useState(IconArrowUp);
  const heightPanel = height / 2;
  return (
    <SlidingUpPanel
      //ref={(c) => (this._panel = c)}
      backdropOpacity={0}
      draggableRange={{ top: heightPanel, bottom: 100 }}
      height={heightPanel}
      onDragStart={(value) => {
        changeArrow(IconArrowUp);
      }}
      onMomentumDragEnd={(value) => {
        if (value > heightPanel - 10) {
          changeArrow(iconArrowDown);
        }
      }}
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
                  <View style={[styles.sectionItem, { backgroundColor: item.color }]}>
                    <Text style={styles.sectionItemText}>{item.name}</Text>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
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
  { name: 'Розділ 1', color: '#FFA3A3', notifications: 1 },
  { name: 'Розділ 2', color: '#FFC194', notifications: 0 },
  { name: 'Розділ 3', color: '#FDFF9A', notifications: 20 },
  { name: 'Розділ 4', color: '#C9FF9E', notifications: 999 },
  { name: 'Розділ 5', color: '#A5FAFF', notifications: 0 },
  { name: 'Розділ 6', color: '#98A2FD', notifications: 0 },
  { name: 'Розділ 7', color: '#E1A3FF', notifications: 0 },
];
