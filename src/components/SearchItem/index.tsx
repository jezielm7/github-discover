import React, { ReactNode } from 'react';

import favIcon from '../../assets/icons/favorite.png';
import unFavIcon from '../../assets/icons/unfavorite.png';

import githubImg from '../../assets/images/github.png';

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
  FavButton,
  FavImage,
  MoreInfoButton,
  MoreInfoImage,
  MoreInfoText,
} from './styles';

interface SearchItemProps {
  children?: ReactNode;
}

function SearchItem({ children }: SearchItemProps) {
  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: 'https://github.com/jezielm7.png' }}
        />

        <ProfileInfo>
          <Name>Jeziel Marques</Name>
          <Username>@jezielm7</Username>
        </ProfileInfo>
      </Profile>

      <Biography>
        Mobile Developer 👨🏻‍💻 {'\n'}
        Senior in bug development...{'\n'}
        Building solutions through apps
      </Biography>

      <Footer>
        <ButtonsContainer>
          <FavButton
          // onPress={handleToggleFavorite}
          // style={[
          //   isFavorited ? styles.favorited : {},
          // ]}
          >
            <FavImage source={favIcon} />
            {/* {
              isFavorited
                ? <Image source={unfavoriteIcon} />
                : <Image source={outlineHeartIcon} />
            } */}
          </FavButton>

          <MoreInfoButton>
            <MoreInfoImage source={githubImg} />
            <MoreInfoText>Mais informações</MoreInfoText>
          </MoreInfoButton>
        </ButtonsContainer>
      </Footer>

    </Container>
  );
};

export default SearchItem;
