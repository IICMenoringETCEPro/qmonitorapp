import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {


  return (
    <ProfileContext.Provider
      value={{
        getCurrentUserInfo: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        }
      }}>
      {children}
    </ProfileContext.Provider>
  );
};
