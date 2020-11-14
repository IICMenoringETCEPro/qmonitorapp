import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Application from './src';
import Providers from './src/navigation';


export default function App() {
  return (
    <PaperProvider>
      <Providers/>
    </PaperProvider>
  );
}
