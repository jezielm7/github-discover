import styled from 'styled-components/native';
import normalize from '../../utils/normalize';

export const Container = styled.View`
  background-color: #f0f0f7;
`;

export const ScrollList = styled.ScrollView`
  margin-top: ${normalize(-40)}px;
  padding: 0 ${normalize(16)}px ${normalize(16)}px;
`;