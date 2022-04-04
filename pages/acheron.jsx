import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Loading from "../components/Loading";
import Button_Red from "../components/Button_Red";

const Acheron = ({ route, navigation }) => {
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
            source={require("../assets/Acheron.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.sideTextContainer}>
          <Text style={styles.sideHeader}>── Acheron_Fox ──</Text>
          <Text style={styles.sideText}>
            Rank: Fő Tudós{"\n\n"}Lokáció: Site-19{"\n\n"}Foglalkozási
            köre: Safe, Euclid és Keter osztályú objektumok
            {"\n\n"}Megjegyzés: Hajlamos megpofozni Dr.Bright-ot
          </Text>
        </View>
        <View style={styles.mainScroll}>
          <Text style={styles.mainHeader}>── Leírás ──</Text>
          <ScrollView>
            <Text style={styles.mainHeader}>── Történet ──</Text>
            <Text style={styles.mainText}>
              Acheron egy ritka, rókaszerű tagja az SCP-3312 fajnak egy
              ismeretlen Fázisban.{"\n\n"}
              Miután az Alapítvány felfedezte őt ebben az ismeretlen Fázisban,
              az Alapítvány elkezdett tesztelni rajta, de az Alapítvány gyorsan
              rájött, hogy még mindig voltak neki magasabb kognitív funkciói.
              {"\n"}Az Alapítvány többször is intejút készített vele egy
              izolált szobában és felfedezte, hogy az SCP-3312 memetikus szer
              előtt Acheronnak több végzettsége volt több tudományos ágazatban.
              {"\n\n"}Ezzel az információval az Alapítvány alkalmazott ként
              felvette őt annak reményében, hogy többet tanuljanak SCP-3312-ról.
              {"\n\n"}
              Acheron [KITÖRÖLVE] óta az SCP-Alapítványnak dolgozik.{"\n"}
              Jelenleg Site-19-nél állomásozott.
              {"\n"}Dr.Alma ki lett jelölve, hogy szoros figyelemmel ellenőrízze
              Acheron-t és az ő előrehaladását.{"\n\n"}SCP-096 kitörésénél,
              [KITÖRÖLVE]-ben Acheron segített SCP-096 visszatartásában és azóta
              fő tudóssá lett előre léptetve.{"\n\n"}SCP-999-nek észrevehetően
              egészségtelen megszállottsága van Dr.Acheron-al.
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
          <Image
            source={require("../assets/Acheron.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.sideTextContainer}>
          <Text style={styles.sideHeader}>── Acheron_Fox ──</Text>
          <Text style={styles.sideText}>
            Rank: Major Scientist{"\n\n"}Location: Site-19{"\n\n"}Occupational
            Areas: Safe, Euclid and Keter class objects{"\n\n"}Notes: Has a
            tendency to slap Dr.Bright
          </Text>
        </View>
        <View style={styles.mainScroll}>
          <Text style={styles.mainHeader}>── Description ──</Text>
          <ScrollView>
            <Text style={styles.mainHeader}>── History ──</Text>
            <Text style={styles.mainText}>
              Acheron is a rare, vulpine member of species SCP-3312 in an
              unknown Stage.{"\n\n"}
              After the Foundation has discovered him in this unknown Stage the
              Foundation began testing on him, but the Foundation quickly
              realised that he still has higher cognitive functions.{"\n"}The
              Foundation interviewed him several times in an isolated room and
              discovered that prior to the SCP-3312 memetic agent he had several
              degrees in various sciences.{"\n\n"}With this information the
              Foundation employed him in hopes of learning more about SCP-3312.
              {"\n\n"}Acheron works for the SCP-Foundation since [REDACTED].
              {"\n"}Currently stationed at Site-19.{"\n"}Dr.Alma is assigned
              with closely monitoring Acheron and his progress.{"\n\n"}At a
              containment breach from SCP-096 in [REDACTED] Acheron aided in the
              recontainment and since then has been promoted to Major Scientist.
              {"\n\n"}It has been noticed that SCP-999 has an unhealthy
              obsession with Dr.Acheron.
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

export default Acheron;

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
    borderBottomWidth: 1
  },
});

