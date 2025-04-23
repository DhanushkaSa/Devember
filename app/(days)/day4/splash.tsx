import { Stack } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";
import LottieView from 'lottie-react-native';
import { useRef } from "react";


export default function Splash() {

    const animation = useRef<LottieView>(null);

    return (
        <View style={styles.container}>

            <Stack.Screen options={{ headerShown: false }} />

            <Text style={styles.text}>Facebook</Text>

            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: '80%',
                    height: '80%',
                    // backgroundColor: '#eee',
                    alignSelf: "center"
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('@assets/lottie/social.json')}

            />





        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        backgroundColor: 'black'
    },

    text: {
        color: 'blue',
        alignSelf: 'center',
        fontSize: 50,


    }


})