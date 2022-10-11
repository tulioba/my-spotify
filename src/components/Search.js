import React from 'react';
import Header from './Header';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      disable: true,
      searchName: '',
    };
  }

  ableButton = () => {
    const { searchName } = this.state;
    const number = 2;
    if (searchName.length >= number) {
      this.setState({
        disable: false,
      });
    }
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.ableButton());
  };

  render() {
    const { disable, searchName } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          type="text"
          data-testid="search-artist-input"
          name="searchName"
          onChange={ this.handleInput }
          defaultValue={ searchName }
        />
        <button
          data-testid="search-artist-button"
          type="button"
          disabled={ disable }
          onClick={ this.ableButton }
        >
          Pesquisar
        </button>
        <p>JUST A NORMAL HEALTHY BOY</p>
      </div>
    );
  }
}

export default Search;
