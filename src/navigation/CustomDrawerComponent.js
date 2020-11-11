import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import DrawerItem from './DrawerItem';
import image from './../../assets/images/profile.png'

export default class CustomDrawerComponent extends Component{

    state = {
        options: [
            {id: 1, name: 'Browse'},
            {id: 2, name: 'Friends'},
            {id: 3, name: 'Chats'},
            {id: 4, name: 'Setting'},
        ]
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={styles.image} source={image} />
                    <Text style={styles.name}> Abhishek</Text>
                    <Text style={styles.address}> Dehradun, Raipur road</Text>
                </View>
                <View style={styles.section}>
                    <FlatList
                        data={this.options}
                        renderItem={ ({item}) => (<DrawerItem name={item}/>) }
                        keyExtractor={item => item.id }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    card: {
        flex: 1,
        backgroundColor: '#CE8EFF',
        justifyContent: "center",
        paddingLeft: 50
    },

    section: {
        flex: 3,
        backgroundColor: '#fff'
    },

    image:{
        width: 80,
        height: 80,
        borderRadius: 40
    },

    name:{
        marginTop: 20,
        color: '#fff',
        fontSize: 14
    },

    address:{
        color: '#fff',
        fontSize: 12
    }
})