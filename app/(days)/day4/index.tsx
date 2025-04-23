import { Link, Stack } from "expo-router";
import { View, Text, Button } from "react-native";

export default function SplashScreen() {
    return (
        <View>
            <Stack.Screen options={{ title: "Splash Screen" }} />
            <Text>Flash Screen</Text>
            <Link href="/day4/splash" asChild>
                <Button title="Go to Splash Screen" />
            </Link>
        </View>
    )
}