import React from 'react';
import PropTypes from 'prop-types';
import { BsCashCoin, BsWallet2 } from 'react-icons/bs';
import { connect } from 'react-redux';
import { getUserEmail } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  checkValidLogin = (email, password) => {
    const isValidEmail = (/\S+@\S+\.\S+/).test(email);
    const minLenghtPassword = 6;
    const isValidPassword = password.length >= minLenghtPassword;
    return (isValidEmail && isValidPassword);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, registerEmail } = this.props;
    const { email } = this.state;
    registerEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-container">
        <h1>
          <BsWallet2 />
          <BsCashCoin />
          {' '}
          TrybeWallet
        </h1>
        <form className="login-form">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="E-mail"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ !this.checkValidLogin(email, password) }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  registerEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  registerEmail: (email) => dispatch(getUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
