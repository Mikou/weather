import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class Widget extends Component {

  componentDidMount() {
    const city = queryString.parse(this.props.location.search).city || 'Copenhagen';
    this.props.fetchWeather(city);
  }

  render() {
    const style = {
      margin: '10px',
      width: '300px'
    };

    return (
      <div className="widget" style={style}>
        <div className="panel panel-info">
          <div className="panel-heading">Weather in <b>{this.props.weather.city}</b></div>
          <ul className="list-group">
            <li className="list-group-item">
              Temperature: <b>{this.props.weather.temp}</b>
            </li>
            <li className="list-group-item">
              Humidity: <b>{this.props.weather.humidity}</b>
            </li>
            <li className="list-group-item">
              Wind: <b>{this.props.weather.wind}</b>
            </li>
            <li className="list-group-item">
              <SearchBar />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Widget)
