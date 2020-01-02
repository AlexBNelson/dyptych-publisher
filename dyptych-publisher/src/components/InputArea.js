import React, { Component } from 'react';

class InputArea extends Component {
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
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.title} onChange={this.handleTitleChange} />
            
            <label>
              Essay:
              <textarea value={this.state.body} onChange={this.handleBodyChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }

export default InputArea;