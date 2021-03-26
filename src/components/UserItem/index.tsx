import React from 'react';
import { Linking } from 'react-native';

import User from '../../types/User';

import whatsappIcon from '../../assets/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Username,
  Biography,
  Footer,
  ButtonsContainer,
  ContactButton,
  ContactImage,
  ContactText,
} from './styles';

interface UserItemProps {
  user: User;
}

function UserItem({ user }: UserItemProps) {
  function navigateToGithub() {
    Linking.openURL(`whatsapp://send?phone=+5581984533591`);
  }

  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: user.avatar_url }}
        />

        <ProfileInfo>
          <Name>{user.name}</Name>
          <Username>@{user.login}</Username>
        </ProfileInfo>
      </Profile>

      <Biography>
        {user.bio}
      </Biography>

      <Footer>
        <ButtonsContainer>
          <ContactButton onPress={navigateToGithub} >
            <ContactImage source={whatsappIcon} />
            <ContactText>Entrar em contato</ContactText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>

    </Container>
  );
};

export default UserItem;
