import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//components
import HomeComponent from '../screens/HomeComponent';
import SplashComponent from '../screens/SplashComponent';
import AddLocationComponent from '../screens/AddLocationComponent';

export default () =>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Home" component={HomeComponent} 
                    options={{ headerShown: false, headerLeft: null }} />
            <Stack.Screen name="Splash" component={SplashComponent} options={{ headerShown: false }} />
            <Stack.Screen name="AddLocation" component={AddLocationComponent} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>

const Stack = createStackNavigator();