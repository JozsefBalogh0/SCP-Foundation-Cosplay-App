import React, {useEffect, useState} from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    const [whiteData, setWhiteData] = useState(["Connecting to Server...", "", "Retrieving Information...", "", "Decoding..."])
    const [redData, setredData] = useState(["","Secure Tunnel Estabilished", "", "Package Recieved"])
    const [greenData, setGreyData] = useState(["", "[0x00001] [0x00002] [0x00003] [0x00004] [0x00005] [0x00006] [0x00007]", "[0x0000B] [0x0000C] [0x0000D] [0x0000E] [0x0000F] [0x00010] [0x00011]", "[0x0001B] [0x0001C] [0x0001D] [0x0001E] [0x0001F] [0x00020] [0x00021]", "[0x0002B] [0x0002C] [0x0002D] [0x0002E] [0x0002F] [0x00030] [0x00031]", "[0x0003B] [0x0003C] [0x0003D] [0x0003E] [0x0003F] [0x00040] [0x00041]", "[0x0004B] [0x0004C] [0x0004D] [0x0004E] [0x0004F] [0x00040] [0x00041]", "[0x0005B] [0x0005C] [0x0005D] [0x0005E] [0x0005F] [0x00060] [0x00061]", "", "[0x00001] [0x00002] [0x00003] [0x00004] [0x00005] [0x00006] [0x00007]", "[0x0000B] [0x0000C] [0x0000D] [0x0000E] [0x0000F] [0x00010] [0x00011]", "[0x0001B] [0x0001C] [0x0001D] [0x0001E] [0x0001F] [0x00020] [0x00021]", "[0x0002B] [0x0002C] [0x0002D] [0x0002E] [0x0002F] [0x00030] [0x00031]", "[0x0003B] [0x0003C] [0x0003D] [0x0003E] [0x0003F] [0x00040] [0x00041]", "[0x0004B] [0x0004C] [0x0004D] [0x0004E] [0x0004F] [0x00040] [0x00041]", "[0x0005B] [0x0005C] [0x0005D] [0x0005E] [0x0005F] [0x00060] [0x00061]", "", "[0x00001] [0x00002] [0x00003] [0x00004] [0x00005] [0x00006] [0x00007]", "[0x0000B] [0x0000C] [0x0000D] [0x0000E] [0x0000F] [0x00010] [0x00011]", "[0x0001B] [0x0001C] [0x0001D] [0x0001E] [0x0001F] [0x00020] [0x00021]", "[0x0002B] [0x0002C] [0x0002D] [0x0002E] [0x0002F] [0x00030] [0x00031]", "[0x0003B] [0x0003C] [0x0003D] [0x0003E] [0x0003F] [0x00040] [0x00041]", "[0x0004B] [0x0004C] [0x0004D] [0x0004E] [0x0004F] [0x00040] [0x00041]", "[0x0005B] [0x0005C] [0x0005D] [0x0005E] [0x0005F] [0x00060] [0x00061]",])
    const [textData, setTextData] = useState("")
    const [redTextData, setredTextData] = useState("")
    const [greenTextData, setgreenTextData] = useState("")
    

    useEffect(() => {
        whiteData.forEach((item, i) => {
            setTimeout(() => {
                setTextData(previousData => previousData+"\n"+item)
            }, i*500);
        })
        redData.forEach((item, i) => {
            setTimeout(() => {
                setredTextData(previousData => previousData+"\n"+item)
            }, i*500);
        })
        setTimeout(() => {
            greenData.forEach((item, i) => {
                setTimeout(() => {
                    setgreenTextData(previousData => previousData+"\n"+item)
                }, i*100);
            })
        }, whiteData.length*500);
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground blurRadius={1} style={styles.image} source={require('../assets/scp_logo_loading.png')}></ImageBackground>
            </View>
            <View style={styles.whiteTextContainer}>
                <Text style={styles.whiteText}>{textData}</Text>
            </View>
            <View style={styles.redTextContainer}>
                <Text style={styles.redText}>{redTextData}</Text>
            </View>
            <View style={styles.greenTextContainer}>
                <Text style={styles.greenText}>{greenTextData}</Text>
            </View>
        </View>
    )
}

export default Loading



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    whiteTextContainer: {
        alignSelf: 'flex-start',
        padding: 15,
    },
    whiteText: {
        padding: 1,
        fontFamily: 'monospace',
        fontSize: 10,
        color: '#ffffff',
        alignSelf: 'flex-start',
        textAlign: 'left',

        borderRadius: 50,
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 6,
         },
        shadowOpacity: 0.5,
        shadowRadius: 20.00,
    
        elevation: 40,
    },
    redTextContainer: {
        alignSelf: 'flex-end',
        padding: 15,
        position: 'absolute'
    },
    redText: {
        padding: 1,
        fontFamily: 'monospace',
        fontSize: 10,
        color: 'red',
        alignSelf: 'flex-end',
        textAlign: 'right',

        borderRadius: 50,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 6,
         },
        shadowOpacity: 0.5,
        shadowRadius: 20.00,
    
        elevation: 40,
    },
    greenTextContainer: {
        alignSelf: 'center',
        padding: 5,
        marginTop: 100,
        position: 'absolute'
    },
    greenText: {
        padding: 1,
        fontFamily: 'monospace',
        fontSize: 8,
        color: 'green',
        alignSelf: 'center',
        textAlign: 'center',

        borderRadius: 150,
        shadowColor: "green",
        shadowOffset: {
            width: 0,
            height: 6,
         },
        shadowOpacity: 0.5,
        shadowRadius: 20.00,
    
        elevation: 40,
      },
      image: {
        width: 350,
        height: 600,
        opacity: 0.5,
      },
      imageContainer: {
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        marginTop: 130
      }
  });