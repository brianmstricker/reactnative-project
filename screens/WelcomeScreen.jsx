import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ height: 125 }}>
        <Image
          style={{
            width: 300,
            resizeMode: "contain",
            height: 300,
            borderRadius: 100,
            top: -175,
          }}
          source={require("../assets/images/pizzaslice-animated.png")}
        />
      </View>
      <View style={{ bottom: -40 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>
          Welcome to Pizza Delicioso!
        </Text>
      </View>
      <View style={{ bottom: -100 }}>
        <Text style={styles.paragraph}>-Your favorite local pizzeria!</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
          activeOpacity={0.8}
        >
          <Text style={{ fontSize: 18 }}>Enter Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "##e3e7e8",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    bottom: -200,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff3232",
    padding: 25,
    width: 200,
    borderRadius: 40,
  },
  paragraph: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "300",
  },
});

export default WelcomeScreen;
