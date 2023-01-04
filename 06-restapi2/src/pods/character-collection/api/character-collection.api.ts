import { ThemeProviderComponent } from 'core/theme';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

const url = "/api/characters";


export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  return fetch(url).then((response)=> {
    if(response.ok){
      return response.json();
    }else{
      throw new Error(response.statusText);
    }
  })
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
