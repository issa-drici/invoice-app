import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

const ProductList = () => {
  return (
    <View>
      <Text style={styles.title}>Liste de Produits</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5}}>
        <Text style={[styles.label, {width: "35%"}]}>Nom du Produit</Text>
        <Text style={[styles.label, {width: "15%"}]}>Qty.</Text>
        <Text style={[styles.label, {width: "19%"}]}>Prix</Text>
        <Text style={[styles.label, {width: "31%"}]}>Total</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <TextInput style={[styles.input, {width: "35%"}]} />
        <TextInput style={[styles.input, {width: "15%", textAlign: "center"}]} />
        <TextInput style={[styles.input, {width: "19%", textAlign: "center"}]} />
        <Text style={{ width: "20%", color: "#FFF", fontWeight: "600", fontSize: 16}}>156.00</Text>
        <Text>C</Text>
      </View>
      <TouchableOpacity style={styles.newItem}>
        <Text style={{color: "#FFF", fontWeight: "600", fontSize: 16, textAlign: "center"}}>+ Ajouter un Nouveau Produit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  input: {
    padding: 20,
    paddingHorizontal: 15,
    backgroundColor: "#1f213a",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 7
  },
  title: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 18,
    opacity: 0.8,
    marginTop: 20,
    marginBottom: 15,
  },
  label: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    opacity: 0.8,
    marginBottom: 7,
    marginRight: 10
  },
  newItem: {
    backgroundColor: "#1f213a",
    marginTop: 25,
    borderRadius: 25,
    padding: 20
  }
})