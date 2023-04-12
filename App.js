import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import BottomNav from "./navigation/BottomNav";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <Provider store={store}>
// <PersistGate persistor={persistor}>
// import { store, persistor } from "./redux/store";
