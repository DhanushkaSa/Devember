import { Link, Stack } from "expo-router";
import { View, Text, Button } from "react-native";

export default function index() {
    return (

        <View>
            <Stack.Screen options={{ title: "Voice Memos" }} />
            <Text>Voice Memos App</Text>
            <Link href="/day6/voiceMemos" asChild>
                <Button title="Go to Voice Memos" />

            </Link>
        </View>
    )
}