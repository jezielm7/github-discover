import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import normalize from '../../utils/normalize';

export const Container = styled.View`
  background-color: #8257e5;
  padding: ${normalize(40)}px;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled(BorderlessButton)``;

export const BackImage = styled.Image``;

export const LogoImage = styled.Image`
  width: ${normalize(80)}px;
  height: ${normalize(80)}px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #fff;
  margin: ${normalize(30)}px 0;
  font-size: ${normalize(24)}px;
  max-width: ${normalize(160)}px;
`;