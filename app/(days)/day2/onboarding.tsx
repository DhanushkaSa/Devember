
import { Link, router, Stack } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { BounceIn, BounceInLeft, BounceInRight, BounceOut, FadeIn, FadeOut, SlideInLeft, SlideInRight } from 'react-native-reanimated';







const onboardingSteps = [
    {
        icon: 'snowflake',
        title: 'Welcome #DEVember',
        description: 'Daily React Native tutorials during December',

    },
    {
        icon: 'people-arrows',
        title: 'Learn and grow together',
        description: 'Learn by building 24 projects with React Native and Expo',

    },
    {
        icon: 'cart-arrow-down',
        title: 'Education for Children',
        description: 'Contribute to the fundraiser "Education for Children" to help Save the Children in their effort of providing education to every child',

    }
];

export default function OnBoardingScreen() {

    const [screenIndex, setScreenIndex] = useState(0);
    const data = onboardingSteps[screenIndex];



    const onContinue = () => {

        const isSetLastScreen = screenIndex == onboardingSteps.length - 1;
        if (isSetLastScreen) {
            onBackScreen();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    };

    const onBack = () => {

        const isSetLastScreen = screenIndex == 0;
        if (isSetLastScreen) {
            onBackScreen();
        } else {
            setScreenIndex(screenIndex - 1);
        }
    };







    const onBackScreen = () => {
        setScreenIndex(0);
        router.back();
    }



    const composed = Gesture.Race(Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue), Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack));


    return (
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <GestureDetector gesture={composed}>
                <View style={styles.pageContent} key={screenIndex}>
                    <StatusBar style="light" />
                    <View style={styles.stepIndicatorContainer}>
                        {
                            onboardingSteps.map((steps, index) => (
                                <View key={index} style={[styles.stepIndicator,
                                { backgroundColor: index == screenIndex ? "white" : "gray" }
                                ]} />
                            ))
                        }




                    </View>
                    <Animated.View entering={FadeIn} exiting={FadeOut}>
                        <FontAwesome5 name={data.icon} size={150} color="#CEF202" style={styles.image} />

                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text style={styles.title} entering={SlideInLeft.duration(1000)}  >{data.title}</Animated.Text>

                        <Animated.Text style={styles.description} entering={SlideInLeft.delay(500)} >{data.description}</Animated.Text>
                    </View>

                    <View style={styles.buttonRow}>

                        <Text style={styles.buttonText} onPress={onBackScreen}>Skip</Text>




                        <Pressable style={styles.button} onPress={onContinue}>

                            <Text style={styles.buttonText}>Continue</Text>
                        </Pressable>


                    </View>

                </View>
            </GestureDetector>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#15141A",

    },

    pageContent: {
        padding: 20,
        flex: 1,
    },

    image: {
        alignSelf: "center",
        // margin: 20,
        marginTop: 80
    },
    title: {
        color: "#FDFDFD",
        fontSize: 50,
        fontFamily: "Inter",
        letterSpacing: 1,
        marginVertical: 20

    },

    description: {
        fontSize: 18,
        color: "gray",
        fontFamily: "InterSemi",
        marginTop: 10,
        lineHeight: 30
    },

    footer: {
        marginTop: "auto"
    },

    buttonRow: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    button: {
        backgroundColor: "#302E38",
        padding: 10,
        alignItems: "center",
        borderRadius: 50,
        flex: 1
    },

    buttonText: {
        fontSize: 20,
        color: "#FDFDFD",
        fontFamily: "InterSemi",
        paddingHorizontal: 20
    },

    stepIndicatorContainer: {
        flexDirection: "row",

    },

    stepIndicator: {
        flex: 1,
        height: 5,
        backgroundColor: "gray",
        margin: 5,
        borderRadius: 20


    }
});