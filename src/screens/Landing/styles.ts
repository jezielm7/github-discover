import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import normalize from '../../utils/normalize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #02060F;
  padding: ${normalize(40)}px;
`;


export const ImageBackground = styled.ImageBackground`
  width: 102%;
  padding: ${normalize(25)}px ${normalize(10)}px;
`;

export const Header = styled.View`
  align-items: center;
  top: ${normalize(25)}px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${normalize(24)}px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  top: ${normalize(15)}px;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const ImageText = styled.Text`
  color: #fff;

  bottom: ${normalize(20)}px;
  font-size: ${normalize(22)}px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  top: ${normalize(32)}px; 
`;

export const Button = styled(RectButton)`
  width: 70%;
  height: ${normalize(65)}px;
  border-radius: ${normalize(10)}px;
  
  align-items: center;
  justify-content: center;
  background-color: #060e1f;
  
`;

export const BtnText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${normalize(20)}px;
`;