import { Stack } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";
import LottieView from 'lottie-react-native';
import { useRef } from "react";
import Animated, { BounceIn, BounceOut, FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';

const AnimatedLottieView=Animated.createAnimatedComponent(LottieView);

export default function Splash() {

    const animation = useRef<LottieView>(null);
    

    return (
        <Animated.View entering={FadeIn.duration(1000)} exiting={FadeOut} style={styles.container}>

            <Stack.Screen options={{ headerShown: false }} />

            {/* <Text style={styles.text}>Facebook</Text> */}

            <AnimatedLottieView
                exiting={ZoomIn.duration(500)}
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





        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: "center",
        backgroundColor: 'black'
    },

    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 50,


    }


})