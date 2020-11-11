import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//components
import MapComponent from '../components/HomeComponents/MapComponent';
import SettingComponent from '../components/HomeComponents/SettingComponent';
import CustomDrawerComponent from '../navigation/CustomDrawerComponent';
 
export default class HomeComponent extends Component{
    render(){
        return (
            <Drawer.Navigator initialRouteName="Map" drawerContent={() => <CustomDrawerComponent/>}>
                    <Drawer.Screen name="Map" component={MapComponent} />
                    <Drawer.Screen name="Setting" component={SettingComponent} />
            </Drawer.Navigator>
        )
    }
}

const Drawer = createDrawerNavigator();