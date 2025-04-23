import { Link } from 'expo-router';
import { Text, View, StyleSheet, Pressable } from 'react-native';

type DayListItem = {
    day: number
};

export default function DayListItem({ day }: DayListItem) {

    return (
        <Link href={`/day${day}`} asChild>
            <Pressable style={styles.box} >
                <Text style={styles.text}>{day}</Text>

            </Pressable>
        </Link>

    );
}

const styles = StyleSheet.create({






    box: {
        backgroundColor: "#F9EdE3",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#9b4521",
        borderRadius: 20,
        aspectRatio: 1


    },

    text: {
        color: '#9b4521',
        fontSize: 70,
        fontFamily: 'AmaticBold'
    }
});