import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'

export default function ApartmentListItem({ apartment }: any) {



    return (
        <View style={styles.card}>

            <Image style={styles.image} source={{ uri: apartment.publicSupportImage }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title}>{apartment.title}</Text>
                <Text style={styles.description}>Stay this apartment affortable price here.</Text>
                <View style={styles.footer}>
                    <Text style={styles.price}>$ {apartment.price} Night</Text>
                    <Text>★ {apartment.rating}({apartment.numberOfStars})</Text>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        
        marginBottom:20,
        left: 10,
        right: 10,
        borderRadius: 20,
        flexDirection: "row"
    },
    title: {
        fontFamily: "Inter"

    },

    image: {
        width: 150,
        aspectRatio: 1,


    },

    rightContainer: {
        padding: 10,
        flex: 1
    },

    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "auto",




    },
    description: {
        color: "gray"
    },

    price: {
        fontWeight: "bold"
    }

})