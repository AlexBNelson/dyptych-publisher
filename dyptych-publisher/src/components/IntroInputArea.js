import React, { Component } from 'react';
import '../Input.css'
import { saveTextData } from '../actions'
import { connect } from 'react-redux'

class IntroInputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: 'Monet, The Great Impressionist',
          body: 'Please write an essay about your favorite DOM element.',
          author: 'Alex Nelson'
        };
    
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.saveData = this.saveData.bind(this);
      }
    
      handleBodyChange(event) {
        this.setState({body: event.target.value});
      }

      handleTitleChange(event) {
        this.setState({title: event.target.value});
      }

      handleAuthorChange(event) {
        this.setState({author: event.target.value});
      }
    
      saveData() {
        dispatch(saveTextData(this.props.imageSource + 1))
      }

    
      render() {


        return (
          <form className="col-12" onSubmit={this.handleSubmit}>

            <div className="row">
                <h3 className="input-label">Title</h3>
                <textarea className="title-text" value={this.state.title} onChange={this.handleTitleChange} />
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