import { ThemeProviderComponent } from 'core/theme';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];
let characterCollection:CharacterEntityApi[];

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
  // const response = await fetch(url);
  // if(response.ok){
  //   return await response.json();
  // }else{
  //   throw new Error("Error!");
  // }
  // /******************************** */
  //   return fetch(url).then((response)=> {
  //     if(response.ok){
  //       return response.json();
  //     }else{
  //       throw new Error(response.statusText);
  //     }
  //   });
  //   };

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
