import { Button, FormControl, Input } from '@chakra-ui/react';
import React, { ChangeEvent, FC } from 'react';

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
    <form
      onSubmit={handleSaveDescription}
      style={{ display: 'flex', width: '100%' }}
    >
      <FormControl display='flex' alignItems='center'>
        <Input
          type='text'
          value={newDescription}
          onChange={handleDescriptionChange}
          w='72%'
          m='1'
          boxShadow='base'
          bg='white'
          fontSize='xl'
        />
        <Button type='submit' m='1' colorScheme='blue' boxShadow='base'>
          save description
        </Button>
      </FormControl>
    </form>
  );
};

export default DescriptionChangeForm;
