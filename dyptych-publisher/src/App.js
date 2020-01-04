import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.css';
import IntroInputArea from './components/IntroInputArea.js';
import BodyInputArea from './components/BodyInputArea.js';
import AppendixInputArea from './components/AppendixInputArea.js';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageNumber: 0,
      pages: [<IntroInputArea />, <AppendixInputArea />]
    };

    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.addPage = this.addPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }

  previousPage(e) {

    if (this.state.pageNumber > 0) {
      this.setState({
        pageNumber: this.state.pageNumber - 1
      });
    }
  }

  nextPage(e) {

    if (this.state.pages.length - 1 > this.state.pageNumber) {
      this.setState({
        pageNumber: this.state.pageNumber + 1
      });
    }
  }

  addPage(e) {

    if ((this.state.pages.length <= 8) && this.state.pageNumber < this.state.pages.length - 1) {
      var array = this.state.pages


      array.splice(this.state.pageNumber + 1, 0, <BodyInputArea />);

      this.setState({
        pages: array
      });
    }
  }

  deletePage(e) {

    if (this.state.pageNumber < this.state.pages.length - 1) {
      var array = this.state.pages

      array.splice(this.state.pageNumber, 1);

      this.setState({
        pages: array
      });
    }
  }



  render() {

    var currentPage = this.state.pages[this.state.pageNumber]

    var pageNumber = this.state.pageNumber + 1;

    var pageTotal = this.state.pages.length;

    return (
      <div className="App container">
        <header className="App-header row">
          <div className="col-4 App-title"><h2 className="">Dyptych | Publisher</h2></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onClick={this.previousPage}>Previous</button></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onClick={this.nextPage}>Next</button></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onClick={this.addPage}>New Page</button></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onClick={this.deletePage}>Delete Current Page</button></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink">Publish</button></div>
          <div className="flex-sm-row page-number">{pageNumber}/{pageTotal}</div>
        </header>

        <div className="row textarea-row">
          {currentPage}
        </div>
      </div>
    );
  }
}
export default App;
