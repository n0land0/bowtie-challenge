import { Button, FormControl, Input } from '@chakra-ui/react';
import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  FormEvent,
  useContext,
  useState,
} from 'react';

import { getProjects, updateProject } from '../lib/api';
import { AppContext } from '../lib/context';

interface NameChangeFormProps {
  projectId: number | undefined;
  projectName: string;
  toggleIsEditingName: () => void;
}

const NameChangeForm: FC<NameChangeFormProps> = ({
  projectId,
  projectName,
  toggleIsEditingName,
}) => {
  const { setProjects } = useContext(AppContext);

  const [inputValue, setInputValue] = useState(projectName);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (projectId) {
      updateProject(inputValue.trim(), projectId).then(() =>
        getProjects().then((projectData) => {
          setProjects(projectData);
        })
      );
    }
    toggleIsEditingName();
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <FormControl
        isRequired
        display='flex'
        justifyContent='center'
        alignItems='center'
        w='100%'
      >
        <Input
          type='text'
          value={inputValue}
          onChange={handleChange}
          bg='white'
          fontSize='xl'
          w='70%'
          m='2'
        />
        <Button type='submit' colorScheme='teal' m='2'>
          save changes
        </Button>
      </FormControl>
    </form>
  );
};

export default NameChangeForm;
