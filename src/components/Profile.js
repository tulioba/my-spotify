import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
// import Loading from './Loading';
import { getUser } from '../services/userAPI';

// const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoF6kOeJp_8PRe8aA7cjDde2hSYKWP5f94EQ&usqp=CAU';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      // showLoading: false,
      userInfo: [],
    };
  }

  async componentDidMount() {
    // this.setState({
    //   showLoading: true,
    // });
    const user = await getUser();
    // console.log(user);
    this.setState({
      // showLoading: false,
      userInfo: user,
    });
  }

  render() {
    const { userInfo } = this.state;
    console.log(userInfo.name);
    console.log(userInfo.email);
    console.log(userInfo.description);
    // console.log(userInfo.image);
    return (
      <div data-testid="page-profile">
        <Header />
        <div>
          <h2>{ userInfo.name }</h2>
          <h2>{ userInfo.email }</h2>
          <h2>{ userInfo.description }</h2>
          <img src="url-to-image" alt="chaves" data-testid="profile-image" />
          <Link to="/profile/edit" data-testid="link-to-profile">Editar perfil</Link>
        </div>
      </div>
    );
  }
}

export default Profile;
