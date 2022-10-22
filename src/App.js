import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Login from './components/Login';
import NotFound from './components/NotFount';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Search from './components/Search';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div> */}
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

export default App;

// A rota /search é uma rota existente e que renderiza um componente com o data-testid com valor page-search;

// A rota /album/:id é uma rota existente e que renderiza um componente com o data-testid com valor page-album;

// A rota /favorites é uma rota existente e que renderiza um componente com o data-testid com valor page-favorites;

// A rota /profile é uma rota existente e que renderiza um componente com o data-testid com valor page-profile;

// A rota /profile/edit é uma rota existente e que renderiza um componente com o data-testid com valor page-profile-edit;

// Existe uma página para rotas não mapeadas e que renderiza um componente com o data-testid com valor page-not-found;
