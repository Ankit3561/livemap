import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';
const Singup = ({navigation}) => {
  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  const [isSelected, setSelection] = useState(false);
  const image = {
    uri: 'https://www.foodforward.in/system/posts/cover_photos/000/000/038/header/IMG-20210508-WA0021.jpg?1620889845',
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{height: '100%', justifyContent: 'center'}}
        source={image}
        resizeMode="cover"
        blurRadius={8}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 12,
            opacity: 0.5,
            marginHorizontal: 20,
            borderRadius: 5,
          }}>
          <ScrollView>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={navigateLogin}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    color: 'black',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 30,
                  color: 'black',
                }}>
              Sign Up
              </Text>
            </View>
            <Text style={{fontWeight: 'bold', color: 'black', margin: 8}}>
              Name
            </Text>
            <TextInput
              type="text"
              //   onBlur={onBlur}
              // onChangeText={onChange}
              // value={value}
              style={{
                borderWidth: 0.5,

                color: 'black',
                padding: 15,
                marginTop: 2,
                borderRadius: 3,
              }}
              size="2xl"
              mx="5"
              autoCapitalize="none"
              placeholder="Name"
              keyboardType="email-address"
            />
            <Text style={{fontWeight: 'bold', color: 'black', margin: 8}}>
              Email
            </Text>
            <TextInput
              type="text"
              //   onBlur={onBlur}
              // onChangeText={onChange}
              // value={value}
              style={{
                borderWidth: 0.5,

                color: 'black',
                padding: 15,
                marginTop: 2,
                borderRadius: 3,
              }}
              size="2xl"
              mx="5"
              autoCapitalize="none"
              placeholder="Anb@gmail.com"
              keyboardType="email-address"
            />
            <Text style={{fontWeight: 'bold', color: 'black', margin: 8}}>
              Address
            </Text>
            <TextInput
              type="text"
              //   onBlur={onBlur}
              // onChangeText={onChange}
              // value={value}
              style={{
                borderWidth: 0.5,

                color: 'black',
                padding: 15,
                marginTop: 2,
                borderRadius: 3,
              }}
              size="2xl"
              mx="5"
              autoCapitalize="none"
              placeholder="Location"
              keyboardType="email-address"
            />
            <Text style={{fontWeight: 'bold', color: 'black', margin: 8}}>
              Phone Number
            </Text>
            <TextInput
              type="text"
              //   onBlur={onBlur}
              // onChangeText={onChange}
              // value={value}
              style={{
                borderWidth: 0.5,

                color: 'black',
                padding: 15,
                marginTop: 2,
                borderRadius: 3,
              }}
              size="2xl"
              mx="5"
              autoCapitalize="none"
              placeholder="Number"
              keyboardType="numeric"
            />
            <Text style={{fontWeight: 'bold', color: 'black', margin: 8}}>
              Password
            </Text>
            <TextInput
              type="text"
              //   onBlur={onBlur}
              // onChangeText={onChange}
              // value={value}
              style={{
                borderWidth: 0.5,

                color: 'black',
                padding: 15,
                marginTop: 2,
                borderRadius: 3,
              }}
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
                marginVertical: 8,
              }}>
              <CheckBox
                color="black"
                value={isSelected}
                onValueChange={setSelection}
              />
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                I accept the Terms of Use & Privacy Policy.
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: 4, marginVertical: 3}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>
                I am already a member?
              </Text>
              <TouchableOpacity onPress={navigateLogin}>
                <Text style={{fontWeight: 'bold',color:"blue",marginLeft:5}}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
            onPress={()=>{navigation.navigate("BottamNavigation")}}
              style={{
                backgroundColor: isSelected ? '#FF7F50' : '#FF6347',
                alignSelf: 'flex-end',
                marginTop: 10,
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
                Sign Up
              </Text>
            </TouchableOpacity>
            {/* <Icon name="eye" size={40} /> */}
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Singup;

const styles = StyleSheet.create({});
