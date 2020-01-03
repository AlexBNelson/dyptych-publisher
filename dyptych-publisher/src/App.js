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
  }

  previousPage() {
    this.setState({
      pageNumber: state.pageNumber - 1
    });
  }

  nextPage() {
    this.setState({
      pageNumber: state.pageNumber + 1
    });
  }

  addPage(){
    this.setState({
      pages: state.pages.push(<BodyInputArea/>)
    });
  }

  deletePage(){

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
          <div className="col-sm button-container"><button type="button" className="btn btn-italics">Italics</button></div>
          <div className="col-sm button-container"><button type="button" className="btn btn-iLink">Image Link</button></div>
          <div className="col-sm button-container"><button type="button" className="btn btn-iLink" onclick="previousPage()">Previous</button></div>
          <div className="col-sm button-container"><button type="button" className="btn btn-iLink" onclick="nextPage()">Next</button></div>
          <div className="col-sm button-container"><button type="button" className="btn btn-iLink" onclick="newPage()">New Page</button></div>
          <div className="col-sm button-container"><button type="button" className="btn btn-iLink" onclick="addAppendix()">Add Appendix</button></div>
          <div className="col-sm button-container"><button type="button" className="btn btn-iLink" onclick="deletePage()">Delete Current Page</button></div>
          <div className="col-sm button-container"><button type="button" className="btn btn-iLink">Publish</button></div>
        </header>

        <div className="row textarea-row">
          {currentPage}
        </div>
      </div>
    );
  }
}
export default App;
