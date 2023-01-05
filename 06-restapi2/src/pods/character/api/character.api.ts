import { Character } from './character.api-model';



const url = "/api/characters";

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
  
  await fetch(`${url}/${character.id}`, { 
  method: character.id!=0 ? 'PUT':'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(character),
});
  return true;
};



