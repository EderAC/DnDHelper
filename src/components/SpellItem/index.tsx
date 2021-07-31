import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { uuid } from 'uuidv4';

import {
  Container,
  Content,
  SpellLevel,
  SpellLevelContainer,
  ContentTitle,
  ContentDescription,
} from './styles';

interface SpellsData {
  zero: string[];
  one: string[];
  two: string[];
}

interface SpellList {
  spells: SpellsData | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const spellList = require('../../../spells.json');

interface SpellDetails {
  uuid?: string;
  id: string;
  school: string;
  cast: string;
  range: string;
  component: string;
  duration: string;
  material: string;
  description: string;
}

const SpellItem: React.FC<SpellList> = ({ spells }) => {
  const [spellDetailsZero, setSpellDetailZero] = useState<SpellDetails[]>([]);
  const [spellDetailsOne, setSpellDetailOne] = useState<SpellDetails[]>([]);
  const [spellDetailsTwo, setSpellDetailTwo] = useState<SpellDetails[]>([]);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      spells?.zero.map(spellZero =>
        setSpellDetailZero(oldSpell => [...oldSpell, spellList[spellZero]]),
      );
      spells?.one.map(spellOne =>
        setSpellDetailOne(oldSpell => [...oldSpell, spellList[spellOne]]),
      );

      spells?.two.map(spellTwo =>
        setSpellDetailTwo(oldSpell => [...oldSpell, spellList[spellTwo]]),
      );
    }

    loadStoragedData();
  }, [spells?.one, spells?.two, spells?.zero]);

  return (
    <Container>
      <SpellLevelContainer>
        <SpellLevel>Magias de nível 0</SpellLevel>
      </SpellLevelContainer>
      {spellDetailsZero &&
        spellDetailsZero.map(spellZero => {
          return (
            <Content key={spellZero?.uuid}>
              <ContentTitle>{spellZero?.id.toUpperCase()}</ContentTitle>
              <ContentDescription>{spellZero?.description}</ContentDescription>
            </Content>
          );
        })}

      <SpellLevelContainer>
        <SpellLevel>Magias de nível 1</SpellLevel>
      </SpellLevelContainer>
      {spellDetailsOne &&
        spellDetailsOne.map(spellOne => {
          return (
            <Content key={spellOne?.uuid}>
              <ContentTitle>{spellOne?.id.toUpperCase()}</ContentTitle>
              <ContentDescription>{spellOne?.description}</ContentDescription>
            </Content>
          );
        })}

      <SpellLevelContainer>
        <SpellLevel>Magias de nível 2</SpellLevel>
      </SpellLevelContainer>
      {spellDetailsTwo &&
        spellDetailsTwo.map(spellTwo => {
          return (
            <Content key={spellTwo?.uuid}>
              <ContentTitle>{spellTwo?.id.toUpperCase()}</ContentTitle>
              <ContentDescription>{spellTwo?.description}</ContentDescription>
            </Content>
          );
        })}
    </Container>
  );
};

export default SpellItem;
