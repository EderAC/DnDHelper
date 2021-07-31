import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  /* padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px; */
`;
export const Title = styled.Text`
  font-size: 30px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const Logo = styled.Image`
  max-width: 150px;
  max-height: 150px;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin: 50px 30px;
`;
