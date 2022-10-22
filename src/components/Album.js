import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
// import Loading from './Loading';
import Header from './Header';
import MusicCards from './MusicCard';
// import Loading from './Loading';
// import Favorites from './Favorites';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      music: [],
      // showLoading: false,
    };
  }
  // favorite_songs

  async componentDidMount() {
    // const getFavSongs = await getFavoriteSongs();
    // console.log(getFavSongs);
    const { match: { params: { id } } } = this.props;
    // console.log(id);
    const showMusics = await getMusics(id);
    // const { music } = this.state;
    this.setState({
      music: showMusics,
      // showLoading: false,
    });
    // localStorage.setItem('songs', JSON.stringify(showMusics));
  }

  render() {
    // const { match: { params: { id } } } = this.props;
    const { music } = this.state;
    const firstItem = music.filter((element) => element === music[0]);
    const allMusic = music.filter((element) => element !== music[0]);
    return (
      <div
        data-testid="page-album"
      >
        <div>
          <Header />
          { firstItem.map((song) => (
            <p
              key={ song.artistName }
              data-testid="artist-name"
            >
              { song.artistName }
            </p>))}
          { firstItem.map((song) => (
            <p
              key={ song.collectionName }
              data-testid="album-name"
            >
              { song.collectionName }
            </p>))}
          <div>
            { allMusic.map((song) => <MusicCards key={ song.trackId } sing={ song } />) }
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
