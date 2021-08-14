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
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 16, opacity: 0.8, marginBottom: 25}}>{invoice.description}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billFrom.adress}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1}}>{invoice.billFrom.city}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1}}>{invoice.billFrom.postCode}</Text>
        <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1}}>{invoice.billTo.name}</Text>
        <View style={{width: "100%", flexDirection: "row", marginVertical: 25}}>
          <View style={{flex: 1}}>
            <View style={{ marginBottom: 25}}>
              <Text style={{ color: "#FFF", fontWeight: "600", fontSize: 16, opacity: 0.8, marginBottom: 10}}>Date de la Facture</Text>
              <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginTop: 5}}>{invoice.billTo.invoiceDate}</Text>
            </View>
            <View>
              <Text style={{ color: "#FFF", fontWeight: "600", fontSize: 16, opacity: 0.8, marginBottom: 10}}>Date de Paiement</Text>
              <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginTop: 5}}>{invoice.billTo.dueDate}</Text>
            </View>
          </View>
          <View style={{ flex: 1}}>
            <Text style={{ color: "#FFF", fontWeight: "600", fontSize: 16, opacity: 0.8}}>Facturé à</Text>
            <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginVertical: 10}}>{invoice.billTo.name}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.adress}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.city}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.postCode}</Text>
            <Text style={{color: "#FFF", fontWeight: "400", fontSize: 15, opacity: 0.8, marginVertical: 1.5}}>{invoice.billTo.country}</Text>
          </View>
        </View>
        <Text style={{ color: "#FFF", fontWeight: "600", fontSize: 16, opacity: 0.8}}>Email</Text>
        <Text style={{color: "#FFF", fontWeight: "700", fontSize: 19, marginTop: 5}}>{invoice.billTo.email}</Text>
        <View>
          <View>
            
          </View>
          <View style={{width: "100%", backgroundColor:"#FFF", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 30, flexDirection: "row", justifyContent: "space-between"}}>
            <Text>Total</Text>
            <Text>556.00 €</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

// {
//   orderNo: "TY4526",
//   billFrom: {
//     adress: '6 rue Gustave Brindeau',
//     city: "Le Havre",
//     postCode: "76600",
//     country: "France"
//   },
//   billTo: {
//     name: "Issa Drici",
//     email: "issa@test.com",
//     adress: '6 rue Gustave Brindeau',
//     city: "Le Havre",
//     postCode: "76600",
//     country: "France",
//     invoiceDate: "13 Juillet 2021",
//     dueDate: "14 Août 2021"
//   },
//   description: "Graphic Design",
//   items: [
//     {
//       name: "Banner Design",
//       quantity: 1,
//       price: 156.00
//     },
//     {
//       name: "Email Design",
//       quantity: 2,
//       price: 200.00
//     }
//   ],
//   totalPrice: 43.51,
//   status: "paid"
// }

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141625",
    padding: 30,
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
  },
})