import React from 'react';
import { AuthProvider } from './AuthProvider';
import { ProfileProvider } from './ProfileProvider';
import Routes from './Routes';

const Providers = () => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Routes />
      </ProfileProvider>
    </AuthProvider>
  );
}

export default Providers;