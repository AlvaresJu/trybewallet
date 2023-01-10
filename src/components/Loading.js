import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import '../styles/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-content">
        <ReactLoading
          type="spin"
          color="#540b0e"
          height={ 70 }
          width={ 110 }
          className="loading-icon"
        />
        <h1>Carregando...</h1>
      </div>
    );
  }
}

export default Loading;
