import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
  {key:'1', orderNo: "HX5462", dueDate: "19 Janvier 2021", totalPrice: 59.99, name:'Issa Drici', nbArticles: 4, status: "paid"},
  {key:'11', orderNo: "TY4526", dueDate: "19 Janvier 2021", totalPrice: 45.51, name:'Yasmine Drici', nbArticles: 3, status: "pending"},
  {key:'12', orderNo: "OP4795", dueDate: "19 Janvier 2021", totalPrice: 98.36, name:'Mohammed Drici', nbArticles: 1, status: "draft"},
  {key:'14', orderNo: "DZ2185", dueDate: "19 Janvier 2021", totalPrice: 50, name:'Moussa Drici', nbArticles: 1, status: "paid"},
  {key:'15', orderNo: "AZ3321", dueDate: "19 Janvier 2021", totalPrice: 12.99, name:'Asmaa Guediri', nbArticles: 7, status: "pending"},
  {key:'16', orderNo: "KL9557", dueDate: "19 Janvier 2021", totalPrice: 13.55, name:'Amina Guediri', nbArticles: 2, status: "paid"},
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 75, height: 75, backgroundColor: "#7c5df9", borderTopRightRadius: 25, borderBottomRightRadius: 25, justifyContent: "flex-end", position: "relative"}}>
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

      <View style={{ flexDirection: "row", width: "100%", paddingHorizontal: 30, marginVertical: 30}}>
        <View>
          <Text style={{color: "#FFF", fontWeight: "600", fontSize: 25}}>Factures</Text>
          <Text style={{color: "#FFF", fontWeight: "300", fontSize: 17, opacity: 0.8}}>{DATA.length} Factures</Text>
        </View>
        <TouchableOpacity style={{flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: 13}}>
          <Text style={{color: "#FFF", fontWeight: "700", fontSize: 17, marginRight: 11}}>Filtrer</Text>
          <Text style={{color: "#7c5df9", fontWeight: "700", fontSize: 25, transform: [{ rotate: "90deg" }]}}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 25, padding: 9, backgroundColor: "#7c5df9", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <View style={{width: 35, height: 35, borderRadius: 25, backgroundColor: "#FFF", alignItems: "center", justifyContent: "center"}}>
            <Text style={{color: "#7c5df9", fontWeight: "900", fontSize: 21}}>+</Text>
          </View>
          <Text style={{color: "#FFF", fontWeight: "700", fontSize: 17, marginLeft: 7}}>Nouveau</Text>
        </TouchableOpacity>
      </View>
        
      <FlatList
        style={styles.listCards}
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.headerCard}>
              <Text style={{color: "#FFF", fontWeight: "600", fontSize: 16}}><Text style={{color: "#8790d5"}}>#</Text>{item.orderNo}</Text>
              <Text style={{color: "#FFF", fontWeight: "300", fontSize: 16, opacity: 0.8}}>{item.name}</Text>
            </View>
            <View style={styles.bodyCard}>
              <View style={styles.infoCard}>
                <Text style={{color: "#FFF", fontWeight: "300", fontSize: 17, opacity: 0.8}}>{item.dueDate}</Text>
                <Text style={{color: "#FFF", fontWeight: "600", fontSize: 19, marginTop: 5}}>{item.totalPrice} €</Text>
              </View>
              <View style={styles.statusCard}>
                <View style={[styles.circle, (item.status === "paid") ? styles.circlePaid : null, (item.status === "pending") ? styles.circlePending : null, (item.status === "draft") ? styles.circleDraft : null ]}></View>
                <Text style={[styles.statusText, (item.status === "paid") ? styles.paid : null, (item.status === "pending") ? styles.pending : null, (item.status === "draft") ? styles.draft : null ]}>{(item.status === "paid") ? "Payé" : null}{(item.status === "pending") ? "En Attente" : null}{(item.status === "draft") ? "Brouillon" : null}</Text>
              </View>
            </View>
          </TouchableOpacity>)}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141625',
    alignItems: 'center',
  },
  header: {
    width: "100%",
    height: 75,
    backgroundColor: "#1f213a",
    flexDirection: "row",
    alignItems: "center"
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
  statusCard: {
    flexDirection: "row",
    backgroundColor: "#1f2c3f",
    width: 125,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginRight: 7
  },
  statusText: {
    fontWeight: "600",
    fontSize: 16,
    textTransform: "capitalize"
  },
  circlePaid: {
    backgroundColor: "#41d3a2",
  },
  circlePending: {
    backgroundColor: "#fb9100"
  },
  circleDraft: {
    backgroundColor: "#e0e2f9"
  },
  paid: {
    color: "#41d3a2",
  },
  pending: {
    color: "#fb9100"
  },
  draft: {
    color: "#e0e2f9"
  }
});
