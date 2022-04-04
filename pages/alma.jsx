import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Loading from "../components/Loading";
import Button_Red from "../components/Button_Red";

const Alma = ({ route, navigation }) => {
  const { lang } = route.params;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  if (lang == "hu") {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/Alma.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.sideTextContainer}>
          <Text style={styles.sideHeader}>── Alma ──</Text>
          <Text style={styles.sideText}>
            Oldalsó szöveg{"\n\n"}Oldalsó szöveg
          </Text>
        </View>
        <View style={styles.mainScroll}>
          <Text style={styles.mainHeader}>── Leírás ──</Text>
          <ScrollView>
            <Text style={styles.mainHeader}>── Történet ──</Text>
            <Text style={styles.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.mainHeader}>
              ── Spekuláció az O5 tanács tagságról ──
            </Text>
            <Text style={styles.mainText}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.centerContainer}>
          <Button_Red
            text="── Vissza ──"
            press={() => navigation.navigate("Home")}
          ></Button_Red>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../assets/Alma.png")} style={styles.image} />
        </View>

        <View style={styles.sideTextContainer}>
          <Text style={styles.sideHeader}>── Alma ──</Text>
          <Text style={styles.sideText}>
            Side Text{"\n\n"}Side Text
          </Text>
        </View>
        <View style={styles.mainScroll}>
          <Text style={styles.mainHeader}>── Description ──</Text>
          <ScrollView>
            <Text style={styles.mainHeader}>── History ──</Text>
            <Text style={styles.mainText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={styles.mainHeader}>
              ── Spekuláció az O5 tanács tagságról ──
            </Text>
            <Text style={styles.mainText}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.centerContainer}>
          <Button_Red
            text="── Back ──"
            press={() => navigation.navigate("Home")}
          ></Button_Red>
        </View>
      </View>
    );
  }
};

export default Alma;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft: 80,
    marginBottom: 25,
  },
  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  image: {
    width: 150,
    height: 220,
    padding: 10,
    marginTop: 10,
    marginBottom: 100,

    borderWidth: 1,
    borderColor: "red",
  },
  sideTextContainer: {
    height: 220,
    alignSelf: "flex-end",
    marginLeft: 140,
    padding: 15,
    marginTop: -330,
  },
  sideText: {
    fontFamily: "monospace",
    color: "#ffffff",
    textAlign: "left",
  },
  sideHeader: {
    fontFamily: "monospace",
    color: "red",
    textAlign: "center",

    borderRadius: 200,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20.0,

    elevation: 24,
  },
  mainText: {
    fontFamily: "monospace",
    color: "#ffffff",
    textAlign: "justify",
    lineHeight: 16.5,
    letterSpacing: 0.5,
    padding: 15,
  },
  mainHeader: {
    fontFamily: "monospace",
    color: "red",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 15,
    padding: 5,

    borderRadius: 200,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20.0,

    elevation: 24,
  },
  mainScroll: {
    height: 450,
    borderColor: "red",
    borderBottomWidth: 1,
  },
});
