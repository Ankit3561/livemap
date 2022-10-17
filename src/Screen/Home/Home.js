import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../../utlis/Colors'

const Home = () => {
    let name='Arun'
    let profession='Developer'
    let age=30
    const checkMail=(mail)=>{
        let regx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(regx.test(mail))
        {
            alert("Valid mail")
        }
        else
        {
            alert("wrong mail")

        }
    }
  return (
    <View style={{flex:1}}>
      <Text style={{backgroundColor:Colors.khaki}}>Home</Text>
      <Text>my name is {name} and my profession is {profession}. i am {age} years old</Text>
      <Text> {`my name is ${name} and my profession is ${profession}. i am ${age} years old`}</Text>
      <TouchableOpacity onPress={()=>checkMail('arun@s.ss')} >
        <Text>Check valid Email</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})