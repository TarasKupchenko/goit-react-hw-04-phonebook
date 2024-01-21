import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.filter}>
      Find contacts by name:
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
