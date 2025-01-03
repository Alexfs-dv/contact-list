import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button, ErrorMessage, Titulo, FormContainer } from './styles';
import { addContact } from '../../store/reducers/contactsSlice';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('Amigos');
  const [note, setNote] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(name.trim().length < 3) {
      setError('Por favor, insira um nome válido!');
      return;
    }

    const newContact = { id: Date.now(), name, phone, email, group, note };
    dispatch(addContact(newContact));
    setName('');
    setPhone('');
    setEmail('');
    setGroup('Amigos');
    setNote('');

    navigate('/');
  };

  return (
    <FormContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PhoneInput
          country={'br'}
          placeholder="Telefone"
          value={phone}
          onChange={setPhone}
          inputStyle={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px',
            marginBottom: '16px',
          }}
          containerStyle={{
            width: '100%',
          }}
          buttonStyle={{
            border: '1px silid #ddd',
            borderRadius: '4px 0 0 4px',
          }}
          masks={{ br: '(..) . ....-....' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          <option value="Amigos">Amigos</option>
          <option value="Família">Família</option>
          <option value="Trabalho">Trabalho</option>
        </select>
        <textarea
          placeholder="Anotações"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <Button type="submit">Adicionar Contato</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
