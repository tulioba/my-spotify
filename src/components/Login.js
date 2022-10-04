import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

// import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      loginName: '',
      isDisable: true,
      click: false,
      redirect: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.ableButton());
  };

  onClick = async () => {
    const { loginName } = this.state;
    this.setState({
      click: true,
    });
    await createUser({ name: loginName });
    this.setState({
      redirect: true,
    });
  };

  ableButton = () => {
    const { loginName } = this.state;
    const number = 3;
    if (loginName.length >= number) {
      this.setState({
        isDisable: false,
      });
    }
  };

  render() {
    const { loginName, isDisable, click, redirect } = this.state;
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="loginName">
            LOGIN
            <input
              data-testid="login-name-input"
              name="loginName"
              id="loginName"
              defaultValue={ loginName }
              onChange={ this.handleChange }
              type="text"
            />
          </label>
          <label htmlFor="button">
            <input
              data-testid="login-submit-button"
              name="button"
              id="button"
              value="ENTRAR"
              onClick={ this.onClick }
              disabled={ isDisable }
              type="button"
            />
          </label>
        </form>
        { click ? <Loading /> : '' }
        { redirect ? <Redirect to="/search" /> : ''}
      </div>
    );
  }
}

// Login.propTypes = {
//   loginName: PropTypes.string.isRequired,
//   isDisable: PropTypes.bool.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleButton: PropTypes.func.isRequired,
// };

export default Login;
