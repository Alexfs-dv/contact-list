import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Contato from '../../components/Contact';
import * as S from './styles';
import { useEffect, useState } from 'react';
import { MainContainer } from '../../styles';

interface ContactListProps {
  selectedGroup: string;
  searchTerm: string;
}

const ContactList: React.FC<ContactListProps> = ({ selectedGroup, searchTerm }) => {
  const contactsFromStore = useSelector((state: RootState) => state.contacts.contacts);
  const [contacts, setContacts] = useState(contactsFromStore);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSelectContact = (id: number) => {
    setSelectedContactId(id);
  };

  const handleEdit = (editing: boolean) => {
    setIsEditing(editing);
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesGroup = selectedGroup ? contact.group === selectedGroup : true;
    const matchesSearch = contact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());

    return matchesGroup && matchesSearch;
  });

  // Ordenar os contatos filtrados por nome em ordem alfabética
  const sortedContacts = filteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {!isEditing && (
          <MainContainer>
        <S.List>
          {sortedContacts.map((contact) => (
            <S.ListItem key={contact.id}>
              <Contato
                contact={contact}
                isSelected={contact.id === selectedContactId}
                onSelect={() => handleSelectContact(contact.id)}
                onEdit={handleEdit}
              />
            </S.ListItem>
          ))}
        </S.List>
        </MainContainer>
      )}
    </>
  );
};

export default ContactList;
