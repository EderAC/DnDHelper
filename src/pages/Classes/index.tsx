import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';

import { Container, ContainerButtons, Title, Logo } from './styles';

interface ClassesProps {
  id: number;
  name: string;
}

const Classes: React.FC = () => {
  const [classes, setClasses] = useState<ClassesProps[]>([]);

  const navigation = useNavigation();
  useEffect(() => {
    const allClasses = [
      { id: 1, name: 'Bardo' },
      { id: 2, name: 'Bruxo' },
      { id: 3, name: 'Clérigo' },
      { id: 4, name: 'Druida' },
      { id: 5, name: 'Feiticeiro' },
      { id: 6, name: 'Mago' },
      { id: 7, name: 'Paladino' },
      { id: 8, name: 'Patrulheiro' },
    ];

    setClasses(allClasses);
  }, []);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Logo source={logoImg} />
        <Title>SELECIONE A CLASSE</Title>
        <ContainerButtons>
          {classes &&
            classes.map(classe => {
              return (
                <Button
                  key={classe.id}
                  onPress={() => {
                    navigation.navigate('Spells', {
                      classeName: classe.name,
                    });
                  }}
                >
                  {classe.name}
                </Button>
              );
            })}
        </ContainerButtons>
      </Container>
    </ScrollView>
  );
};

export default Classes;
