import React from 'react';

import { Text } from 'react-native';
import Header from '../../components/Header';

import { Container } from './styles';

function Search() {
  return (
    <Container>
      <Header title="Pesquise por um usuário ou repositório" />
    </Container>
  );
};

export default Search;
