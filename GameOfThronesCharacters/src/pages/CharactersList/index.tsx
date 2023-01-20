import { Character } from '../../models/Character';
import { useEffect, useState } from 'react';
import AddCharacterForm from './components/AddCharacterForm';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useAppDispatch, useAppSelector } from '../../store';
import { deleteCharacter, fetchCharacters } from '../../reducers/characters/reducer';
import UpdateCharacterForm from './components/UpdateCharacterForm';

const CharactersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [characterToUpdate, setCharacterToUpdate] = useState<Character>();

  const { list, isFetchingCharacters } = useAppSelector((state) => state.characters);

  useEffect(() => {
    if (list.length <= 0)
      dispatch(fetchCharacters());
  }, []);

  const resetCharacterToUpdate = () => {
    setCharacterToUpdate(undefined);
  };

  return (
    <div>
      <h1>Characters list</h1>

      {characterToUpdate ?
        <UpdateCharacterForm
          characterToUpdate={characterToUpdate}
          onUpdateCharacter={resetCharacterToUpdate}
        /> :
        <AddCharacterForm />
      }

      {list.length <= 0 || isFetchingCharacters ?
        <Loader/> :
        <ul>
          {list.map((c: Character) =>
            <li key={c.id}>
              <span onClick={() => navigate('/character/' + c.id)}>
                {c.id})&nbsp;
                {c.name}&nbsp;
                <img
                  style={{maxWidth: '100px', maxHeight: '100px'}}
                  alt={c.name}
                  src={c.imageUrl}
                />&nbsp;
              </span>

              <button onClick={() => setCharacterToUpdate(c)}>Update</button>&nbsp;&nbsp;
              <button onClick={() => dispatch(deleteCharacter(c.id))}>Delete</button>
            </li>
          )}
        </ul>
      }
    </div>
  );
};

export default CharactersList;