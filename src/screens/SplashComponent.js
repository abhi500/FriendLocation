import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, Text } from 'react-native';

import icon from '../../assets/images/iconglobe.png';

export default class SplashComponent extends Component{
    constructor({navigation}){
        super();
        this.timer(navigation)
    }

    /**
     * intent to home screen after 2 second i.e 2 * 1000
     * @param {*} param0 
     */
    timer({navigate}){
        setTimeout(() => {
            navigate('AddLocation')
        }, 2000);
    }

    render(){
        // const { navigate } = this.navigation;
        return(
            <View style={styles.container}>
              <StatusBar backgroundColor="#A839FF"></StatusBar>
              <Image source={icon} style={styles.icon}></Image>
              <Text style={styles.label}>Friend Location</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#A839FF'
    },

    icon: {
        height: 100,
        width: 100
    },

    label: {
        color: '#fff',
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 14,
    }
})