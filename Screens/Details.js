import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Status from '../Components/Status'

const Details = ({ route, navigation}) => {
  const { invoice } = route.params

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Text style={styles.arrowBack}>›</Text>
        <Text style={styles.retour}>Retour</Text>
      </TouchableOpacity>
      <View style={styles.cardTop}>
        <Text  style={{color: "#FFF", fontWeight: "600", fontSize: 15, opacity: 0.8}}>Status</Text>
        <Status item={invoice}/>
      </View>
      <View style={styles.card}>

      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141625",
    padding: 30
  },
  goBack: {
    flexDirection: "row",
    alignItems: "flex-start"
  },
  arrowBack: {
    color: "#7c5df9",
    fontWeight: "700",
    fontSize: 25,
    transform: [
      { rotate: "180deg" }
    ],
    marginRight: 7,
  },
  retour: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 25
  },
  cardTop: {
    width: "100%",
    backgroundColor: "#1f213a",
    borderRadius: 10,
    marginVertical: 15,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  card: {
    width: "100%",
    backgroundColor: "#1f213a",
    borderRadius: 10,
    marginVertical: 15,
    padding: 20,
    flexDirection: "row"
  },
})