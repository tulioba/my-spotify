import React from 'react';
import { Route } from 'react-router-dom';
// BrowserRouter Link Switch
import Album from './components/Album';
import Favorites from './components/Favorites';
import Login from './components/Login';
import NotFound from './components/NotFount';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>JUST A NORMAL HEALTHY BOY</p>
        <Route path="/" component={ Login } />
        <Route path="/search" component={ Search } />
        <Route path="/album" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } />
        <Route path="" component={ NotFound } />
      </div>
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
