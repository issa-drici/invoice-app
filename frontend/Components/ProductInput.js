import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

const ProductInput = ({ product, handleInputProduct }) => {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState(Number)
  const [price, setPrice] = useState(Number)
  const [total, setTotal] = useState("0.00€")

  useEffect(() => {
    const inputs = {
      name,
      quantity,
      price,
      total: (quantity * price).toString()
    }
    setTotal(inputs.total)
    handleInputProduct(inputs)
  })

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15}}>
        <TextInput style={[styles.input, {width: "35%"}]} onChangeText={text => setName(text)} />
        <TextInput style={[styles.input, {width: "15%", textAlign: "center"}]} onChangeText={text => setQuantity(text)}  />
        <TextInput style={[styles.input, {width: "19%", textAlign: "center"}]} onChangeText={text => setPrice(text)}  />
        <Text style={{ width: "20%", color: "#FFF", fontWeight: "600", fontSize: 16}}>{total}</Text>
        <Text>C</Text>
      </View>
    </View>
  )
}

export default ProductInput

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
})