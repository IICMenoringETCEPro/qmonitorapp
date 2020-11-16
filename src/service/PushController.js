import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import PushNotification from "react-native-push-notification";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProfileContext } from '../navigation/ProfileProvider';

export default function PushController({ navigation }) {

    const { storeCurrentDeviceInfo } = useContext(ProfileContext);

    const [deviceToken, setdeviceToken] = useState()

    const storeDeviceTokenData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('DeviceToken', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getDeviceTokenData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('DeviceToken')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
            console.log(e)
        }
    }

    useEffect(() => {

        PushNotification.configure({

            onRegister: function (token) {
                console.log("TOKEN:", token);
                storeCurrentDeviceInfo(token).then(()=>{
                    console.log('data saved to db')

                })
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                // notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);
            },
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },
            senderID: "1090501687137",
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });

    }, []);


    return (
        <View>
        </View>
    );



}