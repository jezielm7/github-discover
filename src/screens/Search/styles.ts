import styled from 'styled-components/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import normalize from '../../utils/normalize';

export const Container = styled.View`
  background-color: #f0f0f7;
`;

export const FilterButton = styled(BorderlessButton)``;

export const SearchForm = styled.View`
  margin-bottom: ${normalize(20)}px;
`;

export const Label = styled.Text`
  color: #d4c2ff;
`;

export const Input = styled.TextInput`
  margin-top: 4px;

  height: ${normalize(54)}px;
  padding: 0 ${normalize(16)}px;
  border-radius: ${normalize(8)}px;
  margin-bottom: ${normalize(16)}px;

  color: #555;
  background-color: #eee;
  justify-content: center;
`;

export const MoreInfoButton = styled(RectButton)`
  height: ${normalize(56)}px;
  border-radius: ${normalize(8)}px;

  align-items: center;
  justify-content: center;
  background-color: #3d148c;
`;

export const MoreInfoText = styled.Text`
  color: #fff;
  font-size: ${normalize(16)}px;
`;


export const ScrollList = styled.ScrollView`
  margin-top: ${normalize(-40)}px;
  padding: 0 ${normalize(16)}px ${normalize(16)}px;
`;