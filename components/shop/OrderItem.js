import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CartItem from "./CartItem";
import Card from "../UI/Card";
const OrderItem = (props) => {
  console.log(props.items);
  const [showDetails, setShowDetails] = useState(false);
  console.log(showDetails);
  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>$ {props.amount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        title="Show Details"
        onPress={() => {
          setShowDetails((prevState) => !prevState);
        }}
      />
      {showDetails && (
        <View>
          {props.items.map((cartItem) => (
            <CartItem
              style={styles.detailItems}
              key={cartItem.productId}
              quantity={cartItem.quantity}
              amount={cartItem.sum}
              title={cartItem.productTitle}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    // shadowColor: "black",
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // elevation: 5,
    // borderRadius: 10,
    // backgroundColor: "white",
    margin: 20,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  date: {
    // color: "red",
  },
  detailItems: {
    width: "100%",
  },
});
