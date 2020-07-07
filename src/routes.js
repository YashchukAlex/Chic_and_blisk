import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SlidingUpPanel from './components/SlidingUpPanel';

import SplashScreen from '../src/screens/splash';
import CardScreen from '../src/screens/main';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="Card" component={CardScreen} />
  </HomeStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  // const navigation = useNavigation();

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
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
      <SlidingUpPanel />
    </>
  );
};
