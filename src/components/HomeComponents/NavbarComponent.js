import React, { Component } from "react";

import SearchBarComponent from './SearchBarComponent';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icon from '../../../assets/images/menu.png';

export default class NavbarComponent extends Component{

    render(){
        const  navigation = this.props.navigation;
        // navigation.toggleDrawer();

        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.menu} onPress={() => this.props.navigation.toggleDrawer()}>
                    <Image source={icon}></Image>
                </TouchableOpacity>
                <SearchBarComponent></SearchBarComponent>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        position: "absolute",
        top: 30,
        justifyContent: "space-around"
    },
    menu:{
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        marginLeft: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
})