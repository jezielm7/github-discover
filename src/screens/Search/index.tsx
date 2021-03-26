import React, { useState } from 'react';
import { Keyboard, Text } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import User from '../../types/User';
import Repo from '../../types/Repo';

import api from '../../services/api';

import FilterIcon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import UserItem from '../../components/UserItem';
import RepoItem from '../../components/RepoItem';

import normalize from '../../utils/normalize';

import {
  Container,
  FilterButton,
  SearchForm,
  Label,
  Input,
  MoreInfoButton,
  MoreInfoText,
  ScrollList,
} from './styles';

function Search() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  const [user, setUser] = useState<User>({} as User);
  const [repositories, setRepositories] = useState<Repo[]>([]);

  const [username, setUsername] = useState('');
  const [usernameRepo, setUsernameRepo] = useState('');

  const [favorites, setFavorites] = useState<number[]>([]);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  };

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoredRepos = JSON.parse(response);
        const favoredReposIds = favoredRepos.map((repo: Repo) => {
          return repo.id;
        })

        setFavorites(favoredReposIds);
      }
    });
  };

  async function handleFiltersSubmit() {
    loadFavorites();

    if (usernameRepo) {
      const repoResponse = await api.get(`/users/${usernameRepo}/repos`);

      setUser({} as User);
      setRepositories(repoResponse.data);
      setUsernameRepo('');

    } else if (username) {
      const userResponse = await api.get(`/users/${username}`);

      setUser(userResponse.data);
      setRepositories([]);
      setUsername('');
    }

    Keyboard.dismiss();
    setIsFiltersVisible(!isFiltersVisible);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <Container>
      <Header
        title="Pesquise por um usuário ou repositórios"
        headerRight={(
          <FilterButton onPress={handleToggleFiltersVisible}>
            <FilterIcon name="filter" size={normalize(20)} color="#fff" />
          </FilterButton>
        )}
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Pesquise um usuário</Label>
            <Input
              value={username}
              onChangeText={text => setUsername(text)}
              placeholder="Digite um usuário"
              placeholderTextColor="#c1bccc"
              autoCapitalize="none"
            />

            <Label>Listar repositórios de um usuário</Label>
            <Input
              value={usernameRepo}
              onChangeText={text => setUsernameRepo(text)}
              placeholder="Digite um usuário"
              placeholderTextColor="#c1bccc"
              autoCapitalize="none"
            />

            <MoreInfoButton onPress={handleFiltersSubmit}>
              <MoreInfoText>Filtrar</MoreInfoText>
            </MoreInfoButton>
          </SearchForm>
        )}
      </Header>

      <ScrollList
        showsVerticalScrollIndicator={false}
      >
        {!!user.id ? (
          <UserItem user={user} />
        )
          :
          repositories.map((repo: Repo) => {
            return (
              <RepoItem
                key={repo.id}
                repo={repo}
                favored={favorites.includes(repo.id)}
              />
            )
          })
        }
      </ScrollList>
    </Container>
  );
};

export default Search;
