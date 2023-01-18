import React, { useState } from 'react';
import { Character } from '../../models/Character';

const characters:Character[] = [
    Character (1, 
        'Arya', 
        'https://static1.terrafemina.com/articles/7/33/37/47/@/482477-game-of-thrones-maisie-williams-950x635-1.jpg',
        'Cette fille',
        'Starck',
        ),
    Character (2, 
        'Robb', 
        'https://images7.alphacoders.com/581/581625.jpg',
        'Le jeune loup',
        'Starck',
        ),
    Character (
        3, 
        'Tyrion', 
        'https://images.rtl.fr/rtl/www/1348813-selon-une-theorie-pour-la-saison-tyrion-lannister-serait-un-targaryen.jpg',
        'Le régicide',
        'Lannister'
        ),
    Character (
        4, 
        'Daenerys', 
        'https://www.leparisien.fr/resizer/t0I3f974EkGmDiq1J1gfzLmKWrI=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/R7URXFFJLSJZCQWZ3W5PZXBRIQ.jpg',
        'Khaleesi, Mère des Dragons',
        'Targaryen',
        )
]

const CharactersList : React.FC = () => {
    

    const [SelectedCharacter, setSelectedCharacter] = useState<Character>();
   
    {
        SelectedCharacter ?
        'Personnage séléctionné :' + SelectedCharacter.titre :
        'Pas de per sonnage séléctionné' 
    }

    return (
            
        <>
            <h1>
                Liste de personnages de Game Of Thrones
            </h1>
            <p>
                {
                    <SelectedCharacter && <CharacterDetails character={selectedCharacter} />
                }
            </p>
            {characters.map((c : Character) =>
                <div className="card" onClick={() => setSelectedCharacter(c)}>
                    <img 
                        src={c.imageURL}
                        alt="Avatar" 
                        style={{ width: '100%'}}
                        >
                    </img>
                    <div className="container">
                        <p>{c.id}</p>
                        <h4>{c.name}</h4>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default CharactersList;
