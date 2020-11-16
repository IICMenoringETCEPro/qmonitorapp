import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import PushNotification from "react-native-push-notification";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProfileContext } from '../navigation/ProfileProvider';

export default function PushController({ navigation }) {
    const { storeCurrentDeviceInfo, getCurrentDeviceInfo, deviceToken } = useContext(ProfileContext);

    useEffect(() => {

        getCurrentDeviceInfo();
        PushNotification.configure({

            onRegister: function (token) {

                console.log("CURRENT TOKEN: ", token);
                if (deviceToken != token.token) {
                    storeCurrentDeviceInfo(token).then(() => {
                        console.log('data saved to db')

                    })

                } else {
                    console.log('token already stored in db')
                }
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