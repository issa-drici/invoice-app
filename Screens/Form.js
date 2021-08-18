import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Button, DatePickerIOS } from 'react-native'

import ProductList from '../Components/ProductList'

const Form = ({ route, navigation}) => {
  // const { invoice } = route.params
  const [orderNo, setOrderNo] = useState("")
  const [fromAdress, setFromAdress] = useState("")
  const [fromCity, setFromCity] = useState("")
  const [fromPostCode, setFromPostCode] = useState("")
  const [fromCountry, setFromCountry] = useState("")
  const [toName, setToName] = useState("")
  const [toEmail, setToEmail] = useState("")
  const [toAdress, setToAdress] = useState("")
  const [toCity, setToCity] = useState("")
  const [toPostCode, setToPostCode] = useState("")
  const [toCountry, setToCountry] = useState("")
  const [toInvoiceDate, setToInvoiceDate] = useState((new Date()).toDateString())
  const [toDueDate, setToDueDate] = useState("")
  const [description, setDescription] = useState("")
  const [totalPrice, setTotalPrice] = useState("")
  const [status, setStatus] = useState("")
  const [items, setItems] = useState([])

  function randomOrder() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers       = '0123456789';
    var charactersLength = characters.length;
    var numbersLength = numbers.length;
    for ( var i = 0; i < 2; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    for ( var i = 0; i < 4; i++ ) {
      result += numbers.charAt(Math.floor(Math.random() * 
      numbersLength));
    }
    return result;
}

  const submitData = () => {
    fetch("http://192.168.1.205:19002/send-data", {
      method: "post",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        orderNo: randomOrder(),
        billFrom: {
          adress: fromAdress,
          city: fromCity,
          postCode: fromPostCode,
          country: fromCountry
        },
        billTo: {
          name: toName,
          email: toEmail,
          adress: toAdress,
          city: toCity,
          postCode: toPostCode,
          country: toCountry,
          invoiceDate: toInvoiceDate,
          dueDate: toDueDate
        },
        description: description,
        items: [
          {
            key: "5243",
            name: "Email Design",
            quantity: 2,
            price: 200.00
          }
        ],
        totalPrice: totalPrice,
        status: status
      })
    })
      .then(res => res.json())
      .then(navigation.navigate('Home'))
      .then(data => console.log(data))
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
        <Text style={styles.arrowBack}>›</Text>
        <Text style={styles.retour}>Retour</Text>
      </TouchableOpacity>
      <Text style={{color: "#FFF", fontWeight: "600", fontSize: 29, marginBottom: 30}}>Nouvelle Facture</Text>
      <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16, marginBottom: 15}}>Facture de</Text>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} onChangeText={text => setFromAdress(text)} />
      </View>
      <View style={{ flexDirection: "row"}}>
        <View style={{ marginVertical: 9, flex: 1 }}>
          <Text style={styles.label}>Ville</Text>
          <TextInput style={styles.input} onChangeText={text => setFromCity(text)} />
        </View>
        <View style={{ marginVertical: 9, flex: 1, marginLeft: 25 }}>
          <Text style={styles.label} >Code Postal</Text>
          <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setFromPostCode(text)} />
        </View>
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Pays</Text>
        <TextInput style={styles.input} onChangeText={text => setFromCountry(text)} />
      </View>
      <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16, marginVertical: 20}}>Facturé à</Text>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Nom du client</Text>
        <TextInput style={styles.input} onChangeText={text => setToName(text)} />
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Email du client</Text>
        <TextInput style={styles.input} autoCorrect={false} onChangeText={text => setToEmail(text)} />
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} onChangeText={text => setToAdress(text)} />
      </View>
      <View style={{ flexDirection: "row"}}>
        <View style={{ marginVertical: 9, flex: 1 }}>
          <Text style={styles.label}>Ville</Text>
          <TextInput style={styles.input} onChangeText={text => setToCity(text)} />
        </View>
        <View style={{ marginVertical: 9, flex: 1, marginLeft: 25 }}>
          <Text style={styles.label}>Code Postal</Text>
          <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setToPostCode(text)}/>
        </View>
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Pays</Text>
        <TextInput style={styles.input} onChangeText={text => setToCountry(text)} />
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Description du Projet</Text>
        <TextInput style={styles.input} onChangeText={text => setDescription(text)} />
      </View>
      <ProductList />
      <View style={{flexDirection: "row", justifyContent: "flex-end", marginTop: 30}}>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Text style={{color: "#FFF", fontWeight: "600", fontSize: 16, textAlign: "center"}}>Retour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.save} onPress={() => submitData()}>
          <Text style={{color: "#FFF", fontWeight: "600", fontSize: 16, textAlign: "center"}}>Enregistrer</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom: 75}}></View>
    </ScrollView>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141625",
    padding: 30,
  },
  input: {
    padding: 20,
    backgroundColor: "#1f213a",
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    borderRadius: 7
  },
  label: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
    opacity: 0.8,
    marginBottom: 7
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
  back: {
    backgroundColor: "#1f213a",
    borderRadius: 25,
    padding: 20,
    marginRight: 10
  },
  save: {
    backgroundColor: "#7c5df9",
    borderRadius: 25,
    padding: 20
  }
})