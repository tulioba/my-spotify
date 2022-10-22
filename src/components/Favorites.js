import React from 'react';
import Header from './Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      showLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      showLoading: true,
    });
    const getFavSongs = await getFavoriteSongs();
    this.setState({
      showLoading: false,
      songs: getFavSongs,
    });
  }

  async componentDidUpdate() {
    // const { songs } = this.state;
    const getFavSongs = await getFavoriteSongs();
    this.setState({
      songs: getFavSongs,
    });
  }

  changeLoading = (valor) => {
    this.setState({
      showLoading: valor,
    });
  };

  render() {
    const { showLoading, songs } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { showLoading ? <Loading />
          : (
            <div>
              {
                songs.map((song) => (<MusicCard
                  key={ song.trackId }
                  sing={ song }
                  changeLoading={ this.changeLoading }
                />))
              }
            </div>)}
      </div>
    );
  }
}

export default Favorites;
