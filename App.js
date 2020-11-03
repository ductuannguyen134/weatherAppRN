import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation';
import store from './store';
import {Provider, useSelector} from 'react-redux';

export default () => (
  <>
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...eva} theme={eva.dark}>
          <AppNavigator/>
        </ApplicationProvider>
    </Provider>
  </>
);