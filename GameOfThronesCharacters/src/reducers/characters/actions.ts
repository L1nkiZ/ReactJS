import { CharactersState } from './reducer';
import { PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../models/Character';

export const setCharactersAction = (state: CharactersState, action: PayloadAction<Character[]>): CharactersState =>
  ({
    list: action.payload,
    isFetchingCharacters: false
  });

export const addCharacterAction = (state: CharactersState, action: PayloadAction<Character>): CharactersState =>
  ({
    ...state,
    list: state.list.concat(action.payload)
  });

export const deleteCharacterAction = (state: CharactersState, action: PayloadAction<number>): CharactersState =>
  ({
    ...state,
    list: state.list.filter((c: Character) => c.id !== action.payload)
  });

export const updateCharacterAction = (state: CharactersState, action: PayloadAction<Character>): CharactersState =>
  ({
    ...state,
    list: state.list.map((c: Character) => {
      if (c.id === action.payload.id)
        return action.payload;

      return c;
    })
  });