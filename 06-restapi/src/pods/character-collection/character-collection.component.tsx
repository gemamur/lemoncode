import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onDelete: (id: number) => void;
  onDetail: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onDelete, onDetail } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDelete={onDelete} onDetail={onDetail} />
          </li>
        ))}
      </ul>
    </div>
  );
};
