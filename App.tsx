import React from 'react';
import { StatusBar } from 'react-native';
import StackRouter from './src/routes/stack.routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#400672" />
      <StackRouter />
    </>
  );
}

export default App;