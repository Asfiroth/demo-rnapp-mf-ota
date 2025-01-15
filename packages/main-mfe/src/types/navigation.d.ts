import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type MainStackParamList = {
    ProductList: undefined;
    ProductDetail: { productId: string };
};

export type ProductListScreenNavigationProp = StackNavigationProp<MainStackParamList, 'ProductList'>;

export type ProductDetailScreenNavigationProp = StackNavigationProp<MainStackParamList, 'ProductDetail'>;
export type ProductDetailScreenRouteProp = RouteProp<MainStackParamList, 'ProductDetail'>;
