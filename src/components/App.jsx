import { nanoid } from 'nanoid';
import { Bookform } from './Bookform/Bookform';
import { Searcher } from './Searcher/Searcher';
import { Contacts } from './Contacts/Contacts';
import { Box, Title } from './Bookform/Bookform-styled';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';


const LS_KEY = 'savedContacts';

const setToLocalStorage = contacts => {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }
};

const getFromLocalStoreage = () => {
  try {
    const contacts = localStorage.getItem(LS_KEY);
    if (contacts) {
      return JSON.parse(contacts);
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};


export const App = () => {
  const [contacts, setContacts] = useState(() => getFromLocalStoreage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setToLocalStorage(contacts);
  }, [contacts]);

  const submitForm = (values, { resetForm }) => {
    const isInclude = contacts.find(
      person => person.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isInclude) {
      Notiflix.Notify.failure(` ${values.name} is already in contacts.`);
      return;
    }

    const profile = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    setContacts(state => [...state, profile]);
    resetForm();
  };

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const delateContact = id => {
    setContacts(state => state.filter(person => person.id !== id));
  };

  const filtredContacts = contacts.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );


    return (
      <Box>
        <Title>Phonebook</Title>
        <Bookform submitForm={submitForm} />
        <Searcher onFilter={onFilter} filter={filter} />
        <Contacts
           contactsInfo={filtredContacts}
           delateContact={delateContact}
        />
      </Box>
    );
  }
