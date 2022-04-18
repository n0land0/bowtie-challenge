import React, { ChangeEvent, FC, FocusEvent, FormEvent } from 'react';

interface NameChangeFormProps {
  inputValue: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent) => void;
}

const NameChangeForm: FC<NameChangeFormProps> = ({
  inputValue,
  handleSubmit,
  handleChange,
  handleBlur,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type='text'
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <button>save changes</button>
  </form>
);

export default NameChangeForm;
