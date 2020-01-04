import React, { Component } from 'react';
import '../Input.css'

class AppendixInputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sources: 'https://www.claude-monet.com/impression-sunrise.jsp'
        };
    
        this.handleSourcesChange = this.handleSourcesChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSourcesChange(event) {
        this.setState({sources: event.target.value});
      }
    
      handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }

      render() {


        return (
          <form className="col-12" onSubmit={this.handleSubmit}>

            <div className="row">
                <h3 className="input-label">Sources</h3>
                <textarea className="title-text" value={this.state.sources} onChange={this.handleSourcesChange} />
            </div>
            
          </form>
        );
      }
    }

export default AppendixInputArea;