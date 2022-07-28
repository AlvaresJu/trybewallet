import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsCashCoin, BsWallet2 } from 'react-icons/bs';

class Logo extends Component {
  render() {
    const { className } = this.props;
    return (
      <h1 className={ className }>
        <BsWallet2 />
        <BsCashCoin />
        {' '}
        TrybeWallet
      </h1>
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
