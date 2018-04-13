import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import queryString from 'query-string';
import { withRouter } from 'react-router'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);

    const query = { city: this.state.term };
    const cityString = queryString.stringify(query);

    this.props.history.push({
      pathname: '/',
      search: cityString
    });

    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" id="city" placeholder="City"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}


export default withRouter(connect(null, mapDispatchToProps)(SearchBar));
