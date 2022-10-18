import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { removeExpense, startEditingExpense } from '../redux/actions/walletActions';
import '../styles/table.css';

class Table extends Component {
  handleRemoveExpense = ({ id, value, currency, exchangeRates }) => {
    const { removeExpenseItem } = this.props;
    const valueToRemove = value * exchangeRates[currency].ask;
    removeExpenseItem(id, valueToRemove);
  }

  handleEditExpense = (expenseToEdit) => {
    const { enableExpenseEditing } = this.props;
    const { id, value, description, currency, method, tag } = expenseToEdit;
    const inputsToEdit = { value, description, currency, method, tag };
    enableExpenseEditing(id, inputsToEdit);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="expenses-table">
        <table>
          <caption>Lista de Despesas</caption>
          <thead className="table-tr">
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { (expenses.length > 0) && expenses.map((expense) => {
              const { id,
                value,
                description,
                currency,
                method,
                tag,
                exchangeRates } = expense;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{Number(value).toFixed(2)}</td>
                  <td>{exchangeRates[currency].name}</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      className="edit-btn"
                      onClick={ () => this.handleEditExpense(expense) }
                    >
                      <FiEdit />
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      className="delete-btn"
                      onClick={ () => this.handleRemoveExpense(expense) }
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenseItem:
    (idToRemove, valueToRemove) => dispatch(removeExpense(idToRemove, valueToRemove)),
  enableExpenseEditing:
    (idToEdit, inputsToEdit) => dispatch(startEditingExpense(idToEdit, inputsToEdit)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpenseItem: PropTypes.func.isRequired,
  enableExpenseEditing: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
