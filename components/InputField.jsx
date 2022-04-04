import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputField = ({placeholder, isPassword, value, onChange}) => {
    return (
        <TextInput 
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor='#909090'
            secureTextEntry={isPassword}
            value={value}
            onChangeText={onChange}
        >
        </TextInput>
    )
}

export default InputField



const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 30,
        margin: 10,
        padding: 5,
        borderWidth: 1,
        color: '#ffffff',
        backgroundColor: '#000000',
        borderColor: '#ffffff',
        textAlign: 'left',
        
        shadowColor: "#ffffff",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.7,
        shadowRadius: 20.00,

        elevation: 24,
    },
})
