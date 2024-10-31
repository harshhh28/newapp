import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.container, styles.card, styles.elevatedCard]}>
        <Text style={styles.cardHeadingText}>Hello World!</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardText} numberOfLines={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
          quos, magnam corporis modi sint mollitia alias quis cum maiores
          accusantium accusamus sequi aperiam ducimus beatae. Numquam assumenda
          tenetur quos vero?
        </Text>
        <View style={styles.cardButtonContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://reactnative.dev")}>
            <Text style={[styles.cardText, styles.cardButtonText]}>
              Read More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("https://reactnative.dev")}>
            <Text style={[styles.cardText, styles.cardButtonText]}>
              Follow Us!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.container, styles.card, styles.elevatedCard]}>
        <Text style={styles.cardHeadingText}>Hello World!</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardText} numberOfLines={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
          quos, magnam corporis modi sint mollitia alias quis cum maiores
          accusantium accusamus sequi aperiam ducimus beatae. Numquam assumenda
          tenetur quos vero?
        </Text>
        <View style={styles.cardButtonContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://reactnative.dev")}>
            <Text style={[styles.cardText, styles.cardButtonText]}>
              Read More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("https://reactnative.dev")}>
            <Text style={[styles.cardText, styles.cardButtonText]}>
              Follow Us!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.container, styles.card, styles.elevatedCard]}>
        <Text style={styles.cardHeadingText}>Hello World!</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.cardImage}
        />
        <Text style={styles.cardText} numberOfLines={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
          quos, magnam corporis modi sint mollitia alias quis cum maiores
          accusantium accusamus sequi aperiam ducimus beatae. Numquam assumenda
          tenetur quos vero?
        </Text>
        <View style={styles.cardButtonContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("https://reactnative.dev")}>
            <Text style={[styles.cardText, styles.cardButtonText]}>
              Read More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite("https://reactnative.dev")}>
            <Text style={[styles.cardText, styles.cardButtonText]}>
              Follow Us!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 8,
    margin: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  elevatedCard: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  cardHeadingText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
  },
  cardImage: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    padding: 8,
  },
  cardText: {
    padding: 8,
    fontSize: 16,
  },
  cardButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  cardButtonText: {
    fontSize: 16,
    color: "lightblue",
    backgroundColor: "#1e1e1e",
    borderRadius: 5,
    margin: 5,
    fontWeight: "bold",
    padding: 8,
  },
});
