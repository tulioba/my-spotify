import React from 'react';
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
            <h2 data-testid="header-user-name">
              {' '}
              { user }
              {' '}
            </h2>
          )}
      </header>
    );
  }
}

export default Header;
