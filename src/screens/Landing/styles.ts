import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 40px;
  justify-content: center;
  background-color: #02060F;
`;


export const ImageBackground = styled.ImageBackground`
  width: 102%;
  padding: 25px 10px;
`;

export const Header = styled.View`
  top: 25px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const ImageContainer = styled.View`
  top: 15px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
`;

export const ImageText = styled.Text`
  color: #fff;
  bottom: 20px;
  font-size: 22px;
`;

export const ButtonContainer = styled.View`
  top: 32px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 65px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #060e1f;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;