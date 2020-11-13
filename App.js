import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Application from './src';


export default function App() {
  return (
    <PaperProvider>
      <Application/>
    </PaperProvider>
  );
}
