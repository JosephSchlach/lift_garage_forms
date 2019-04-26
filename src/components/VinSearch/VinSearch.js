import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './VinSearch.css';


class VinSearch extends Component {


  state = {
    newCar: {
      vin: '',
      year: '',
      make: '',
      model: '',
      license_plate: '',
      customer_name: '',
      codes:'',
    },
    newVIN: {
      vin: '',
    }
  }

handleChangeFor = (event) => {
  // event.target.name is coming from name attribute on input field
  let propertyName = event.target.name;
  console.log('Property:', propertyName);
  this.setState({
    newCar: {
      ...this.state.newCar,
      // event.target.value has the value (typed in) from the input field
      [propertyName]: event.target.value,
    }
  })
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

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newCar)
  this.props.dispatch({type: 'ADD_CAR', payload: this.state.newCar})
  this.setState({
    newCar: {
      vin: '',
      year: '',
      make: '',
      model: '',
      license_plate: '',
      customer_name: '',
      codes:'',
    },
  })
  this.props.history.push('/info')
}


render() {
  return (
<section className='inputForm'>
  <div className='loginForm'>
    <div className="forms">
        <div className='logo'>
        <img src="logo.svg"  alt="LIFT LOGO" />
        </div>
        </div>
        <br />
          <h3>SEARCH VIN</h3>
          <br />
        <form onSubmit={this.handleSubmit}>
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
          <br />
          <div className="addVehicle">
          <br />
          <br />
          <h3>ADD VEHICLE</h3>
          <form onSubmit={this.handleSubmit}>
          <div className='newVehicle'>
          <div className='NewVRow1'>
            <label>Customer:</label>
            <br />
            <input type="text" name="customer_name"
                   onChange={this.handleChangeFor}
                   value={this.state.newCar.customer_name}></input>
            <br />
            <label>Make:</label>
            <br />
            <input type="text" name="make"
                   onChange={this.handleChangeFor}
                   value={this.state.newCar.make}></input>
            <br />
            <label>Year:</label>
            <br />
            <input type="text" name="year"
                   onChange={this.handleChangeFor}
                   value={this.state.newCar.year}></input>
            </div>
            <div className='NewVRow2'>
            <label>VIN:</label>
            <br />
            <input type="text" name="vin"
                   onChange={this.handleChangeFor}
                   value={this.state.newCar.vin}></input>
            <label>Model:</label>
            <br />
            <input type="text" name="model"
                   onChange={this.handleChangeFor}
                   value={this.state.newCar.model}></input>
            <label>License Plate:</label>
            <br />
            <input type="text" name="license_plate"
                   onChange={this.handleChangeFor}
                   value={this.state.newCar.license_plate}></input>
            </div>
            </div>
            <div className="forms">
            <button type="submit" className="mainButton">
            ADD
            </button>
            </div>
          </form>
          <br />
          <br />
        </div>
  </div>
</section>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(VinSearch));