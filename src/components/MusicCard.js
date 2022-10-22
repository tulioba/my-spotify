import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusiCards extends React.Component {
  state = {
    showLoading: false,
    check: false,
  };

  async componentDidMount() {
    const { sing } = this.props;
    const getFavSongs = await getFavoriteSongs();
    const favorites = getFavSongs.some((songs) => songs.trackId === sing.trackId);
    if (favorites === true) {
      this.setState({
        check: true,
      });
    }
  }

  addFavorite = async (event) => {
    this.setState({
      showLoading: true,
      check: event.target.checked,
    });
    const { sing } = this.props;
    await addSong(sing);
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