import React from 'react';
import { Character } from '../../models/Character';

const characters:Character[] = [
    Character (1, 'Arya Starck', 'https://static1.terrafemina.com/articles/7/33/37/47/@/482477-game-of-thrones-maisie-williams-950x635-1.jpg'),
    Character (2, 'Robb Starck', 'https://images7.alphacoders.com/581/581625.jpg'),
    Character (3, 'Tyrion Lannister', 'https://images.rtl.fr/rtl/www/1348813-selon-une-theorie-pour-la-saison-tyrion-lannister-serait-un-targaryen.jpg'),
    Character (4, 'Daenerys Targaryen', 'https://www.leparisien.fr/resizer/t0I3f974EkGmDiq1J1gfzLmKWrI=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/R7URXFFJLSJZCQWZ3W5PZXBRIQ.jpg')
]

const CharactersList : React.FC = () =>
    <div>
        <h1>
            Characters List
        </h1>
        {characters.map((c : Character) =>
            <div className="card">
                <img 
                    src={c.imageURL}
                    alt="Avatar" 
                    style={{ width: '100%'}}
                    >
                </img>
                <div className="container">
                    <p>{c.id}</p>
                    <h4><b>{c.name}</b></h4>
                </div>
            </div>
        )}
    </div>

export default CharactersList;
