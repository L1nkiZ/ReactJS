import { useEffect, useRef, useState } from 'react';
import { Character } from '../../../../models/Character';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { addCharacter } from '../../../../reducers/characters/reducer';

const AddCharacterForm: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const idNextCharacter = useAppSelector((state) => state.characters.list.length);

  const [nameToAdd, setNameToAdd] = useState('');
  const [titleToAdd, setTitleToAdd] = useState('');
  const [familyToAdd, setFamilyToAdd] = useState('');
  const [imageURLToAdd, setImageURLToAdd] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, []);

  const onAddCharacter = () => {
    const characterToAdd =
      Character(
        idNextCharacter,
        nameToAdd,
        imageURLToAdd,
        titleToAdd,
        familyToAdd
      );

    dispatch(addCharacter(characterToAdd));
  };

  return (
    <div>
      <h3>Add new character</h3>
      Name:
      <input
        ref={nameInputRef}
        type="text"
        onChange={(e) => setNameToAdd(e.target.value)}
      /><br/>

      Title:
      <input
        type="text"
        onChange={(e) => setTitleToAdd(e.target.value)}
      /><br/>

      Family:
      <input
        type="text"
        onChange={(e) => setFamilyToAdd(e.target.value)}
      /><br/>

      Image URL:
      <input
        type="text"
        onKeyUp={(e) => {
          if (e.key === 'Enter')
            onAddCharacter();
        }}
        onChange={(e) => setImageURLToAdd(e.target.value)}
      /><br/>
      <br/>

      <button onClick={() => onAddCharacter()}>
        Add
      </button>
    </div>
  );
};

export default AddCharacterForm;