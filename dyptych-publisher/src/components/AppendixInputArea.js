import React, { Component } from 'react';
import '../Input.css'

class AppendixInputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: 'Exekias, from craftsman to fine artist',
          body: 'Please write an essay about your favorite DOM element.'
        };
    
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleBodyChange(event) {
        this.setState({body: event.target.value});
      }

      handleTitleChange(event) {
        this.setState({title: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }

      render() {


        return (
          <form className="col-12" onSubmit={this.handleSubmit}>

            <div className="row">
                <h3 className="input-label">Title</h3>
                <textarea className="title-text" value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            
            <div className="row">
                <h3 className="input-label">Body</h3>
                <textarea className="body-text" value={this.state.body} onChange={this.handleBodyChange} />
            </div>
          </form>
        );
      }
    }

export default AppendixInputArea;