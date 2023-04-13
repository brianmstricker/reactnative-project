import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native-gesture-handler";
import { HOMEPAGEITEMS } from "../assets/HOMEPAGEITEMS";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const MainScreen = () => {
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
      <View style={styles.card}>
        <View>
          <Image source={food.image} style={styles.categoriesImg} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e9e8e8" }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Welcome,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: 5 }}>
              Brian
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
    height: 200,
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default MainScreen;
