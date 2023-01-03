import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes, editRoutes } from 'core/router';
import { deleteCharacter } from './api';
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

  const handleEdit = async (id:number) => {
    history.push(editRoutes.editCharacter(id));
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onDetail={handleDetail}
    />
  );
};
