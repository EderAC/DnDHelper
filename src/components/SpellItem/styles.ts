import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
export const Content = styled.View`
  background-color: #5d5a66;
  padding: 15px 25px;
  border-radius: 10px;
  margin: 0 10px 10px;
`;

export const ContentTitle = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const ContentDescription = styled.Text`
  font-size: 15px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const SpellLevelContainer = styled.View`
  height: 40px;
  background: #474352;
  border-radius: 10px;
  margin: 0 0 10px 0;

  justify-content: center;
  align-items: center;
`;

export const SpellLevel = styled.Text`
  font-size: 25px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;
