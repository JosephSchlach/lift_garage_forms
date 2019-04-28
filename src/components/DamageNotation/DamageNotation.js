import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class DamageNotation extends Component {

state ={
    newItem:{
        date: '',
        abs: '',
        ac: '',
        four_wheel_disc: '',
        drive_type: '',
        fuel_level: '',
        drivable: '',
        hubcaps: '',
        dash_lights: '',
        vehicle_damage_notes: '',
        misc_notes: '',
        complete: '',
        user_id: this.props.reduxState.user.id,
        // job_id: this.props.reduxState.job.id,
    }
}

handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newItem:  {
          ...this.state.newItem,
          [propertyName]: event.target.value,
        }
    })
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newItem);
  this.props.dispatch({type: 'ADD_FORM', payload: this.state.newItem})
  this.setState({
      newItem:{
        date: '',
        abs: '',
        ac: '',
        four_wheel_disc: '',
        drive_type: '',
        fuel_level: '',
        drivable: '',
        hubcaps: '',
        dash_lights: '',
        vehicle_damage_notes: '',
        misc_notes: '',
        complete: '',
    },
  })
  this.props.history.push('/info')
}


// Renders the entire app on the DOM
render() {
 console.log(this.state.newItem)
  return (
    <section className='inputForm'>
      <div className='frontForm'>
        <h2>DAMAGE NOTATION FORM</h2>
          <br />
            <div className='newVehicle'>
            <div className='NewVRow1'>
                <label>Customer:</label>
                  <br />
                <input type="text" name="customer_name"></input>
                  <br />
                <label>Make:</label>
                  <br />
                <input ></input>
                  <br />
                <label>Year:</label>
                  <br />
                <input type="text" name="year"></input>
            </div>
            <div className='NewVRow2'>
                <label>VIN:</label>
                  <br />
                <input type="text" name="vin"></input>
                <label>Model:</label>
                  <br />
                <input type="text" name="model"></input>
                <label>License Plate:</label>
                  <br />
                <input type="text" name="license_plate"></input>
            </div>
            </div>
        <form>
            <label>Date:</label>
              <br />
            <input type="text" name="date"
                   onChange={this.handleChangeFor('date')}
                   value={this.state.newItem.date}></input>
              <br />
            <label>ABS:</label>
              <br />
            <select value={this.state.newItem.abs}
                    onChange={this.handleChangeFor('abs')}>
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
              <br />
            <label>AC:</label>
              <br />
            <select value={this.state.newItem.ac}
                    onChange={this.handleChangeFor('ac')}>
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
              <br />
            <label>4 Wheel Disc:</label>
              <br />
            <select value={this.state.newItem.four_wheel_disc}
                    onChange={this.handleChangeFor('four_wheel_disc')}>
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
              <br />
            <label>Drive Type:</label>
              <br />
            <select value={this.state.newItem.drive_type}
                    onChange={this.handleChangeFor('drive_type')}>
                <option></option>
                <option value="fwd">FWD</option>
                <option value="rwd">RWD</option>
                <option value="awd">AWD</option>
            </select>
              <br />
            <label>Fuel Level:</label>
              <br />
            <select value={this.state.newItem.fuel_level}
                    onChange={this.handleChangeFor('fuel_level')}>
                <option></option>
                <option value="0-25">0-25%</option>
                <option value="25-50">25-50%</option>
                <option value="50-75">50-75%</option>
                <option value="75-100">75-100%</option>
            </select>
              <br />
            <label>Drivable:</label>
              <br />
            <select value={this.state.newItem.drivable}
                    onChange={this.handleChangeFor('drivable')}>
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
              <br />
            <label>Hubcaps:</label>
              <br />
            <select value={this.state.newItem.hubcaps}
                    onChange={this.handleChangeFor('hubcaps')}>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
              <br />
            <label>Dash Lights:</label>
              <br />
            <input type="text" name="dash_lights"
                   onChange={this.handleChangeFor('dash_lights')}
                   value={this.state.newItem.dash_lights}></input>
              <br />
            <label>Damage Notes:</label>
              <br />
            <input type="text" name="vehicle_damage_notes"
                   onChange={this.handleChangeFor('vehicle_damage_notes')}
                   value={this.state.newItem.vehicle_damage_notes}></input>
              <br />
            <label>Miscellaneous Notes:</label>
              <br />
            <input type="text" name="misc_notes"
                   onChange={this.handleChangeFor('misc_notes')}
                   value={this.state.newItem.misc_notes}></input>
              <br />
              <label>Is this form complete:</label>
              <br />
            <select value={this.state.newItem.status}
                    onChange={this.handleChangeFor('status')}>
                <option></option>
                <option value="complete">Complete</option>
                <option value="in_progress">In Progress</option>
            </select>
              <br />
              <br />
              <br />
        <div className="forms">
          <button className="mainButton" onClick={this.handleSubmit}>
           Submit Form
          </button>
        </div>
        </form>
      <pre>{JSON.stringify(this.state)}</pre>
      </div>
    </section>
  )
 }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(DamageNotation));