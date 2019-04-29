import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class Vin extends Component {

state = {
  newVIN: {
    vin: '',
  }
}

handleVinSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newVIN)
  this.props.dispatch({type: 'GET_VIN', payload: this.state.newVIN.vin})
  this.setState({
    newVIN: {
      vin: '',
    },
  })
  this.props.history.push('/table')
}

handleChangeForVIN = (event) => {
  // event.target.name is coming from name attribute on input field
  let propertyName = event.target.name;
  console.log('Property:', propertyName);
  this.setState({
    newVIN: {
      ...this.state.newVIN,
      // event.target.value has the value (typed in) from the input field
      [propertyName]: event.target.value,
    }
  })
}

render() {
  return (
      <div>
          <h3>SEARCH VIN</h3>
          <br />
        <form onSubmit={this.handleVinSubmit}>
        <div className="forms">
          <label>VIN:</label>
            <br />
          <input className='vinput'
              type="text" name="vin"
              onChange={this.handleChangeForVIN}
              value={this.state.newVIN.vin}/>
        </div>
            <div className="forms">
              <button className="mainButton" type="submit">
              <Link to="/table"></Link>SEARCH</button>
            </div>
          </form>
          </div>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(Vin));