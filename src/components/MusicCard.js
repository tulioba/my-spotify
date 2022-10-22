import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';

class MusiCards extends React.Component {
  constructor() {
    super();

    this.state = {
      music: [],
    };
  }

  render() {
    const { music } = this.state;
    const { sing } = this.props;
    console.log(sing);
    // const songsSaved = JSON.parse(localStorage.getItem('songs'));
    return (
      <div>
        <p>
          { sing.trackName }
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
