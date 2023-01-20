import { useEffect, useRef, useState } from 'react';
import { Character } from '../../../../models/Character';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { updateCharacter } from '../../../../reducers/characters/reducer';

interface Props {
  characterToUpdate: Character,
  onUpdateCharacter: () => void
}

const UpdateCharacterForm: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { characterToUpdate } = props;

  const [nameToUpdate, setNameToUpdate] = useState(characterToUpdate.name);
  const [titleToUpdate, setTitleToUpdate] = useState(characterToUpdate.title);
  const [familyToUpdate, setFamilyToUpdate] = useState(characterToUpdate.family);
  const [imageURLToUpdate, setImageURLToUpdate] = useState(characterToUpdate.imageUrl);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef?.current?.focus();
  }, []);

  useEffect(() => {
    setNameToUpdate(characterToUpdate.name);
    setTitleToUpdate(characterToUpdate.title);
    setFamilyToUpdate(characterToUpdate.family);
    setImageURLToUpdate(characterToUpdate.imageUrl);
  }, [characterToUpdate]);

  const onUpdateCharacter = () => {
    const character =
      Character(
        characterToUpdate.id,
        nameToUpdate,
        imageURLToUpdate,
        titleToUpdate,
        familyToUpdate
      );

    dispatch(updateCharacter(character));

    props.onUpdateCharacter();
  };

  return (
    <div>
      <h3>Update character {characterToUpdate.id})</h3>
      Name:
      <input
        ref={nameInputRef}
        type="text"
        value={nameToUpdate}
        onChange={(e) => setNameToUpdate(e.target.value)}
      /><br/>

      Title:
      <input
        type="text"
        value={titleToUpdate}
        onChange={(e) => setTitleToUpdate(e.target.value)}
      /><br/>

      Family:
      <input
        type="text"
        value={familyToUpdate}
        onChange={(e) => setFamilyToUpdate(e.target.value)}
      /><br/>

      Image URL:
      <input
        type="text"
        value={imageURLToUpdate}
        onKeyUp={(e) => {
          if (e.key === 'Enter')
            onUpdateCharacter();
        }}
        onChange={(e) => setImageURLToUpdate(e.target.value)}
      /><br/>
      <br/>

      <button onClick={() => onUpdateCharacter()}>
        Update
      </button>
    </div>
  );
};

export default UpdateCharacterForm;