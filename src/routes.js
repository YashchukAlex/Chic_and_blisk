import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationServices from './navigationServices';

import SlidingUpPanel from '../src/components/SlidingUpPanel';

import SplashScreen from '../src/screens/splash';
import CardScreen from './screens/card';
import SectionScreen from './screens/section';
import SectionDetailsScreen from './screens/sectionDetails';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <>
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Card" component={CardScreen} />
      <HomeStack.Screen name="Section2" component={SectionScreen} />
      <HomeStack.Screen name="Section3" component={SectionScreen} />
      <HomeStack.Screen name="Section4" component={SectionScreen} />
      <HomeStack.Screen name="Section5" component={SectionScreen} />
      <HomeStack.Screen name="Section6" component={SectionScreen} />
      <HomeStack.Screen name="Section7" component={SectionScreen} />
      <HomeStack.Screen name="SectionDetails" component={SectionDetailsScreen} />
    </HomeStack.Navigator>
  </>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen animating={isLoading} />;
  }

  return (
    <>
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationServices.setTopLevelNavigator(navigatorRef);
        }}
      >
        <HomeStackScreen />
        {!isLoading && <SlidingUpPanel />}
      </NavigationContainer>
    </>
  );
};
