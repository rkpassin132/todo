import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
export const Header = () => {

    return (
        <View style={styles.header}>
            <Animatable.Text animation="fadeInDown" style={styles.title}>My Todos</Animatable.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'coral',
        borderBottomColor: '#ffc08b',
        borderBottomWidth: 2,
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold"
    }
});