import React from 'react';
import Header from './Header';
import { getUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  constructor() {
    super();

    this.state = {
      // user: [],
    };
  }

  async componentDidMount() {
    const userInfo = await getUser();
    console.log(userInfo);
  }

  render() {
    return (
      <div data-testid="page-profile-edit">
        <Header />
      </div>
    );
  }
}

export default ProfileEdit;
