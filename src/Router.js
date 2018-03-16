import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import WelcomePage from './components/WelcomePage';
import Dashboard from './components/Dashboard';
import AlbumList from './components/AlbumList';
import AlbumView from './components/AlbumView';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="welcome" component={WelcomePage} title="LE OFFICE" />
        <Scene key="dashboard" component={Dashboard} title="Dashboard" />
        <Scene key="albumList" component={AlbumList} title="Album List" />
        <Scene key="albumView" component={AlbumView} title="Gallery" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
