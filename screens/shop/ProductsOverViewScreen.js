import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewsScreen = (props) => {
  // const products = useSelector((state) => state.products.avaliableProducts);
  // return <FlatList data={products} renderItem={dataItem} keyExtractor={} />
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
