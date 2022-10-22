import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusiCards extends React.Component {
  state = {
    showLoading: false,
    check: false,
  };

  async componentDidMount() {
    const { compareSongs } = this.state;
    const { sing } = this.props;
    const getFavSongs = await getFavoriteSongs();
    // console.log(compareSongs);
    const favorites = getFavSongs.some((songs) => songs.trackId === sing.trackId);
    if (favorites === true) {
      this.setState({
        check: true,
      });
    }
  }

  // compareSongs = async () => {
  //   const getFavSongs = await getFavoriteSongs(sing);
  //   console.log(await getFavSongs);
  //   const favorites = getFavSongs.some((songs) => songs.trackId === sing.trackId);
  //   if (favorites === true) {
  //     this.setState({
  //       check: false,
  //     });
  //   }
  // };

  addFavorite = async (event) => {
    this.setState({
      showLoading: true,
      check: event.target.checked,
    });
    const { sing } = this.props;
    console.log(event.target.checked);
    if (event.target.check) { // SE TRUE CHAMA A ADDSONG, SE FALSO CHAMA A REMOVESONG, NÃO O INVERSO, CONNTRA INTUITIVO
      await addSong(sing);
    } else {
      await removeSong(sing);
    }
    // await addSong(sing);
    this.setState({
      showLoading: false,
    });
  };

  render() {
    const { music, showLoading, check } = this.state;
    const { sing } = this.props;
    return (
      <div>
        { showLoading ? <Loading />
          : <div>
            <p>
              {sing.trackName}
            </p>
            <audio
              key={ sing.previewUrl }
              data-testid="audio-component"
              src={ sing.previewUrl }
              controls
            >
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
              .
            </audio>
            <label
              htmlFor={ sing.trackName }
              data-testid={ `checkbox-music-${sing.trackId}` }
            >
              Favorita
              <input
                type="checkbox"
                name=""
                checked={ check }
                id={ sing.trackName }
                onChange={ this.addFavorite }
              />
            </label>
            </div>}
      </div>
    );
  }
}

MusiCards.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
export default MusiCards;
