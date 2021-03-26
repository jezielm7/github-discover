import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Repo from '../../types/Repo';

import favIcon from '../../assets/icons/favorite.png';
import unFavIcon from '../../assets/icons/unfavorite.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Biography,
  Footer,
  ButtonContainer,
  FavButton,
  FavImage,
  FavText,
} from './styles';

interface RepoItemProps {
  repo: Repo;
  favored: boolean;
}

function SearchItem({ repo, favored }: RepoItemProps) {
  const [isFavored, setIsFavored] = useState(favored);

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavored) {
      const favoriteIndex = favoritesArray.findIndex((repoItem: Repo) => {
        return repoItem.id === repo.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavored(false);
    } else {
      favoritesArray.push(repo);

      setIsFavored(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  };

  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: repo.owner.avatar_url }}
        />

        <ProfileInfo>
          <Name numberOfLines={1} >{repo.name}</Name>
        </ProfileInfo>
      </Profile>

      {repo.description == null ?
        <Biography>
          O repositório não possui descrição.
        </Biography>
        :
        <Biography>
          {repo.description}
        </Biography>
      }

      <Footer>
        <ButtonContainer>
          <FavButton
            onPress={handleToggleFavorite}
            style={isFavored ? styles.favored : {}}
          >
            {
              isFavored
                ? <FavImage source={unFavIcon} />
                : <FavImage source={favIcon} />
            }

            {
              isFavored
                ? <FavText>Remover dos favoritos</FavText>
                : <FavText>Adicionar aos favoritos</FavText>
            }
          </FavButton>
        </ButtonContainer>
      </Footer>

    </Container>
  );
};

const styles = StyleSheet.create({
  favored: {
    backgroundColor: '#e33d3d',
  }
});

export default SearchItem;
