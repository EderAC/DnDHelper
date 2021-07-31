import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import SpellItem from '../../components/SpellItem';
import { Container, Title, TitleContainer } from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = require('../../../spellByClass-used.json');

type ParamList = {
  Spells: {
    classeName: string;
  };
};
interface SpellsData {
  zero: string[];
  one: string[];
  two: string[];
}

const Spells: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [spells, setSpells] = useState<SpellsData>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const route = useRoute<RouteProp<ParamList, 'Spells'>>();

  useEffect(() => {
    const { classeName } = route.params;
    const spellsByClass = data[classeName];
    setSpells(spellsByClass);
    setSelectedClass(classeName);
    setIsLoaded(true);
  }, [route.params]);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        {isLoaded && (
          <>
            <TitleContainer>
              <Title>{selectedClass.toUpperCase()}</Title>
            </TitleContainer>

            <SpellItem spells={spells} />
          </>
        )}
      </Container>
    </ScrollView>
  );
};

export default Spells;
