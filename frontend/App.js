import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screens/Home'
import Details from './Screens/Details';
import Form from './Screens/Form';

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#FFF"
        barStyle="light-content"
        />
      <View style={styles.header}>
        <View style={styles.logo}>
          <View style={{ height: "50%", backgroundColor: "#9278ff",  borderTopLeftRadius: 25, borderBottomRightRadius: 25}}></View>
          <Text style={{ position: "absolute", fontSize: 45, transform: [{ translateX: 20},{ translateY: -10}], fontWeight: "900", color: "#FFF" }}>O</Text>
        </View>
        <Image
          style={{ width: 25, height: 25, marginLeft: "auto", marginRight: 25}}
          source={require('./assets/sun.png')}
        />
        <View style={{ height: "100%", borderLeftColor: "#4d4e6a", borderLeftWidth: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20}}>
          <View style={{ width: 40, height: 40, backgroundColor: "#f5bc6e", borderRadius: 25, alignItems: "center", justifyContent: "center"}}>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "900"}}>I</Text>
          </View>
        </View>
      </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{title:"Accueil", headerShown: false}} />
          <Stack.Screen name="Details" component={Details} options={{title:"Details", headerShown: false}} />
          <Stack.Screen name="Form" component={Form} options={{title:"Formulaire", headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141625',
  },
  header: {
    width: "100%",
    height: 75,
    backgroundColor: "#1f213a",
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    width: 75,
    height: 75,
    backgroundColor: "#7c5df9",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "flex-end",
    position: "relative"
  },
});
