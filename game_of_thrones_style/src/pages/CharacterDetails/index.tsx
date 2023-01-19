import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { staticCharacters } from '../CharactersList';

const CharacterDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const id = Number(params.id);

  useEffect(() => {
    if (isNaN(id)) {
      navigate('/characters');
    }
  }, []);

  if (!isNaN(id)) {
    const character = staticCharacters[id];

    if (character) {
      const {name, title, family, imageUrl} = character;

      return (
        <div className="card">
            <img 
                src={imageUrl}
                alt="Avatar" 
                style={{ width: '100%'}}
                >
            </img>
            <div className="container">
                <p>{id}</p>
                <h2>{name} {family}</h2>
                <h4>{title}</h4>
            </div>
            <Link to="/characters">Go back to list</Link>
        </div>

      );
    }
    else {
      return (<div>
        Unknown character<br/>
        <Link to="/characters">Go back to list</Link>
      </div>);
    }
  }
  else {
    return (<div>
      Invalid ID<br/>
      <Link to="/characters">Go back to list</Link>
    </div>);
  }
};

export default CharacterDetails;