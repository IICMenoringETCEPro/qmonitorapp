import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    LoginScreen,
    SignupScreen
} from '../src/screens';


const Stack = createStackNavigator();

export default function Application() {


    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName="InitialLogin">

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{ title: 'Signup' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}