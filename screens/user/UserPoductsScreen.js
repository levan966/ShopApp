import React from "react";
import { FlatList, StyleSheet, Text, View, Button, Alert } from "react-native";
import { useEffect } from "react";
import ProductItem from "../../components/shop/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import * as productsActions from "../../store/actions/products";

const UserPoductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  const editProductHandler = (id) => {
    props.navigation.navigate("editProductScreen", {
      productId: id,
    });
  };
  const deleteHandler = (id) => {
    Alert.alert("Are you sure?", "Do you want to delete this", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        },
      },
    ]);
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Your Products",
      headerRight: () => (
        <Button
          onPress={() => {
            props.navigation.navigate("editProductScreen");
          }}
          title="Add"
          color="black"
        />
      ),
    });
  }, [props.navigation]);
  return (
    <View>
      <FlatList
        data={userProducts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <ProductItem
            image={itemData.item.imageUrl}
            price={itemData.item.price}
            title={itemData.item.title}
            onSelect={() => {
              editProductHandler(itemData.item.id);
            }}
          >
            <Button
              title="Edit"
              onPress={() => {
                editProductHandler(itemData.item.id);
              }}
            />
            <Button
              title="Delete"
              onPress={() => deleteHandler(itemData.item.id)}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};

export default UserPoductsScreen;

const styles = StyleSheet.create({});
