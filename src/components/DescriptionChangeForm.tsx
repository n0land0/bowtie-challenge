import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useContext,
  useState,
} from 'react';

interface DescriptionChangeFormProps {
  newDescription: string;
  handleDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSaveDescription: () => void;
}

const DescriptionChangeForm: FC<DescriptionChangeFormProps> = ({
  newDescription,
  handleDescriptionChange,
  handleSaveDescription,
}) => {
  return (
    <form onSubmit={handleSaveDescription}>
      <input
        type='text'
        value={newDescription}
        onChange={handleDescriptionChange}
      />
      <button>save description</button>
    </form>
  );
};

export default DescriptionChangeForm;
