import { StyleSheet, View, Text } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./store/reducers/products";
import { NavigationContainer } from "@react-navigation/native";
import { Drawer } from "./navigaiton/ShopNavigator";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});
// const store = createStore(rootReducer, composeWithDevTools());
const store = createStore(
  rootReducer,
  composeWithDevTools(),
  applyMiddleware(ReduxThunk)
);
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Drawer />
      </Provider>
    </NavigationContainer>
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
