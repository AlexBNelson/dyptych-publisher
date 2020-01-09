import React, { Component } from 'react';
import '../Input.css';
import { saveTextData } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';


class IntroInputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Monet, The Great Impressionist',
      body: 'Please write an essay about your favorite DOM element.',
      author: 'Alex Nelson',
      apiUrl: 'http://localhost:7071/api/'
    };

    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {

    


  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  saveData() {
    axios({
      method: 'post',
      url: this.state.apiUrl + 'post/' + this.props.pageNumber + '/' + this.props.pageTotal,
      data: {
        title: this.state.title,
        author: this.state.artist,
        body: this.state.body
      }
    })
      .then(
      )
      .catch(function (error) {
        window.alert(error);

      });
  }

  getData(){
    axios({
      method: 'get',
      url: 'http://localhost:7071/api/get/' + this.props.pageNumber + '/' + this.props.pageTotal
    }).then(function (response) {

      this.setState({
        title: response.data.title,
        author: response.data.author,
        body: response.data.body
      });

    }).catch(function (error) {
      window.alert(error);
    });
  }


  render() {

    


    return (
      <form className="col-12" onSubmit={this.handleSubmit}>

        <div className="row">
          <h3 className="input-label">Title</h3>
          <textarea className="title-text" value={this.state.title} onChange={this.handleTitleChange} />
          <button type="button" className="btn btn-iLink" onClick={this.saveData}>save</button>
          <button type="button" className="btn btn-iLink" onClick={this.getData}>update</button>
        </div>

        <div className="row">
          <h3 className="input-label">Author</h3>
          <textarea className="title-text" value={this.state.author} onChange={this.handleAuthorChange} />
        </div>

        <div className="row">
          <h3 className="input-label">Body</h3>
          <textarea className="body-text" value={this.state.body} onChange={this.handleBodyChange} />
        </div>
      </form>
    );
  }
}

export default IntroInputArea;