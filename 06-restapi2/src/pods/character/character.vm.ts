import { TimelineContent } from "@material-ui/lab";

export interface Character {
  id: string;
  picture: string;
  name: string;
  status: string;
  species: string;
  type: string;
  bestsentences:string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  picture: '',
  name:  '',
  status:  '',
  species:  '',
  type:  '',
  bestsentences: [''],
});
