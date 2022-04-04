import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button_Red = ({text, press}) => {
    return (
        <TouchableOpacity
          style= {styles.button}
          onPress={press}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button_Red


const styles = StyleSheet.create({
    button: {
        width: 200,
        backgroundColor: "#000000",
        borderWidth: 2,
        borderColor: 'red',
        marginVertical: 5,
        padding: 2,
    
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 12,
         },
        shadowOpacity: 0.7,
        shadowRadius: 20.00,
    
        elevation: 24,
    },
    buttonText: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
})