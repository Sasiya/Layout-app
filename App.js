import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './src/redux/rootReducers';
import creatSagaMiddleware from 'redux-saga';
import sagas from './src/redux/sagas';
import {composeWithDevTools} from 'remote-redux-devtools';
import UserList from './src/screens/UserList';

import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable';
import { PersistGate } from 'redux-persist/integration/react'
import AsyncStorage from '@react-native-community/async-storage';

import Navigation from './src/navigation/Navigation';



const sagaMiddleware = creatSagaMiddleware();
const persistConfig = {
  transforms: [immutableTransform()],
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers);
const composeEnhancers = composeWithDevTools({realtime: true, port: 8000});


let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

let persistor = persistStore(store)

sagaMiddleware.run(sagas);

/***
 * Configuration of redux pesisit storage. This allows app to store data and able to work offline 
 */

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
              <Navigation />
          </PersistGate>    
    </Provider>
    );
  }
}
