import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = formData;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number.');
      return;
    }

    onSubmit({ id: nanoid(), name, number });
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.contact_form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className={css.form_name}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
