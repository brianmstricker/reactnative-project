import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import MainScreen from "../screens/MainScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AccountScreen from "../screens/AccountScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { height: 55, borderTopWidth: 0, elevation: 0 },
        showLabel: false,
        activeTintColor: "#bb2a2a",
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="star" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" size={35} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cart" size={35} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
