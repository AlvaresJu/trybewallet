import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions/walletActions';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../styles/wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { loading } = this.props;
    if (loading) return <span>Carregando...</span>;
    return (
      <div className="wallet-content">
        <WalletForm />
        <div className="header-table">
          <Header />
          <Table />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.wallet.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
