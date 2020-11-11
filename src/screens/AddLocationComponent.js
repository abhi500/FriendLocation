import React, { Component } from 'react';
import {  
    Image, 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
} 
from 'react-native';

import Locationmanager from './../../utils/locationmanager';

import icon from '../../assets/images/solar.png';

export default class AddLocationComponent extends Component{
    constructor({navigation}){
        super();
        this.navigation = navigation;
        this.state = {
            location: {
                latitude: null,
                longitude: null
            },
            error: null,
            address: null
        }   

        //bind methods so that we can call them from ui layer
        this.setAddress = this.setAddress.bind(this);
    }

    //set location to state { location }
    setLocation(){
        console.log(12)
        Locationmanager.getLatLong().then(location => {
            console.log(1)
            this.setState({location: {latitude: location.lat, longitude: location.long}});
        }).catch(err => {
            this.setState({error: 'Lat long not found'});
        })
    } 

    //set address to state { address }
    setAddress(){
        Locationmanager.getAddress().then((address) => {
            console.log(address);
            this.setState({address: address })

            //navigate to home screen
            setTimeout(() => {
                this.navigation.navigate('Home')
            }, 1000)
        }).catch(err => {
            console.log(err);
        })
    }

    render(){

       // ui layer 
       return (
        <View style={styles.container}>
            <Image source={icon}></Image>
            <View style={[styles.center, styles.mt10]}>
                <Text>Hey, looks like you are in</Text>
                <Text>{this.state.address}</Text>
            </View>
            <TouchableOpacity style={styles.locationbutton} onPress={this.setAddress}>
                {/* <Button title="ALLOW LOCATION" color="#A839FF"/> */}
                <Text style={styles.label}>ALLOW LOCATION</Text>
            </TouchableOpacity>
        </View>
       )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',  
    },

    mt10: {
        marginTop: 10
    },
    
    locationbutton: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#A839FF',
        borderRadius: 25,
        padding: 20
    },
    label:{
        color: '#fff'
    }
})