import { useEffect } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/UI/HeaderButton";

import * as cartActions from "../../store/actions/cart";

const ProductsOverviewsScreen = (props) => {
  const products = useSelector((state) => state.products.avaliableProducts);
  const dispatch = useDispatch();

  const selectedItemHandler = (id) => {
    props.navigation.navigate("productDetails", {
      productId: id,
      // productTitle: itemData.item.title,
    });
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => props.navigation.navigate("CartScreen")} />
      ),
    });
  }, [props.navigation]);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectedItemHandler(itemData.item.id);
          }}
          // onAddToCart={() => {
          //   dispatch(cartActions.addToCart(itemData.item));
          // }}
        >
          <Button
            title="View details"
            onPress={() => {
              selectedItemHandler(itemData.item.id);
            }}
          />
          <Button
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProductsOverviewsScreen;
