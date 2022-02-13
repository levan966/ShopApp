import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CartItem = (props) => {
  console.log(props);
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        {props.deletable && (
          <TouchableOpacity
            onPress={props.onRemove}
            style={styles.deleteButton}
          >
            <Text>❌</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CartItem;
const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontSize: 16,
    color: "#888",
  },
  mainText: {
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});
