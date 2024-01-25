//import React, { useState, useEffect } from 'react';
//import { ContactForm } from './ContactForm/ContactForm';
//import { ContactList } from './ContactList/ContactList';
//import { Filter } from './/Filter/Filter';
//import css from './App.module.css';

//export const App = () => {
//  const [contacts, setContacts] = useState([
//    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//  ]);
//  const [filter, setFilter] = useState('');

//  useEffect(() => {
//    const savedContacts = localStorage.getItem('contacts');

//    if (savedContacts) {
//      setContacts(JSON.parse(savedContacts));
//    }
//  }, []);

//  useEffect(() => {
//    localStorage.setItem('contacts', JSON.stringify(contacts));
//  }, [contacts]);

//  const addContact = contact => {
//    if (
//      contacts.some(
//        existingContact =>
//          existingContact.name.toLowerCase() === contact.name.toLowerCase()
//      )
//    ) {
//      alert(`Contact with name ${contact.name} already exists!`);
//      return;
//    }
//    setContacts(prevContacts => [...prevContacts, contact]);
//  };

//  const deleteContact = contactId => {
//    setContacts(prevContacts =>
//      prevContacts.filter(contact => contact.id !== contactId)
//    );
//  };

//  const changeFilter = newFilter => {
//    setFilter(newFilter);
//  };

//  const getVisibleContacts = () => {
//    const normalizedFilter = filter.toLowerCase();

//    return contacts.filter(contact =>
//      contact.name.toLowerCase().includes(normalizedFilter)
//    );
//  };

//  return (
//    <div className={css.container}>
//      <h1>Phonebook</h1>
//      <ContactForm onSubmit={addContact} />
//      <h2>Contacts</h2>
//      <Filter value={filter} onChange={changeFilter} />
//      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
//    </div>
//  );
//};

import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (
      contacts.some(
        existingContact =>
          existingContact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`Contact with name ${contact.name} already exists!`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
