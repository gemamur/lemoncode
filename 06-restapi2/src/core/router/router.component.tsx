import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.createCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.detailCharacter}
          component={CharacterScene}
        />
      </Switch>
    </HashRouter>
  );
};
