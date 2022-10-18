import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
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

export default Wallet;
