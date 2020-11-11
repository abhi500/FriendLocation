import React from 'react';
import { Component } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import NavbarComponent from './NavbarComponent';


import icon from './../../../assets/images/solar.png';

export default class MapComponent extends Component{
    constructor(){
        super();

        this.state = {
            region : {
                latitude: 30.3165,
                longitude: 78.0322,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            markers: [
                {
                    latlng: {
                        latitude: 30.3165,
                        longitude: 78.0322,
                    },
                    title: 'Hello',
                    description: 'sdfsdf'
                },
                {
                    latlng: {
                        latitude: 30.3265,
                        longitude: 78.0322,
                    },
                    title: 'Hello',
                    description: 'sdfsdf'
                },
                {
                    latlng: {
                        latitude: 30.1165,
                        longitude: 78.0322,
                    },
                    title: 'Hello',
                    description: 'sdfsdf'
                },
                
            ]
        }
    }
      
      onRegionChange(region) {
        this.setState((state) => {
            region: state.region
        })
      }

    //   drag(data) {
    //       this.navigation.toggleDrawer();
    //   }

    render(){
     
        return (
           <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent"></StatusBar>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    mapType="satellite">
                {this.state.markers.map((marker, index) => (
                    <Marker
                        draggable
                        key={index}
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.descriptiorn}
                        icon= {icon}
                        draggable
                        onDrag={this.drag}
                    />
                ))}
                </MapView>
                <NavbarComponent navigation={this.props.navigation}></NavbarComponent>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
    },
    map: {
        width: '100%',
        height: '100%'
    },
})