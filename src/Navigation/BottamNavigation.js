import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Constants from '../utlis/Constants';
import Colors from '../utlis/Colors';
import Home from '../Screen/Home/Home';
import Images from '../assest/imagePath/Images';
import About from '../Screen/About/About';
import Chat from '../Screen/Chat/Chat';
import Wallet from '../Screen/Wallet/Wallet';
import Grocery from '../Screen/Grocery/Grocery';

const Tab = createBottomTabNavigator();
const BottamNavigation = () => {
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
                  ? `${Colors.pinkRed}`
                  : `${Colors.lightBlack}`,
                }}
              />
            );
          },
        }}
      />
        <Tab.Screen
        name={'Chat'}
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.iconChat}
                style={{
                  height: 21,
                  width: 24,
                  tintColor: focused
                    ? `${Colors.pinkRed}`
                    : `${Colors.lightBlack}`,
                }}
              />
            );
          },
        }}
      />
         <Tab.Screen
        name={'Wallet'}
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.iconWallet}
                style={{
                  height: 21,
                  width: 24,
                  tintColor: focused
                    ? `${Colors.pinkRed}`
                    : `${Colors.lightBlack}`,
                }}
              />
            );
          },
        }}
      />
           <Tab.Screen
        name={'Grocery'}
        component={Grocery}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={Images.iconGrocery}
                style={{
                  height: 25,
                  width: 24,
                  justifyContent:"center",
                  tintColor: focused
                    ? `${Colors.pinkRed}`
                    : `${Colors.lightBlack}`,
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
