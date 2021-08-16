import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'

const Form = ({ route, navigation}) => {
  // const { invoice } = route.params

  return (
    <ScrollView style={styles.container}>
      <Text style={{color: "#FFF", fontWeight: "600", fontSize: 29, marginBottom: 30}}>Nouvelle Facture</Text>
      <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16, marginBottom: 15}}>Facture de</Text>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ flexDirection: "row"}}>
        <View style={{ marginVertical: 9, flex: 1 }}>
          <Text style={styles.label}>Ville</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{ marginVertical: 9, flex: 1, marginLeft: 25 }}>
          <Text style={styles.label}>Code Postal</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Pays</Text>
        <TextInput style={styles.input} />
      </View>
      <Text style={{ color: "#7c5df9", fontWeight: "600", fontSize: 16, marginVertical: 20}}>Facturé à</Text>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Nom du client</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Email du client</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ marginVertical: 9 }}>
        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ flexDirection: "row"}}>
        <View style={{ marginVertical: 9, flex: 1 }}>
          <Text style={styles.label}>Ville</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{ marginVertical: 9, flex: 1, marginLeft: 25 }}>
          <Text style={styles.label}>Code Postal</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
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
  }
})