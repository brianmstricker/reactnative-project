import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "##e3e7e8",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ height: 400 }}>
        <Image
          style={{ width: 300, resizeMode: "contain", height: 300 }}
          source={require("../assets/images/pizzaslice-animated.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
