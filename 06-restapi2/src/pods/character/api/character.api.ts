import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';


let character: any;
const url = "https://rickandmortyapi.com/api/character";

export const getCharacter = async (id: number): Promise<Character> => {
  await fetch(`${url}/${id}`).then((response) => response.json())
  .then((data) => {character = data})
  .catch((error) => {
    console.error('Error:', error);
  });
  return character;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};

