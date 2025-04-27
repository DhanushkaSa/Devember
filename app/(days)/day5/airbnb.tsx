import { Stack } from "expo-router";
import { View } from "react-native";

export default function airbnbScreen() {
    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
        </View>
    )
}