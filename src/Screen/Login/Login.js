import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import CheckBox from '@react-native-community/checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
import style from './style';
const Login = ({navigation}) => {
  const image = {
    uri: 'https://www.foodforward.in/system/posts/cover_photos/000/000/038/header/IMG-20210508-WA0021.jpg?1620889845',
  };
  const [isSelected, setSelection] = useState(false);

  const navigateSingup = () => {
    navigation.navigate('Singup');
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={style.imageContaine}
        source={image}
        resizeMode="cover"
        blurRadius={8}>
        <View style={style.borderStyle}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={style.Login}>Login</Text>
            <TouchableOpacity onPress={navigateSingup}>
              <Text style={style.singUp}> Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text style={style.firstInput}>Email</Text>
          <TextInput
            type="text"
            //   onBlur={onBlur}
            // onChangeText={onChange}
            // value={value}
            style={style.firstText}
            size="2xl"
            mx="5"
            autoCapitalize="none"
            placeholder="Anb@gmail.com"
            keyboardType="email-address"
          />
          <Text style={style.firstInput}>Password</Text>
          <TextInput
            type="text"
            //   onBlur={onBlur}
            // onChangeText={onChange}
            // value={value}
            style={style.secondText}
            size="2xl"
            mx="5"
            autoCapitalize="none"
            placeholder="Password"
            keyboardType="password"
            secureTextEntry={true}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 6,
            }}>
            <CheckBox
              color="black"
              value={isSelected}
              onValueChange={setSelection}
            />
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Remember Me
            </Text>
            {/* <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text> */}
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={navigateSingup}
              style={{
                borderBottomColor: 'blue',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  color: 'blue',
                  justifyContent: 'center',
                }}>
                Create new Account
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={()=>{navigation.navigate("BottamNavigation")}}
              style={{
                backgroundColor: isSelected ? '#FF7F50' : '#FF6347',

                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
              }}>
              <Text
                style={{
                  padding: 5,
                  color: 'black',
                  fontWeight: 'bold',
                  margin: 5,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Icon name="eye" size={40} /> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
