import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-community/google-signin';

import {
    LoginScreen,
    SignupScreen,
    OnboardingScreen,
    ForgotPasswordScreen
} from '../screens';


const Stack = createStackNavigator();

export default function AuthStack()  {
    const [isFirstLaunch, setFirstLaunch] = useState(null);
    let routeName;

    const storeLaunchData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('alreadyLaunched', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getLaunchData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('alreadyLaunched')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
            console.log(e)
        }
    }

    useEffect(() => {
        const checkData = async () => {

            const data = await getLaunchData();
            if (data == null) {
                await storeLaunchData(true);
                setFirstLaunch(true);
            } else {
                setFirstLaunch(false);
            }

        }
        checkData();
        GoogleSignin.configure({
            webClientId: '648846691194-bhd899fdjhs9ilu2avhffe89qff6j09m.apps.googleusercontent.com',
            offlineAccess: true
        });

    }, []);

    if (isFirstLaunch == null) {
        return null;
    }
    else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }


    return (


            <Stack.Navigator initialRouteName={routeName}>

                <Stack.Screen
                    name="Onboarding"
                    component={OnboardingScreen}
                    options={
                        {
                            title: 'Onboarding',
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ title: 'Login',headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{ title: 'Signup' }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                    options={{ title: 'Reset Password' }}
                />

            </Stack.Navigator>
    );
}