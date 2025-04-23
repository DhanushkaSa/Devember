import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';


import DayListItem from '../app/components/core/DayListItem'





export default function HomeScreen() {

  const days = [...Array(24)].map((val, index) => index + 1);






  return (
    <View style={styles.container}>


      <FlatList
        contentContainerStyle={styles.content}
        numColumns={2}
        data={days}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />

        }


      />









      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },

  content: {
    gap: 10,

  },

  column: {
    gap: 10
  },




});
