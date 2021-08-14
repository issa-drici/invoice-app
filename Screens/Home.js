import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import Status from '../Components/Status';
import DATA from '../data.js'

export default function Home({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: '#141625'}}>
      <View style={styles.bar}>
        <View>
          <Text style={{color: "#FFF", fontWeight: "600", fontSize: 25}}>Factures</Text>
          <Text style={{color: "#FFF", fontWeight: "300", fontSize: 17, opacity: 0.8}}>{DATA.length} Factures</Text>
        </View>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Filtrer</Text>
          <Text style={styles.filterArrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNew}>
          <View style={styles.circleButton}>
            <Text style={{color: "#7c5df9", fontWeight: "900", fontSize: 21}}>+</Text>
          </View>
          <Text style={{color: "#FFF", fontWeight: "700", fontSize: 17, marginLeft: 7}}>Nouveau</Text>
        </TouchableOpacity>
      </View>
        
      <FlatList
        style={styles.listCards}
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card} onPress={() =>  {
            let invoice = item
            navigation.navigate('Details', {invoice})
            }}>
            <View style={styles.headerCard}>
              <Text style={{color: "#FFF", fontWeight: "600", fontSize: 16}}><Text style={{color: "#8790d5"}}>#</Text>{item.orderNo}</Text>
              <Text style={{color: "#FFF", fontWeight: "300", fontSize: 16, opacity: 0.8}}>{item.billTo.name}</Text>
            </View>
            <View style={styles.bodyCard}>
              <View style={styles.infoCard}>
                <Text style={{color: "#FFF", fontWeight: "300", fontSize: 17, opacity: 0.8}}>{item.billTo.dueDate}</Text>
                <Text style={{color: "#FFF", fontWeight: "600", fontSize: 19, marginTop: 5}}>{item.totalPrice} €</Text>
              </View>
              <Status item={item} />
            </View>
          </TouchableOpacity>)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 30,
    marginVertical: 30
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 13
  },
  filterText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
    marginRight: 11
  },
  filterArrow: {
    color: "#7c5df9",
    fontWeight: "700",
    fontSize: 25,
    transform: [
      { rotate: "90deg" }
    ]
  },
  buttonNew: {
    borderRadius: 25,
    padding: 9,
    backgroundColor: "#7c5df9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circleButton: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  listCards: {
    width: "100%",
    paddingHorizontal: 30
  },
  card: {
    width: "100%",
    backgroundColor: "#1f213a",
    borderRadius: 10,
    marginVertical: 15,
    padding: 20
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bodyCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  infoCard: {

  },
});
