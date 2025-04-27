import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function airbnb() {
    return (
        <View>
            <Stack.Screen options={{ title: "Maps" }} />
            <Text>Airbnb Maps</Text>
        </View>
    )
}