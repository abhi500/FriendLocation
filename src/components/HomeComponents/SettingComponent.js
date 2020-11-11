import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';

export default class SettingComponent extends Component{
    constructor({navigation}){
       super();
       this.navigation = navigation;
    //    this.updateState();
    }

    updateState(){
        this.navigation.toggleDrawer();
    }

    render(){
        return(
            <View>
                <StatusBar></StatusBar>
                <TouchableOpacity onPress={() => this.updateState() }>
                    <Text>Setting</Text>
                </TouchableOpacity>
                <Icon
                    name='sc-telegram'
                    type='evilicon'
                    color='#517fa4'
                />
            </View>
        )
    }
}