import React from 'react';
import Header from './Header';
// import Loading from './Loading';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      showLoading: false,
      userInfo: [],
    };
  }

  async componentDidMount() {
    this.setState({
      showLoading: true,
    });
    const user = await getUser();
    // console.log(user);
    this.setState({
      showLoading: false,
      userInfo: user,
    });
  }

  render() {
    const { userInfo, showLoading } = this.state;
    // console.log(userInfo);
    return (
      <div data-testid="page-profile">
        <Header />
        <div>
          {/* { userInfo.map((user) => <h3 key={ user.name }>{ user.name }</h3>)} */}
          <h2>to de ult</h2>
        </div>
      </div>
    );
  }
}

export default Profile;
