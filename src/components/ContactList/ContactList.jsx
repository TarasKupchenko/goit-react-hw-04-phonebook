import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.contactlist_btn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
