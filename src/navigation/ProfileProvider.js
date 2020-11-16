import React, { createContext, useState,useContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { AuthContext } from './AuthProvider';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

  const { user } = useContext(AuthContext);


  return (
    <ProfileContext.Provider
      value={{
        storeCurrentDeviceInfo: async (deviceToken) => {
          try {

            firestore()
              .collection('users')
              .doc(user.uid)
              .set(
                { deviceToken: deviceToken },
                { merge: true }
              )

          } catch (e) {
            console.log(e);
          }
        }
      }}>
      {children}
    </ProfileContext.Provider>
  );
};
