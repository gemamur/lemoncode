import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter, detailCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };


  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  const handleDetail = async (id: number) => {
    history.push(linkRoutes.detailCharacter(id));
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onDelete={handleDelete}
      onDetail={handleDetail}
    />
  );
};
