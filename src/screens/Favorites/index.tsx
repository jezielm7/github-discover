import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import Repo from '../../types/Repo';

import Header from '../../components/Header';
import RepoItem from '../../components/RepoItem';

import {
  Container,
  ScrollList,
} from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoredRepos = JSON.parse(response);

        setFavorites(favoredRepos);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <Container>
      <Header title="Meus Favoritos" />

      <ScrollList
        showsVerticalScrollIndicator={false}
      >
        {favorites.map((repo: Repo) => {
          return (
            <RepoItem
              key={repo.id}
              repo={repo}
              favored
            />
          )
        })}
      </ScrollList>
    </Container>
  );
};

export default Favorites;
