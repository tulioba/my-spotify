import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
// import Loading from './Loading';
import Header from './Header';
import MusicCards from './MusicCard';

class Album extends React.Component {
  constructor() {
    super();

    this.state = {
      music: [],
      showLoading: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const showMusics = await getMusics(id);
    // const { music } = this.state;
    this.setState({
      music: showMusics,
      showLoading: false,
    });
    // localStorage.setItem('songs', JSON.stringify(showMusics));
  }

  render() {
    // const { match: { params: { id } } } = this.props;
    const { showLoading, music } = this.state;
    // const data = music[0];
    const firstItem = music.filter((element) => element === music[0]);
    const allMusic = music.filter((element) => element !== music[0]);
    return (
      <div data-testid="page-album">
        {/* { showLoading ? <Loading /> : */}
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
        {/* )} */}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Album;
