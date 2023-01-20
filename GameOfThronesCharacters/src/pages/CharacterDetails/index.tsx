import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Character } from '../../models/Character';
import Loader from '../../components/Loader';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCharacters } from '../../reducers/characters/reducer';

const CharacterDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { list, isFetchingCharacters } = useAppSelector((state) => state.characters);

  const id = Number(params.id);

  const character: Character | undefined =
    isNaN(id) ?
      undefined :
      list.find((c: Character) => c.id === id);

  useEffect(() => {
    if (isNaN(id)) {
      navigate('/characters');
    }
    else if (list.length <= 0) {
      dispatch(fetchCharacters());
    }
  }, []);

  return (
    <div>
      {isFetchingCharacters && <Loader />}

      {!isFetchingCharacters && !character &&
        <div>
          Unknown character<br/>
          <Link to="/characters">Go back to list</Link>
        </div>
      }

      {!isFetchingCharacters && character &&
        <div>
          <img
            style={{maxWidth: '100px', maxHeight: '100px'}}
            alt={character.name}
            src={character.imageUrl}
          />
          <ul>
            <li>ID: {character.id}</li>
            <li>Name: {character.name}</li>
            <li>Title: {character.title}</li>
            <li>Family: {character.family}</li>
          </ul>
          <Link to="/characters">Go back to list</Link>
        </div>
      }
    </div>
  );
};

export default CharacterDetails;