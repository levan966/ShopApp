import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.ordes.orders);
  console.log(orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.totalAmount} </Text>}
    />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
