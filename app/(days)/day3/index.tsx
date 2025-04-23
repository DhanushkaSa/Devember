import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const index = () => {
    return (
        <View>
            <Stack.Screen options={{ title: " Day 03 Markdown"}} />
            <Text>Markdown Screen</Text>
            <Link href="/day3/editor" asChild>
                <Button title="Go to editor" />

            </Link>


        </View>
    )
}

export default index