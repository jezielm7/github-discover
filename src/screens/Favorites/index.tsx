import React from 'react';
import { Text } from 'react-native';

import Header from '../../components/Header';
import SearchItem from '../../components/SearchItem';

import { 
  Container,
  ScrollList, 
} from './styles';

function Favorites() {
  return (
    <Container>
      <Header title="Meus Favoritos" />

      <ScrollList>
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </ScrollList>
    </Container>
  );
};

export default Favorites;
