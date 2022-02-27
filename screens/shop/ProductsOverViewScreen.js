import { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Button,
  Text,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/UI/HeaderButton";
import * as productsActions from "../../store/actions/products";
import * as cartActions from "../../store/actions/cart";

const ProductsOverviewsScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const products = useSelector((state) => state.products.avaliableProducts);
  const dispatch = useDispatch();

  const selectedItemHandler = (id) => {
    props.navigation.navigate("productDetails", {
      productId: id,
    });
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => props.navigation.navigate("CartScreen")} />
      ),
    });
  }, [props.navigation]);

  const loadProducts = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(productsActions.fetchProducts());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const willFocusSub = props.navigation.addListener(
      "willFocus",
      loadProducts
    );
    return willFocusSub; //////  return unsubscribe
  }, [loadProducts]);

  useEffect(() => {
    loadProducts();
  }, [dispatch, loadProducts]);

  if (error) {
    <View style={styles.centered}>
      <Text>An error occurred!</Text>
      <Button title="Try again" onPress={loadProducts} />
    </View>;
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No products found</Text>
      </View>
    );
  }

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
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
});

export default ProductsOverviewsScreen;
