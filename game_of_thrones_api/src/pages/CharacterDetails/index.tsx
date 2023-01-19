import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { staticCharacters } from '../CharactersList';
import { Character, CharacterAPI } from '../../models/Character';
import axios from 'axios';
import Loader from '../../components/Loader';

const CharacterDetails = () => {
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const id = Number(params.id);

  useEffect(() => {
    if (isNaN(id)) {
      navigate('/characters');
    }
    else {
      axios.get<CharacterAPI>('https://thronesapi.com/api/v2/Characters/' + id)
        .then((res) => {
          const char = res.data;

          setCharacter(
            Character(
              char.id,
              char.fullName,
              char.imageUrl,
              char.title,
              char.family
            )
          );
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      {loading && <Loader />}

      {!loading && !character &&
        <div>
          Unknown character<br/>
          <Link to="/characters">Go back to list</Link>
        </div>
      }

      {!loading && character &&
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