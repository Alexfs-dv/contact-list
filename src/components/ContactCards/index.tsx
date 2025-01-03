import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as S from './styles';
import React, { useState } from 'react';

interface ContactCardsProps {
  setSelectedGroup: (group: string) => void;
}

const ContactCards: React.FC<ContactCardsProps> = ({ setSelectedGroup }) => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [selectedGroup, setSelectedGroupState] = useState<string>('');

  const countByGroup = (group: string) => {
    return contacts.filter((contact) => contact.group === group).length;
  };
  const totalContacts = contacts.length;

  const handleSelectGroup = (group: string) => {
    setSelectedGroup(group);
    setSelectedGroupState(group);
  };

  return (
    <S.CardContainer>
      <S.Card
        isSelected={selectedGroup === 'Amigos'}
        onClick={() => handleSelectGroup('Amigos')}
      >
        <h3>Amigos</h3>
        <p>{countByGroup('Amigos')} contatos</p>
      </S.Card>
      <S.Card
        isSelected={selectedGroup === 'Família'}
        onClick={() => handleSelectGroup('Família')}
      >
        <h3>Família</h3>
        <p>{countByGroup('Família')} contatos</p>
      </S.Card>
      <S.Card
        isSelected={selectedGroup === 'Trabalho'}
        onClick={() => handleSelectGroup('Trabalho')}
      >
        <h3>Trabalho</h3>
        <p>{countByGroup('Trabalho')} contatos</p>
      </S.Card>
      <S.Card
        isSelected={selectedGroup === ''}
        onClick={() => handleSelectGroup('')}
      >
        <h3>Todos</h3>
        <p>{totalContacts} contatos</p>
      </S.Card>
    </S.CardContainer>
  );
};

export default ContactCards;
