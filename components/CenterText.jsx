import React from 'react'
import { StyleSheet, Text } from 'react-native';

const CenterText = ({txt}) => {
    return (
        <Text style={styles.centerTxt}>{txt}</Text>
    )
}

export default CenterText



const styles = StyleSheet.create ({
    centerTxt: {
        padding: 10,
        marginBottom: 50,
        fontSize: 16,
        fontFamily: 'monospace',
        color: '#ffffff',
        textAlign: 'center',

        borderRadius: 200,
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 12,
         },
        shadowOpacity: 0.7,
        shadowRadius: 20.00,
    
        elevation: 24,
    }
})