import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Status = ({item}) => {
  return (
    <View style={styles.statusCard}>
      <View style={[styles.circle, (item.status === "paid") ? styles.circlePaid : null, (item.status === "pending") ? styles.circlePending : null, (item.status === "draft") ? styles.circleDraft : null ]}></View>
      <Text style={[styles.statusText, (item.status === "paid") ? styles.paid : null, (item.status === "pending") ? styles.pending : null, (item.status === "draft") ? styles.draft : null ]}>{(item.status === "paid") ? "Payé" : null}{(item.status === "pending") ? "En Attente" : null}{(item.status === "draft") ? "Brouillon" : null}</Text>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  statusCard: {
    flexDirection: "row",
    backgroundColor: "#1f2c3f",
    width: 125,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 45
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