import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      user: '',
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    });
    const userName = await getUser();
    this.setState({
      user: userName.name,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, user } = this.state;
    return (
      <header data-testid="header-component">
        { isLoading ? <Loading />
          : (
            <>
              <Link to="/search" data-testid="link-to-search">Search</Link>
              <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
              <Link to="/profile" data-testid="link-to-profile">Profile</Link>
              <h2 data-testid="header-user-name">
                {' '}
                { user }
                {' '}
              </h2>
            </>
          )}
      </header>
    );
  }
}

export default Header;
