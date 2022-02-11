import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import ProductDetailScreens from "../screens/shop/ProductDetailScreens";
import ProductsOverviewsScreen from "../screens/shop/ProductsOverViewScreen";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductsNavigator = createNativeStackNavigator();
const DrawerNavigator = createDrawerNavigator();

export const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <DrawerNavigator.Screen
        name="ordesrs"
        component={ProductsStack}
        options={{
          title: "Products",
          // drawerIcon: () => (
          // <Ionicons
          //   name={Platform.OS === "android" ? "md-list" : "ios-list"}
          //   size={size}
          //   color={focused ? "#7cc" : "#ccc"}
          // />
          // ),
        }}
      />
      <DrawerNavigator.Screen
        name="drawe1"
        component={ProductsStack}
        options={{ title: "Orders" }}
      />
    </DrawerNavigator.Navigator>
  );
};

export const ProductsStack = () => {
  return (
    <ProductsNavigator.Navigator>
      <ProductsNavigator.Screen
        name="products"
        component={ProductsOverviewsScreen}
        options={{
          title: "Products",
          // headerLeft: () => (
          //   <Button onPress={() => "asdfsa"} title="drawer" color="black" />
          // ),
        }}
      />
      <ProductsNavigator.Screen
        name="productDetails"
        component={ProductDetailScreens}
        options={{ title: "Orders" }}
      />
      <ProductsNavigator.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ title: "Cart" }}
      />
      <ProductsNavigator.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{ title: "Orders" }}
      />
    </ProductsNavigator.Navigator>
  );
};
