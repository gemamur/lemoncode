import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCharacterCollection } from './character.mock-data';


let character: any;
const url = "https://rickandmortyapi.com/api/character";

export const getCharacter = async (id: number): Promise<Character> => {
  return fetch(`${url}/${id}`).then((response)=> {
    if(response.ok){
      return response.json();
    }else{
      throw new Error(response.statusText);
    }
  })
};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};

