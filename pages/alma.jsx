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
            Rank: Lehetséges O5 Tanács tag{"\n\n"}Lokáció: Site-19{"\n\n"}
            Foglalkozási köre: Összes{"\n\n"}Megjegyzés: Nem tudni, hogy igazán
            O5 tanács tag.
          </Text>
        </View>
        <View style={styles.mainScroll}>
          <Text style={styles.mainHeader}>── Leírás ──</Text>
          <ScrollView>
            <Text style={styles.mainHeader}>── Történet ──</Text>
            <Text style={styles.mainText}>
              Dr. Alma egy ritka, kutyaszerű, pontosabban Husky tagja az
              SCP-3312 fajnak, több magasabb kognitív funkcióval.{"\n\n"}
              Dr. Alma az egyik legtovábbi dolgozó tudós az Alapítványnál,
              túlságosan legtovábbi, ami miatt sokan úgy vélik, hogy Dr. Alma az
              O5 tanács egyik tagja lehet, az első tudósok az SCP Alapítványnál.
              {"\n\n"}
              Dr. Alma szoros figyelemmel ellenőrzi Dr. Acheron-t, egy másik
              tagja az SCP-3312 fajnak, és az előrehaladását.{"\n\n"}
              Dr. Alma az összes SCP-hez engedélye van Site-19-nál, jobban
              bebizonyítva másoknak, hogy Dr. Alma lehetségesen O5 tanács tagja.
              {"\n\n"}
              Dr. Alma sok kitörést élt túl. Előre léptette Dr. Acheron-t fő
              tudossá, miután bátran kockáztatta életét Dr. Acheron SCP-096
              bezárásába.
            </Text>
            <Text style={styles.mainHeader}>
              ── Spekuláció az O5 tanács tagságról ──
            </Text>
            <Text style={styles.mainText}>
              Ahogy az előbb említve, Dr. Almáról nem tudni, hogy ténylegesen
              egy tagja-e az O5 tanácsnak, vagy egy magas rangú tudós.{"\n\n"}
              Egy titkos csoport az Alapítványban, aminek a célja, hogy az
              összes O5 tanács tagot feltárjon, Dr. Almáról információkat gyűjt,
              hogy lezárja ezt a bizonytalanságot.{"\n\n"}
              Sokan látták Dr. Almát eltűnni miután elhagyja a szobát, amikor
              titokban követik őt.{"\n"}
              Furán, az összes naplóadat kivan törölve, mikor Dr. Alma egy
              interjút tart egy SCP-vel, ez ugyanúgy igaz, mikor Dr. Acheron-nal
              interjút tartott, ami miatt senki se tudja, hogy igazán mi történt
              ott.{"\n\n"}
              Ahogy az előbb említve, Dr. Alma az egyik legelső tudós volt az
              SCP Alapítványnál, ami miatt sokan hiszik, hogy ő tényleg egy O5
              tanács tag.
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
            Rank: Possibly O5-[REDACTED]{"\n\n"}Location: Site-19{"\n\n"}
            Occupational Areas: All{"\n\n"}Notes: Unknown if he is truly an O5
            Member
          </Text>
        </View>
        <View style={styles.mainScroll}>
          <Text style={styles.mainHeader}>── Description ──</Text>
          <ScrollView>
            <Text style={styles.mainHeader}>── History ──</Text>
            <Text style={styles.mainText}>
              Dr. Alma is a rare, canine, more specifically a Husky member of
              species SCP-3312, with increased higher cognitive functions.
              {"\n\n"}
              Dr. Alma was one of the earliest scientists in the Foundation, too
              early in fact, leading to speculation that he may be a member of
              the O5 council, the first scientists of the SCP Foundation.
              {"\n\n"}
              He is tasked with closely monitoring Dr. Acheron, another member
              of species SCP-3312 stationed at Site-19.{"\n\n"}
              Dr. Alma has access to almost any and all SCPs at the site, aiding
              the speculation that he may be an O5 council member.{"\n"}Dr. Alma
              witnessed several containment breaches, and survived all.{"\n\n"}
              He promoted Dr. Acheron to Major Scientist at Site-19 after Dr.
              Acheron bravely put his life at risk to re-contain SCP-096.
            </Text>
            <Text style={styles.mainHeader}>
              ── Speculation of O5 membership ──
            </Text>
            <Text style={styles.mainText}>
              As stated before, it is currently unknown if Alma truly is a
              member of the O5 council, or just a high-ranking scientist.
              {"\n\n"}
              The secret group in the Foundation which aims to uncover all O5
              members, is gathering all info about Dr. Alma in an attempt to
              uncover this uncertainty.{"\n\n"}
              Many have seen Dr. Alma disappearing in a matter of seconds after
              leaving the room, when they secretly followed him.{"\n"}
              Strangely, all logs are deleted when Dr. Alma interviews an SCP,
              this having been the case with Dr. Acheron, leading to speculation
              what happened truly there.{"\n\n"}
              As stated above, Dr. Alma is one of the first scientists in the
              Foundation, leading many to think he may be an O5 council member.
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
