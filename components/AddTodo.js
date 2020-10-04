import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert } from 'react-native';

export const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const clickSubmit = () => {
        if(text.length > 3 && text.length < 20){
            submitHandler(text);
            setText('');
        } else{
            Alert.alert('OOPS!', 'Minium 3 and maximum 20 charater require to submit todo', [{ text:'Understoood' }])
        }
       
    }

    return (
        <View>
            <TextInput
                clearButtonMode="always"
                style={styles.input}
                placeholder='new todo...'
                value={text}
                onChangeText={changeHandler}
            />
            <Button onPress={clickSubmit} title='Add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});
