import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header row">
        <div className="col-sm App-title"><h2 className="">Dyptych | Publisher</h2></div>
        <div className="col-sm button-container"><button type="button" className="btn-italics">Italics</button></div>
        <div className="col-sm button-container"><button type="button" className="btn-iLink">Image Link</button></div>
      </header>
      //https://reactjs.org/docs/forms.html -Text input in react reduz
      <div className="row textarea-row">
        <div className='textarea' contenteditable></div>
      </div>
    </div>
  );
}

export default App;
