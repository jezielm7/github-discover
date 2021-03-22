import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/icons/back.png';
import logoImg from '../../assets/images/github.png';

import {
  Container,
  TopBar,
  BackButton,
  BackImage,
  LogoImage,
  HeaderContainer,
  Title,
} from './styles';

interface HeaderProps {
  title: string;
  children?: ReactNode;
  headerRight?: ReactNode;
}

function Header({ title, headerRight, children }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <BackImage source={backIcon} resizeMode="contain" />
        </BackButton>

        <LogoImage source={logoImg} resizeMode="contain" />
      </TopBar>

      <HeaderContainer>
        <Title>{title}</Title>
        {headerRight}
      </HeaderContainer>
      
      {children}
    </Container>
  );
};

export default Header;
