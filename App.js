import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyAfuU-2sV8VXActkm-xp3SjJsDJEYlZFbg',
       authDomain: 'leoffice-c9db9.firebaseapp.com',
       databaseURL: 'https://leoffice-c9db9.firebaseio.com',
       storageBucket: 'leoffice-c9db9.appspot.com',
       messagingSenderId: '965379407071'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      // <Provider store={store}>
        <Router />
      // </Provider>
    );
  }
}

export default App;
