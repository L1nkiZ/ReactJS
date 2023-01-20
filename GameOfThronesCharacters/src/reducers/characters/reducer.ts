import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Character, CharacterAPI } from '../../models/Character';
import { addCharacterAction, deleteCharacterAction, setCharactersAction, updateCharacterAction } from './actions';
import axios from 'axios';
import { THRONES_API } from '../../index';

export interface CharactersState {
  list: Character[],
  isFetchingCharacters: boolean
}

const initialState: CharactersState = {
  list: [],
  isFetchingCharacters: false
};

export const fetchCharacters = createAsyncThunk(
  'tasks/fetchCharacters',
  () =>
    axios.get<CharacterAPI[]>(THRONES_API + '/Characters')
      .then((res) =>
        res.data.map((c: CharacterAPI) =>
            Character(
              c.id,
              c.fullName,
              c.imageUrl,
              c.title,
              c.family
            )
          )
      )
);

const reducer = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    setCharacters: setCharactersAction,
    addCharacter: addCharacterAction,
    deleteCharacter: deleteCharacterAction,
    updateCharacter: updateCharacterAction
  },
  extraReducers: (builder) => {

    builder.addCase(
      fetchCharacters.pending,
      (state) => ({
        ...state,
        isFetchingCharacters: true
      })
    );

    builder.addCase(
      fetchCharacters.fulfilled,
      setCharactersAction
    );

  }
});

export const { setCharacters, addCharacter, deleteCharacter, updateCharacter } = reducer.actions;
export default reducer.reducer;