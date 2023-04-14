import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { addToCart } from "../features/cartSlice";
import * as Notifications from "expo-notifications";
import { useDispatch } from "react-redux";

const { width } = Dimensions.get("screen");
const boxWidth = width;

const DetailScreen = ({ navigation, route }) => {
  const item = route.params;
  const dispatch = useDispatch();
  const sendNotification = () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: true,
      }),
    });
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Cart Updated!",
        body: `You have added ${item.name} to your cart`,
      },
      trigger: null,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Icon
          name="arrow-left-circle"
          size={40}
          onPress={() => {
            navigation.goBack();
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={item.image}
          style={{ width: 350, height: 300, borderRadius: 30, marginTop: 20 }}
        />
      </View>
      <View style={styles.textBox}>
        <View style={{ height: 300, justifyContent: "space-between" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Icon name="heart-outline" size={40} color="#fff" />
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
              }}
            >
              {item.name}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              textAlign: "auto",
              paddingHorizontal: 3,
              color: "#fff",
            }}
          >
            {item.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
              ${item.price}
            </Text>
            <Button
              title="Add to cart"
              buttonStyle={{
                padding: 20,
                borderRadius: 30,
                backgroundColor: "#fff",
              }}
              titleStyle={{ color: "#000000" }}
              containerStyle={{ width: 170, borderRadius: 30 }}
              onPress={() => {
                sendNotification();
                dispatch(addToCart(item));
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textBox: {
    marginHorizontal: 10,
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "#f73a3a",
    height: 500,
    width: boxWidth,
    borderRadius: 70,
    padding: 30,
    justifyContent: "space-between",
  },
});
export default DetailScreen;
