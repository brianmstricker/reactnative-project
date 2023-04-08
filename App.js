import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/MainScreen";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
