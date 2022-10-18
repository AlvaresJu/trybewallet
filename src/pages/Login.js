import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserEmail } from '../redux/actions/loginActions';
import Logo from '../components/Logo';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      validEmail: false,
      validPassword: false,
    };
  }

  handleEmailChange = ({ target }) => {
    const { value } = target;
    const isValidEmail = (/\S+@\S+\.\S+/).test(value);
    this.setState({ email: value, validEmail: isValidEmail });
  }

  handlePasswordChange = ({ target }) => {
    const { value } = target;
    const minLenghtPassword = 6;
    const isValidPassword = value.length >= minLenghtPassword;
    this.setState({ validPassword: isValidPassword });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { history, registerEmail } = this.props;
    const { email } = this.state;
    registerEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, validEmail, validPassword } = this.state;
    return (
      <div className="login-container">
        <form className="login-form">
          <Logo className="large-logo" />
          <input
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            value={ email }
            onChange={ this.handleEmailChange }
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            onChange={ this.handlePasswordChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ !(validEmail && validPassword) }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerEmail: (email) => dispatch(getUserEmail(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  registerEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
