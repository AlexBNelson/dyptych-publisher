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

      saveData() {
        axios({
          method: 'post',
          url: this.state.apiUrl + 'post/' + this.props.pageNumber +'/'+ this.props.pageTotal,
          data: {
            sources: this.state.sources
          }
        })
          .then(
          )
          .catch(function (error) {
            window.alert(error);
    
          });
      }

      render() {


        return (
          <form className="col-12" onSubmit={this.handleSubmit}>

            <div className="row">
                <h3 className="input-label">Sources</h3>
                <textarea className="title-text" value={this.state.sources} onChange={this.handleSourcesChange} />
                <button type="button" className="btn btn-iLink" onClick={this.saveData}>save</button>
            </div>
            
          </form>
        );
      }
    }

export default AppendixInputArea;