import React from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, Button, BtnText } from './styles';

function Landing() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Text>Landing</Text>
      <Button onPress={navigateToHome}>
        <BtnText>Navigate</BtnText>
      </Button>
    </Container>
  );
};

export default Landing;