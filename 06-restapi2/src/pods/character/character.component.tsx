import React from 'react';
import { useHistory } from 'react-router-dom';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Button, Card, CardHeader, CardContent, CardMedia } from '@material-ui/core';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  const history = useHistory();

  const handleBack = (e) => {
    e.preventDefault();
    history.goBack();
  }

  return (
    <div className={classes.cardcontainer}>
      
      <Card>
        <Button variant="contained" color="primary" onClick={handleBack}>Go Back</Button>
      
        <CardHeader title= {character.name} />
        <CardMedia
              image={character.picture}
              title={character.name}
              style={{ height: 0, paddingTop: '56.25%' }}
            />
        <CardContent>
          <div>Species: {character.species}</div>
          <div>Dead or alive: {character.status}</div>        
        </CardContent>
      </Card>
    </div>
  );
};
