import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import Status from '../Components/Status'

const Details = ({ route, navigation}) => {
  const { invoice } = route.params

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Text style={styles.arrowBack}>›</Text>
        <Text style={styles.retour}>Retour</Text>
      </TouchableOpacity>
      <View style={styles.cardTop}>
        <Text  style={{color: "#FFF", fontWeight: "600", fontSize: 15, opacity: 0.8}}>Statut</Text>
        <Status item={invoice}/>
      </View>
      <View style={styles.card}>
        <Text style={{color: "#FFF", fontWeight: "600", fontSize: 16}}><Text style={{color: "#8790d5"}}>#</Text>{invoice.orderNo}</Text>
        <Text style={{color: "#7c5df9", fontWeight: "400", fontSize: 16, marginBottom: 25}}>{invoice.description}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billFrom.adress}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1}}>{invoice.billFrom.city}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1}}>{invoice.billFrom.postCode}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1}}>{invoice.billTo.name}</Text>
        <View style={{width: "100%", flexDirection: "row", marginVertical: 25}}>
          <View style={{flex: 1}}>
            <View style={{ marginBottom: 25}}>
              <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16,  marginBottom: 3}}>Date de la Facture</Text>
              <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginTop: 5}}>{invoice.billTo.invoiceDate}</Text>
            </View>
            <View>
              <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16, marginBottom: 3}}>Date de Paiement</Text>
              <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginTop: 5}}>{invoice.billTo.dueDate}</Text>
            </View>
          </View>
          <View style={{ flex: 1}}>
            <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16}}>Facturé à</Text>
            <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginVertical: 10}}>{invoice.billTo.name}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.adress}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.city}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.postCode}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.country}</Text>
          </View>
        </View>
        <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16}}>Email</Text>
        <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginTop: 5}}>{invoice.billTo.email}</Text>
        <View style={{ backgroundColor: "#141625", marginVertical: 40 }}>
          <View style={{ padding: 30, paddingBottom: 10}}>
            {invoice.items.map(item => (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 20}}>
                <View>
                  <Text style={{color: "#FFF", fontWeight: "700", fontSize: 15}}>{item.name}</Text>
                  <Text style={{color: "#FFF", fontWeight: "700", fontSize: 15, opacity: 0.8}}>{item.quantity} x {item.price} €</Text>
                </View>
                <Text style={{color: "#FFF", fontWeight: "700", fontSize: 15}}>{item.price * item.quantity} €</Text>
              </View>
            )
            )}
          </View>
          <View style={{width: "100%", backgroundColor:"#FFF", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 30, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
            <Text style={{ color: "#1f213a", fontWeight: "600", fontSize: 16, opacity: 0.8}}>Total</Text>
            <Text style={{ color: "#1f213a", fontWeight: "800", fontSize: 23}}>{invoice.totalPrice} €</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141625",
    padding: 30,
  },
  goBack: {
    flexDirection: "row",
    alignItems: "flex-start",
    maxWidth: 95
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
  },
})