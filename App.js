import { StyleSheet, View, Text } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>asdfasf</Text>
        <Text>asdfasf</Text>
        <Text>asdfassafasfaslfg lasgfla sgbsf</Text>
        <Text>asdfasf</Text>
        <Text>asdfasf</Text>
        <Text>asdfasf</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
