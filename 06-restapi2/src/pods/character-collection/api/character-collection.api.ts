import { ThemeProviderComponent } from 'core/theme';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

const url = "https://rickandmortyapi.com/api/character";

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  await fetch(url).then((response) => response.json())
  .then((data) => {
    characterCollection = data.results;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  return characterCollection;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
