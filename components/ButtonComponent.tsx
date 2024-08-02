import { View, Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React from 'react'


type prop = {
    btnStyles:StyleProp<ViewStyle>
    txtStyles:any
    text:string
    onPress?:()=>void
}

const ButtonComponent = (props:prop) => {
    return (
        <View>
            <TouchableOpacity style={props.btnStyles} onPress={props.onPress}>
                <Text style={props.txtStyles}>{props.text}</Text>
            </TouchableOpacity>
        </View>

        
    )

    
}




export default ButtonComponent