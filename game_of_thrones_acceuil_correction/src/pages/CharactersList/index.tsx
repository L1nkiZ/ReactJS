import { Character } from '../../models/Character';
import { useState } from 'react';
import AddCharacterForm from './components/AddCharacterForm';
import { useNavigate } from 'react-router-dom';

export const staticCharacters: Character[] = [
  Character(0, 'Arya Stark', 'https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/03/04/01/Game-of-Thrones-mais-au-fait-qui-se-trouve-sur-la-liste-macabre-d-Arya-Stark.jpg', 'No one', 'Stark'),
  Character(1, 'Jon Snow', 'https://www.leparisien.fr/resizer/XmkKKE86EPLIDLLSAQqfUx-oD58=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/2IYSXIFWJQSROC3OJCVZNGMLFE.jpg', 'King in the North', 'Stark'),
  Character(2, 'Lord Varys', 'data:image/jpeg;base64,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', 'Master of whisperers', 'None')
];

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>(staticCharacters);
  const navigate = useNavigate();

  const onAddCharacter = (c: Character) => {
    setCharacters(characters.concat(c));
  };

  return (
    <div>
      <h1>Characters list</h1>

      <AddCharacterForm
        idNextCharacter={characters.length}
        onAddCharacter={onAddCharacter}
      />

      <ul>
        {characters.map((c: Character) =>
          <li key={c.id} onClick={() => navigate('/character/' + c.id)}>
            {c.id})&nbsp;
            {c.name}&nbsp;
            <img
              style={{maxWidth: '100px', maxHeight: '100px'}}
              alt={c.name}
              src={c.imageUrl}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default CharactersList;