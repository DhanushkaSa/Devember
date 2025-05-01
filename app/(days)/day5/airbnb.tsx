import { Stack } from "expo-router";
import { View, Text, FlatList } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import apartments from "../../../assets/data/day5/apartments.json";
import ApartmentListItem from "../../components/core/day5/ApartmentListItem";
import { useEffect, useMemo, useState } from "react";
import BottomSheet, { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet';


export default function airbnb() {

    const [selectedApartment, setSelectedApartment] = useState(null);
    const snapPoints = useMemo(() => [65, "25%", "50%", "90%"], []);
    const [region, setRegion] = useState({
        latitude: 7.8731,
        longitude: 80.7718,
        latitudeDelta: 5.5,
        longitudeDelta: 5.5
    });



    return (
        <View>
            <Stack.Screen options={{ headerShown: false }} />
            <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region} >

                {
                    apartments.map((apartment: any) => (
                        <Marker key={apartment.id} coordinate={{ latitude: apartment.latitude, longitude: apartment.longitude }} onPress={() => setSelectedApartment(apartment)}>
                            <View style={styles.view}>
                                <Text style={styles.text}>${apartment.price}</Text>
                            </View>


                        </Marker>

                    ))
                }
            </MapView>
            {selectedApartment && (
                <View style={{
                    position: "absolute",
                    bottom: 60,
                    left: 10,
                    right: 10,
                    borderRadius: 20,
                    overflow: "hidden",


                }}
                >
                    <ApartmentListItem apartment={selectedApartment} />
                </View>



            )}

            <BottomSheet
                // ref={bottomSheetRef}
                // onChange={handleSheetChanges}
                index={0}
                snapPoints={snapPoints}
            // enablePanDownToClose

            >
                <BottomSheetView>
                    <Text style={styles.listOfTitle}>Over {apartments.length} places</Text>
                    <BottomSheetFlatList
                        data={apartments}
                        contentContainerStyle={{ gap: 10, padding: 5 }}
                        renderItem={({ item }) => <ApartmentListItem apartment={item} />}
                    />
                </BottomSheetView>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%"
    },

    text: {
        fontWeight: "bold",
        // alignSelf:"center"
    },

    view: {
        backgroundColor: "white",
        padding: 3,
        borderWidth: 1,

        borderColor: "gray",
        borderRadius: 20,
        width: 50,
        height: 30,

    },

    listOfTitle: {
        textAlign: "center",
        fontSize: 20,

        fontFamily: "Inter",

    }
})