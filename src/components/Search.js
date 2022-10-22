import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      disable: true,
      searchName: '',
      showSearch: false,
      showLoading: false,
      artist: [],
      clone: '',
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.unlockButton(),
    );
  };

  unlockButton = () => {
    const { searchName } = this.state;
    const number = 2;
    if (searchName.length >= number) {
      this.setState({
        disable: false,
      });
    }
  };

  clearInput = async () => {
    const { searchName } = this.state;
    this.setState({
      showLoading: true,
      clone: searchName,
    });
    const request = await searchAlbumsAPI(searchName);
    this.setState({
      showSearch: true,
      showLoading: false,
      searchName: '',
      artist: request,
    });
    // localStorage.setItem('songs', JSON.stringify(request));
  };

  render() {
    const { disable, searchName, showSearch, showLoading, artist, clone } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          data-testid="search-artist-input"
          name="searchName"
          onChange={ this.handleInput }
          value={ searchName }
        />
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ disable }
          onClick={ this.clearInput }
        >
          Pesquisar
        </button>
        {showLoading ? (
          <Loading />
        ) : (
          <div>
            {artist.length === 0 ? (
              <p> Nenhum álbum foi encontrado </p>
            ) : ((showSearch
            && (
              <p>
                {' '}
                {`Resultado de álbuns de: ${clone}`}
              </p>)))}
            {artist
              && artist.map((band) => (
                <div key={ band.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${band.collectionId}` }
                    to={ `/album/${band.collectionId}` }
                  >
                    {band.collectionName}
                  </Link>
                  <img src={ band.artworkUrl100 } alt={ band.collectionName } />
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
