import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
} from 'common/components';
import { Button, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="picture" label="Image" />
          <TextFieldComponent name="species" label="species"/>
          <FormLabel id="status">Dead or Alive</FormLabel>
          <RadioGroup
            row
            aria-labelledby="status-label"
            defaultValue="Alive"
            name="status"
            value={character.status}
          >
          <FormControlLabel value="Alive" control={<Radio />} label="Alive" />
          <FormControlLabel value="Dead" control={<Radio />} label="Dead" />
          <FormControlLabel value="unknown" control={<Radio />} label="unknown" />
          </RadioGroup>

          <TextFieldComponent
            name="bestsentences"
            label="Best Sentences"
            multiline={true}
            minRows={3}
            maxRows={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};