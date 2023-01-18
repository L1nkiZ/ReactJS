import { Character } from '../../models/Character';

interface Props {
  character: Character
}

const CharacterDetails: React.FC<Props> =
  ({
     character: {
       id,
       name,
       title,
       family,
       imageUrl
     }
  }) =>

  <div className="card">
      <img 
          src={imageUrl}
          alt="Avatar" 
          style={{ width: '100%'}}
          >
      </img>
      <div className="container">
          <p>{id}</p>
          <h4>{name} {family} {title}</h4>
          
      </div>
  </div>

export default CharacterDetails;