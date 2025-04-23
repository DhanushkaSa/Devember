import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: " Day 02 Onboarding" }} />
      <Text>Onboarding Screen</Text>
      <Link href="/day2/onboarding" asChild>
        <Button title="On Boarding" />
      
      </Link>
      

    </View>
  )
}

export default index