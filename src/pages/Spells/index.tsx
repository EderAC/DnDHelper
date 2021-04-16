import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from './styles';

const Spells: React.FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <h1>Pagina de Spells</h1>
      </Container>
    </ScrollView>
  );
};

export default Spells;
