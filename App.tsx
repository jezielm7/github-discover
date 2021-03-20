import React from 'react';
import { StatusBar } from 'react-native';
import StackRouter from './src/routes/stack.routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#02060F" />
      <StackRouter />
    </>
  );
}

export default App;