import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { title } from 'process'

const DayDetailsScreen = () => {
  return (

    <View>
      <Stack.Screen options={{ title: "Day 01" }} />
      <Text style={{fontFamily:"AmaticBold",fontSize:100}}>Day Details Screen</Text>
    </View>

  )
}

export default DayDetailsScreen