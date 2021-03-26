import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import normalize from '../../utils/normalize';

export const Container = styled.View`
  border: 1px #e6e6f0;

  overflow: hidden;
  background-color: #fff;

  border-radius: ${normalize(8)}px;
  margin-bottom: ${normalize(16)}px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${normalize(24)}px;
`;

export const Avatar = styled.Image`
  background-color: #ccc;

  width: ${normalize(64)}px;
  height: ${normalize(64)}px;
  border-radius: ${normalize(32)}px;
`;

export const ProfileInfo = styled.View`
  margin-left: ${normalize(16)}px;
`;

export const Name = styled.Text`
  color: #32264d;
  font-size: ${normalize(20)}px;
`;

export const Username = styled.Text`
  color: #6a6180;
  margin-top: 4px;
  font-size: ${normalize(12)}px;
`;

export const Biography = styled.Text`
  color: #6a6180;

  margin: 0 ${normalize(24)}px;
  font-size: ${normalize(14)}px;
  line-height: ${normalize(24)}px;
`;

export const Footer = styled.View`
  align-items: center;
  background-color: #fafafc;

  padding: ${normalize(24)}px;
  margin-top: ${normalize(24)}px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: ${normalize(16)}px;
`;

export const FavButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: #8257e5;

  width: ${normalize(56)}px;
  height: ${normalize(56)}px;
  margin-right: ${normalize(8)}px;
  border-radius: ${normalize(8)}px;
`;

export const FavImage = styled.Image``;

export const ContactButton = styled(RectButton)`
  flex: 1;

  height: ${normalize(56)}px;
  margin-right: ${normalize(8)}px;
  border-radius: ${normalize(8)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #36d17f;
`;

export const ContactImage = styled.Image`
  width: ${normalize(30)}px;
  height: ${normalize(30)}px;
`;

export const ContactText = styled.Text`
  color: #fff;

  font-size: ${normalize(16)}px;
  margin-left: ${normalize(16)}px;
`;
