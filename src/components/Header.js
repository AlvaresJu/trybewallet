import React, { Component } from 'react';
import { ImMail4 } from 'react-icons/im';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from './Logo';

class Header extends Component {
  render() {
    const { loggedEmail, totalExpense } = this.props;
    return (
      <>
        <Logo className="medium-logo" />
        <div className="email-container">
          <ImMail4 />
          <span data-testid="email-field">{ loggedEmail }</span>
        </div>
        <div className="total-expense-container">
          <span>Despesa total: R$ </span>
          <span data-testid="total-field">
            { totalExpense.toFixed(2) }
          </span>
          <span data-testid="header-currency-field"> BRL</span>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedEmail: state.user.email,
  totalExpense: state.wallet.totalExpense,
});

Header.propTypes = {
  loggedEmail: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
