import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const ImageTopRight = () => {
    return (
        <View style={styles.imgContainer}>
            <Image style={styles.image} source={require('../assets/scp_white_transparent.png')}></Image>
        </View>
    )
}

export default ImageTopRight


const styles = StyleSheet.create({
    imgContainer: {
        alignSelf: 'flex-end',
        padding: 15,
        marginTop: -200,
        paddingBottom: 200,
    },
    image: {
        width: 100,
        height: 100,
        alignContent: 'center',
    },
})
