import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Constants from '../utlis/Constants';
import Colors from '../utlis/Colors';
import Home from '../Screen/Home/Home';
import Images from '../assest/imagePath/Images';

const Tab = createBottomTabNavigator();
const BottamNavigation = ({Navigator}) => {
  return (
    <Tab.Navigator
      initialRouteName={Constants.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.red,
        tabBarInactiveTintColor: Colors.gray,
        tabBarShowLabel: false,
        showLabel: false,
        tabBarStyle: {
          borderRadius: 50,
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 16,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.iconHome}
                style={{
                  height: 21,
                  width: 24,
                  tintColor: focused
                    ? `${Colors.lightRed}`
                    : `${Colors.lightYellow}`,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottamNavigation;

const styles = StyleSheet.create({});
