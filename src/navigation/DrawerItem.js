import React, { Component } from 'react';
import {Text, View} from 'react-native';

export default class DrawerItem extends Component{
    constructor({name}){
        super();
        this.name = name;
        console.log(name)
    }

    render(){
        return (
           <View>
               <Text>{ this.name }</Text>
           </View>
        )
    }
}