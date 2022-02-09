import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "../screens/shop/CartScreen";
import ProductDetailScreens from "../screens/shop/ProductDetailScreens";
import ProductsOverviewsScreen from "../screens/shop/ProductsOverViewScreen";

const ProductsNavigator = createStackNavigator();

const ProductsStack = () => {
  return (
    <ProductsNavigator.Navigator>
      <ProductsNavigator.Screen
        name="products"
        component={ProductsOverviewsScreen}
        options={{
          backTitle: null,
        }}
      />
      <ProductsNavigator.Screen
        name="productDetails"
        component={ProductDetailScreens}
        options={
          {
            // title: false,
          }
        }
      />
      <ProductsNavigator.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ title: "Cart" }}
      />
    </ProductsNavigator.Navigator>
  );
};

export default ProductsStack;
