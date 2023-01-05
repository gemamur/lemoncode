import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  picture: `${character.image}`,
  status: character.status,
  species: character.species,
  type: character.type,
  bestsentences: character.bestsentences,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    picture: character.picture,
    status: character.status,
    species: character.species,
    type: character.type,
    bestsentences: character.bestsentences,
  } as unknown) as apiModel.Character);
