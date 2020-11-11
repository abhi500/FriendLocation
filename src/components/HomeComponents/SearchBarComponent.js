import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default class SearchBarComponent extends Component{
    
    constructor(){
        super();
    }

    render(){
        return (
            <View style={ styles.container }>
                <TextInput placeholder="Search Place" style={styles.input}></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
    },

    input:{
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 30,
        fontSize: 14
    }
})