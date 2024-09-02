import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './Style';
export default ({num}) => {
     return(
     <View style={style.container}>
     <Text style={[styles.txtG, style.num]}>
        {num}
     </Text>
     </View>
     )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        margin: 15,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        
    },
    num: {
        color: 'white',
        padding: 5
    }
})