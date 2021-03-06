import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* padding: 50px 0; */
  /* justify-content: center; */
  /* padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px; */
`;
export const Title = styled.Text`
  font-size: 30px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  /* margin: 64px 0 24px; */
`;

export const TitleContainer = styled.View`
  height: 60px;
  width: 100%;
  background: #ff9000;
  margin: 8px;

  justify-content: center;
  align-items: center;
`;
