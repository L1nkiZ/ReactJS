import { Character } from '../../models/Character';
import { useState } from 'react';
import CharacterDetails from '../../components/CharacterDetails';
import AddCharacterForm from './components/AddCharacterForm';

const staticCharacters: Character[] = [
  Character(0, 
    'Arya Stark', 
    'https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/03/04/01/Game-of-Thrones-mais-au-fait-qui-se-trouve-sur-la-liste-macabre-d-Arya-Stark.jpg', 
    'Personne', 
    'Stark'
  ),
  Character(1, 
    'Jon Snow', 
    'https://www.leparisien.fr/resizer/XmkKKE86EPLIDLLSAQqfUx-oD58=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/2IYSXIFWJQSROC3OJCVZNGMLFE.jpg', 
    'Roi du Nord', 
    'Stark'
  ),
  Character(2, 
    'Lord Varys', 
    'https://images.ladepeche.fr/api/v1/images/view/5cdaadc93e454673e332754d/large/image.jpg', 
    'Maitre des chuchoteurs', 
    'None'
  ),
  Character(3, 
    'Daenerys ', 
    'https://www.beaboss.fr/Assets/Img/BREVE/2019/4/339304/Game-Thrones-quelle-entrepreneure-serait-Daenerys-Targaryen--F.jpg', 
    'Princesse Khaleesi, Mère des Dragons, Reine de Meeren, Daenerys du Typhon, l\'Imbrûlée, Mhysa, Briseuse de chaînes', 
    'Targaryen'
  )
];

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>(staticCharacters);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const onAddCharacter = (c: Character) => {
    setCharacters(characters.concat(c));
  };
  return (
    <div>
      <h1>Liste de Personnage de Game of Thrones</h1>

      <AddCharacterForm
        idNextCharacter={characters.length}
        onAddCharacter={onAddCharacter}
      />

      {selectedCharacter &&
        <CharacterDetails character={selectedCharacter} />
      }
        {characters.map((c: Character) =>
          <div className="card" onClick={() => setSelectedCharacter(c)}>
              <img 
                  src={c.imageUrl}
                  alt={c.name} 
                  style={{ width: '100%'}}
                  >
              </img>
              <div className="container">
                  <p>{c.id}</p>
                  <h2>{c.name}</h2>
              </div>
          </div>
          )}
    </div>
  );
};

export default CharactersList;