import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  createCharacter: string;
  editCharacter: string;
  detailCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  createCharacter: '/characters/create',
  editCharacter: '/character-edit/:id',
  detailCharacter: '/character/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'detailCharacter'> {
  detailCharacter: NavigationFunction;
}


export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  detailCharacter: (id) => generatePath(switchRoutes.detailCharacter, { id }),
};

interface EditRoutes extends Omit<SwitchRoutes, 'editCharacter'> {
  editCharacter: NavigationFunction;
}

export const editRoutes: EditRoutes = {
  ...switchRoutes,
  editCharacter: (id) => generatePath(switchRoutes.editCharacter, { id }),
};

