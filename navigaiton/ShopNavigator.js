import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import ProductDetailScreens from "../screens/shop/ProductDetailScreens";
import ProductsOverviewsScreen from "../screens/shop/ProductsOverViewScreen";
import UserPoductsScreen from "../screens/user/UserPoductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DrawerNavigator = createDrawerNavigator();
const ProductsNavigator = createNativeStackNavigator();
const AdminNavigator = createNativeStackNavigator();

export const Drawer = () => {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen
        name="prodDrawer"
        component={ProductsStack}
        options={{
          title: "Products",
          headerShown: false,
        }}
      />
      <DrawerNavigator.Screen
        name="orders"
        component={OrdersScreen}
        options={{
          title: "Orders",
        }}
      />
      <DrawerNavigator.Screen
        name="userPoducts"
        component={AdminStack}
        options={{
          title: "Admin",
          headerShown: false,
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

const ProductsStack = () => {
  const navigation = useNavigation();
  return (
    <ProductsNavigator.Navigator>
      <ProductsNavigator.Screen
        name="products"
        component={ProductsOverviewsScreen}
        options={{
          title: "Products",
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="drawer"
              color="black"
            />
          ),
        }}
      />
      <ProductsNavigator.Screen
        name="productDetails"
        component={ProductDetailScreens}
        options={{
          title: "Orders",
          headerBackTitleVisible: false,
        }}
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

const AdminStack = () => {
  const navigation = useNavigation();
  return (
    <AdminNavigator.Navigator>
      <AdminNavigator.Screen
        name="userProdScreen"
        component={UserPoductsScreen}
        options={{
          title: "Edit",
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="drawer"
              color="black"
            />
          ),
        }}
      />
      <AdminNavigator.Screen
        name="editProductScreen"
        component={EditProductScreen}
        options={{
          title: "Edit",
          headerBackTitleVisible: false,
        }}
      />
    </AdminNavigator.Navigator>
  );
};
