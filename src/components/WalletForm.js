import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies,
  fetchDataAndAddExpense } from '../redux/actions/walletActions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleAddExpense = (event) => {
    event.preventDefault();
    const { value, description, currency, method, tag } = this.state;
    const { expenses, addExpenseItem } = this.props;
    const expenseData = {
      id: expenses.length,
      value,
      description,
      currency,
      method,
      tag,
    };
    addExpenseItem(expenseData);
    this.setState({
      value: '',
      description: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, loading } = this.props;
    if (loading) return <span>Carregando...</span>;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            data-testid="value-input"
            id="value"
            min={ 0 }
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            id="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {
              (currencies.length > 0)
                && currencies.map((element) => (
                  <option key={ element }>{element}</option>
                ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            data-testid="method-input"
            id="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            id="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit" onClick={ this.handleAddExpense }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpenseItem: (expense) => dispatch(fetchDataAndAddExpense(expense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addExpenseItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
