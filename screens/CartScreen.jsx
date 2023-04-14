import { FlatList } from "react-native";
import { View, SafeAreaView, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, addToCart, removeFromCart } from "../features/cartSlice";

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const total = useSelector((state) => state.cart.cartTotal);
  const cartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image
          style={{
            width: 125,
            height: 125,
            borderRadius: 10,
            alignSelf: "center",
          }}
          source={item.image}
        />
        <View style={{ marginLeft: 20, justifyContent: "space-around" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ${item.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Quantity: {item.itemQuantity}
            </Text>
            <View style={{ flexDirection: "row", marginLeft: 20 }}>
              <Icon
                name="plus-circle-outline"
                size={30}
                onPress={() => dispatch(addToCart(item))}
              />
              <Icon
                name="minus-circle-outline"
                size={30}
                style={{ marginLeft: 5 }}
                onPress={() => dispatch(removeFromCart(item))}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Icon
          name="arrow-left-circle"
          size={40}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: 10,
            color: "#a9a9a9",
          }}
        >
          Menu
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
          Cart
        </Text>
        <Button
          title="clear cart"
          buttonStyle={{ width: 100, alignSelf: "center" }}
          onPress={() => {
            dispatch(clearCart());
          }}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={cart}
        renderItem={cartCard}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        {/* <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          Quantity: {cartQuantity}
        </Text> */}
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          {/* Total: ${total.toFixed(2)} */}
          Total: ${Math.abs(total.toFixed(2))}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cartCard: {
    height: 125,
    width: "90%",
    backgroundColor: "#fff",
    elevation: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
});
export default CartScreen;
