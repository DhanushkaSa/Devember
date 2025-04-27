import { Link, Stack } from "expo-router";
import { View, Text, Button } from "react-native";

export default function index() {
    return (
        <View>
            <Stack.Screen options={{ title: "Maps" }} />
            <Text>Aiirbnb Maps</Text>
            <Link href="/day5/airbnb" asChild>
                <Button title="Go to AIRBNB Maps" />
            </Link>
        </View>
    )
}