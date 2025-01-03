import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../store/reducers/contactsSlice';
import { BsTelephone, BsEnvelope, BsPlus, BsDash } from 'react-icons/bs';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import PhoneInput from 'react-phone-input-2';
import Modal from '../Modal';
import * as S from './styles';

interface ContatoProps {
  contact: {
    id: number;
    name: string;
    phone: string;
    email: string;
    group: string;
    note: string;
  };
  isSelected: boolean;
  onSelect: () => void;
  onEdit: (editing: boolean) => void;
  isNewContact?: boolean; // Adicionando a prop isNewContact
}

const Contato: React.FC<ContatoProps> = ({ contact, isSelected, onSelect, onEdit, isNewContact }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [editName, setEditName] = useState(contact.name);
  const [editPhone, setEditPhone] = useState(contact.phone);
  const [editEmail, setEditEmail] = useState(contact.email);
  const [editGroup, setEditGroup] = useState(contact.group);
  const [editNote, setEditNote] = useState(contact.note);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(contact.id));
    setShowModal(false);
    window.location.reload(); // Recarregar a página após deletar o contato
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateContact({ id: contact.id, name: editName, phone: editPhone, email: editEmail, group: editGroup, note: editNote }));
    setIsEditing(false);
    onEdit(false);
    window.location.reload(); // Recarregar a página após salvar as alterações
  };

  const handleCancel = () => {
    setIsEditing(false);
    onEdit(false);
    setEditName(contact.name);
    setEditPhone(contact.phone);
    setEditEmail(contact.email);
    setEditGroup(contact.group);
    setEditNote(contact.note);
  };

  const formatPhoneNumber = (phone: string) => {
    const phoneNumber = parsePhoneNumberFromString(phone, 'BR');
    return phoneNumber ? phoneNumber.formatInternational() : phone;
  };

  return (
    <S.Card isSelected={isSelected} onClick={onSelect}>
      {!isNewContact && (
        <div className="header">
          {!isEditing && <h3>{contact.name}</h3>}
          {!isEditing && (
            <button style={{ backgroundColor: 'transparent' }} onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? <BsDash className="plusDash-icon" /> : <BsPlus className="plusDash-icon" />}
            </button>
          )}
        </div>
      )}
      {showDetails && (
        <div className="details">
          {isEditing ? (
            <>
              <label htmlFor='name'>Nome:</label>
              <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
              <label htmlFor='phone'>Telefone:</label>
              <PhoneInput country={'br'} value={editPhone} onChange={(value) => setEditPhone(value)} masks={{ br: '(..) . ....-....' }}/>
              <label htmlFor='email'>E-mail:</label>
              <input type="text" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
              <label htmlFor='group'>Grupo:</label>
              <select value={editGroup} onChange={(e) => setEditGroup(e.target.value)}>
                <option value="Família">Família</option>
                <option value="Amigos">Amigos</option>
                <option value="Trabalho">Trabalho</option>
              </select>
              <label htmlFor='note'>Anotações:</label>
              <textarea id='note' value={editNote} onChange={(e) => setEditNote(e.target.value)} />
              <button className='btn-save' onClick={handleSave}>Salvar</button>
              <button className='btn-cancel' onClick={handleCancel}>Cancelar</button>
            </>
          ) : (
            <>
              <p><BsTelephone className="icon" /> {formatPhoneNumber(contact.phone)}</p>
              <p><BsEnvelope className="icon" /> {contact.email}</p>
              <p className="contactGroup">{contact.group}</p>
              <p>Anotações:</p>
              <textarea id='note' readOnly>{contact.note}</textarea>
              <button className='btn-edit' onClick={handleEdit}>Editar</button>
              <button className='btn-delete' onClick={handleDelete}>Deletar</button>
            </>
          )}
        </div>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
        message="Você tem certeza que deseja deletar este contato?"
      />
    </S.Card>
  );
};

export default Contato;
