import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

export const TodoItem = ({item, pressHandler}) => {


    let delay = 300 + parseInt(item.key) * 50;

    return (
        <TouchableOpacity style={styles.touch}>
            <Text onPress={ () => Alert.alert('Todo '+item.key , item.text, [{text: 'close'}]) } style={styles.item}>{ item.text }  </Text>
            <Animatable.View animation="bounceIn" delay={delay} iterationCount={1} onPress={() => pressHandler(item.key)} style={styles.delteBtn}> 
                <Text style={styles.deleteText}>D</Text>  
            </Animatable.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touch: {
        display: 'flex',
        flexDirection: 'row',
      
    },
    item: {
      
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        width: 270
    },
    delteBtn: {
     
        position: 'relative',
        paddingRight: 5,
        borderRadius: 100,
        width: 30,
        height: 30,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',   
        backgroundColor: 'coral',
        textAlign: 'center',
        marginTop: 25,
        marginLeft: 10,
    },
    deleteText: {
        position: 'relative',
        color: 'white',
        marginLeft: 6,
    }
});