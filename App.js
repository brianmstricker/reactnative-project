import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import WelcomeScreen from "./screens/WelcomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* <MainScreen /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <Provider store={store}>
// <PersistGate persistor={persistor}>
// import { store, persistor } from "./redux/store";
