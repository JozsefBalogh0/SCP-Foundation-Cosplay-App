import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NfcManager, { NfcEvents } from "react-native-nfc-manager";
import { useIsFocused } from "@react-navigation/core";

import InputField from "../components/InputField";
import ImageTopRight from "../components/ImageTopRight";
import Button_Red from "../components/Button_Red";
import CenterText from "../components/CenterText";

const tagfound = async () => {
  const cleanUp = () => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.setEventListener(NfcEvents.SessionClosed, null);
  };

  return new Promise((resolve) => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, async (tag) => {
      tagFound = tag;
      let string;
      await tag.ndefMessage.forEach((item) => {
        string = String.fromCharCode.apply(
          null,
          item.payload.splice(3, item.payload.length)
        );
      });
      resolve(string);
    });

    NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
      cleanUp();
      if (!tagFound) {
        resolve();
      }
    });

    NfcManager.registerTagEvent();
  });
};

export default function Home({ navigation }) {
  const [fullData, setFullData] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const [lang, setLang] = useState("en");
  const [invPass, setInvPass] = useState("Helytelen felhasználónév vagy jelszó")
  const [title, setTitle] = useState("SCP Alapítvány Dolgozói Adatbázis")
  const [namePlace, setNamePlace] = useState("Dolgozó_ID")
  const [logText, setLogText] = useState("── Bejelentkezés ──")

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      (async () => await NfcManager.start())();
      tagfound().then((x) => {
        setNameVal(x.split(",")[0]);
        setPassVal(x.split(",")[1]);
        setFullData(x);
      });
    }
  }, [isFocused]);

  useEffect(() => {
    setFullData(`${nameVal},${passVal}`);
  }, [nameVal, passVal]);

  useEffect(() => {
    if (lang == "hu") {
      setInvPass("Helytelen felhasználónév vagy jelszó")
      setTitle("SCP Alapítvány Dolgozói Adatbázis")
      setNamePlace("Dolgozó_ID")
      setLogText("── Bejelentkezés ──")
    }
    else {
      setInvPass("Invalid Username or Password")
      setTitle("SCP Foundation Employee Database")
      setNamePlace("Employee_ID")
      setLogText("── Login ──")
    }

  }, [lang])

  const validLogin = ["Acheron_Fox,Password", "Alma,Acheron"];

  const checkPass = () => {
    let FoundUser = false;
    validLogin.forEach((item, i) => {
      if (item == fullData) {
        navigation.navigate(nameVal, {lang});
        setNameVal("");
        setPassVal("");
        FoundUser = true;
      }
    });
    if (!FoundUser) {
      alert(invPass);
    }
  };

  const changeLang = () => {
    if (lang == "en") {
      setLang("hu")
    }
    else{
      setLang("en")
    }
  };


  return (
    <View style={styles.container}>
      <ImageTopRight></ImageTopRight>

      <CenterText txt={title}></CenterText>

      <InputField
        placeholder={namePlace}
        isPassword={false}
        value={nameVal}
        onChange={(e) => setNameVal(e)}
      ></InputField>
      <InputField
        placeholder="*******"
        isPassword={true}
        value={passVal}
        onChange={(e) => setPassVal(e)}
      ></InputField>

      <Button_Red text={logText} press={checkPass}></Button_Red>

      <View style={styles.langButton}>
        <Button_Red text="Language / Nyelv" press={changeLang}></Button_Red>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  langButton: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: -150,
    marginLeft: 20,
    paddingTop: 150,
  }
});
