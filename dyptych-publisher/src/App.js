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
      pages: [<IntroInputArea/>],
      appendix: <AppendixInputArea/>
    };

    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.addPage = this.addPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }

  previousPage(e) {
    this.setState({
      pageNumber: this.state.pageNumber - 1
    });
  }

  nextPage(e) {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    });
  }

  addPage(e){
    console.log("check")

    var array = this.state.pages

    array.splice(this.state.pageNumber, 0, <BodyInputArea/>);
    
    this.setState({
      pages: array
    });

    console.log(this.state.pages.length)
    
  }

  deletePage(e){
    var array = this.state.pages

    array.splice(this.state.pageNumber, 1);

    this.setState({
      pages: array
    });
  }



  render() {

    var currentPage
    
    if(this.state.pages.length < this.state.pageNumber){
      currentPage = this.state.pages[this.state.pageNumber]
    }
    else{
      currentPage = this.state.appendix
    }
    
    return (
      <div className="App container">
        <header className="App-header row">
          <div className="col-4 App-title"><h2 className="">Dyptych | Publisher</h2></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onClick={this.previousPage}>Previous</button></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onClick={this.nextPage}>Next</button></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onClick={this.addPage}>New Page</button></div>          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink" onclick="deletePage()">Delete Current Page</button></div>
          <div className="flex-sm-row button-container"><button type="button" className="btn btn-iLink">Publish</button></div>
        </header>

        <div className="row textarea-row">
          {currentPage}
        </div>
      </div>
    );
  }
}
export default App;
