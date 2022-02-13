import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
          />
        )}
      />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
