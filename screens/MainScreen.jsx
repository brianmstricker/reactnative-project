import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { HOMEPAGEITEMS } from "../assets/HOMEPAGEITEMS";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DetailScreen from "./DetailScreen";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const MainScreen = ({ navigation }) => {
  const [categoryBarIdx, setCategoryBarIdx] = useState();
  const Categories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContainer}
      >
        {HOMEPAGEITEMS.map((item, idx) => {
          return (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.8}
              onPress={() => setCategoryBarIdx(idx)}
            >
              <View
                style={{
                  backgroundColor:
                    categoryBarIdx == idx ? "#ed0000" : "#ff8c8c",
                  ...styles.categoryBtn,
                }}
              >
                <View style={styles.categoryImgContainer}>
                  <Image
                    source={item.categoryImg}
                    style={styles.categoriesImg}
                  />
                </View>
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", marginLeft: 10 }}
                >
                  {item.category}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };
  const Card = ({ food }) => {
    return (
      <TouchableHighlight
        style={{ backgroundColor: "#d9d9d9" }}
        activeOpacity={0.95}
        underlayColor={"transparent"}
        onPress={() => {
          navigation.navigate("DetailScreen", food);
        }}
      >
        <View style={styles.card}>
          <View>
            <Image source={food.image} style={styles.cardImg} />
          </View>
          <View
            style={{ marginHorizontal: 10, marginTop: 10, alignSelf: "center" }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#262626",
              }}
            >
              {food.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 35,
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#262626",
                fontWeight: "bold",
              }}
            >
              ${food.price}
            </Text>
            <View>
              <Icon name="plus-circle" size={40} color="#ff3a3a" />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d9d9d9" }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Welcome,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: 5 }}>
              Guest
            </Text>
          </View>
          <Text style={{ fontSize: 18, color: "#a9a9a9", marginTop: 5 }}>
            What would you like to eat today?
          </Text>
        </View>
      </View>
      <View>
        <Categories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        key={"_"}
        data={HOMEPAGEITEMS}
        renderItem={({ item }) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "row",
    marginTop: 10,
  },
  categoryContainer: {
    paddingRight: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  categoryBtn: {
    flexDirection: "row",
    width: 150,
    height: 80,
    marginHorizontal: 7,
    borderRadius: 40,
    alignItems: "center",
  },
  categoryImgContainer: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  categoriesImg: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    borderRadius: 30,
  },
  card: {
    height: 240,
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 25,
    elevation: 12,
  },
  cardImg: {
    height: 120,
    width: cardWidth - 20,
    resizeMode: "cover",
    borderRadius: 50,
    top: -20,
    alignSelf: "center",
  },
});

export default MainScreen;
