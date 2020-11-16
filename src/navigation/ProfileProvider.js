import React, { createContext, useState, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { AuthContext } from './AuthProvider';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [deviceToken, setdeviceToken] = useState(null)

  const { user } = useContext(AuthContext);


  return (
    <ProfileContext.Provider
      value={{
        deviceToken,
        setdeviceToken,
        storeCurrentDeviceInfo: async (deviceToken) => {
          try {

            firestore()
              .collection('users')
              .doc(user.uid)
              .set(
                { deviceToken: deviceToken.token },
                { merge: true }
              )

          } catch (e) {
            console.log(e);
          }
        },
        getCurrentDeviceInfo: async () => {
          try {

            firestore()
              .collection('users')
              .doc(user.uid)
              .get()
              .then((documentSnapshot) => {
                let deviceToken = 'NA';
                if (documentSnapshot.exists) {
                  deviceToken = documentSnapshot.data().deviceToken;
                  setdeviceToken(deviceToken);

                }
              })

          } catch (e) {
            console.log(e);
          }
        }
      }}>
      {children}
    </ProfileContext.Provider>
  );
};
