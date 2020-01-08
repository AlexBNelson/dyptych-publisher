import React, { Component } from 'react';
import '../Input.css'

class BodyInputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Impression, Sunrise',
      body: 'Please write an essay about your favorite DOM element.',
      museum: 'Musée Marmottan Monet, Paris',
      date: '1872',
      medium: 'oil on canvas 48cm x 63cm',
      artist: 'Claude Monet',
      apiUrl: 'http://localhost:7071/api/'
    };

    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMediumChange = this.handleMediumChange.bind(this);
    this.handleMuseumChange = this.handleMuseumChange.bind(this);


    this.saveData = this.handleSubmit.bind(this);
  }

  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleArtistChange(event) {
    this.setState({ artist: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleMediumChange(event) {
    this.setState({ medium: event.target.value });
  }

  handleMuseumChange(event) {
    this.setState({ museum: event.target.value });
  }

  saveData() {
    axios({
      method: 'post',
      url: this.state.apiUrl + 'post/' + this.props.pageNumber +'/'+ this.props.pageTotal,
      data: {
        title: this.state.title,
        artist: this.state.artist,
        date: this.state.date,
        medium: this.state.medium,
        museum: this.state.museum,
        body: this.state.body
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
          <h3 className="input-label">Title</h3>
          <textarea className="title-text" value={this.state.title} onChange={this.handleTitleChange} />
          <button type="button" className="btn btn-iLink" onClick={this.saveData}>save</button>
        </div>

        <div className="row">
          <h3 className="input-label">Artist</h3>
          <textarea className="title-text" value={this.state.artist} onChange={this.handleArtistChange} />
        </div>

        <div className="row">
          <h3 className="input-label">Date</h3>
          <textarea className="title-text" value={this.state.date} onChange={this.handleDateChange} />
        </div>

        <div className="row">
          <h3 className="input-label">Medium and Dimensions</h3>
          <textarea className="title-text" value={this.state.medium} onChange={this.handleMediumChange} />
        </div>

        <div className="row">
          <h3 className="input-label">Museum/Gallery</h3>
          <textarea className="title-text" value={this.state.museum} onChange={this.handleMuseumChange} />
        </div>

        <div className="row">
          <h3 className="input-label">Body</h3>
          <textarea className="body-text" value={this.state.body} onChange={this.handleBodyChange} />
        </div>
      </form>
    );
  }
}

export default BodyInputArea;