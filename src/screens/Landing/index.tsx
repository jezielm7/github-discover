import React from 'react';

import { useNavigation } from '@react-navigation/native';

import octocatImg from '../../assets/images/octocat.png';
import landingImg from '../../assets/images/background.png';

import {
  Container,
  ImageBackground,
  Header,
  Title,
  ImageContainer,
  Image,
  ImageText,
  ButtonContainer,
  Button,
  BtnText,
} from './styles';

function Landing() {
  const navigation = useNavigation();

  function navigateToSearch() {
    navigation.navigate('Search');
  }

  return (
    <Container>
      <ImageBackground source={landingImg}> 

      <Header>
        <Title>GitHub Discover</Title>
      </Header>

      <ImageContainer>
        <Image
          source={octocatImg}
          style={{ resizeMode: 'contain' }}
        />

        <ImageText>Está procurando algo?</ImageText>
      </ImageContainer>

      <ButtonContainer>
        <Button onPress={navigateToSearch}>
          <BtnText>Pesquisar</BtnText>
        </Button>
      </ButtonContainer>
      </ImageBackground>
    </Container>
  );
};

export default Landing;