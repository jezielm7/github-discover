import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  border: 1px #e6e6f0;

  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: #fff;
`;

export const Profile = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #ccc;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #32264d;
  font-size: 20px;
`;

export const Username = styled.Text`
  color: #6a6180;
  margin-top: 4px;
  font-size: 12px;
`;

export const Biography = styled.Text`
  color: #6a6180;
  margin: 0 24px;
  font-size: 14px;
  line-height: 24px;
`;

export const Footer = styled.View`
  padding: 24px;
  margin-top: 24px;
  align-items: center;
  background-color: #fafafc;
`;

export const ButtonsContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
`;

export const FavButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  margin-right: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: #8257e5;
`;

export const FavImage = styled.Image``;

export const MoreInfoButton = styled(RectButton)`
  flex: 1;
  height: 56px;
  margin-right: 8px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #113;
`;

export const MoreInfoImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const MoreInfoText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
