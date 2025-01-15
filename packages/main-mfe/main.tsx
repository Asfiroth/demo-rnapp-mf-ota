import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "./src/screens/ProductList";
import ProductDetailScreen from "./src/screens/ProductDetail";

import { MainStackParamList } from "./src/types/navigation";

const HomeStack = createStackNavigator<MainStackParamList>();

export function MainStackNavigation({navigation, route}: { navigation: any, route: any }) {
    return (
       <HomeStack.Navigator initialRouteName="ProductList">
              <HomeStack.Screen name="ProductList" component={ProductListScreen} />
              <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} />
       </HomeStack.Navigator>
    );
};