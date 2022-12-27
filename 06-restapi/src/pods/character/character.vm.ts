export interface Character {
  id: number;
  picture: string;
  name: string;
  status: string;
  species: string;
  type: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  picture: '',
  name:  '',
  status:  '',
  species:  '',
  type:  '',
});
