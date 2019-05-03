import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import qs from 'query-string';

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 150,
    borderRadius: 4,
  },
});

class DamageNotation extends Component {

componentDidMount = () => {
const searchObject = qs.parse(this.props.location.search)
console.log(searchObject);
this.setState({
  newItem:  {
    ...this.state.newItem,
    job_id: searchObject.id,
  }
})
}

// //COMPONENT DID UPDATE WAITS FOR THE ID TO RETURN SO WE CAN PASS IT TO THE NEXT VIEW THROUGH THE URL. 
// componentDidUpdate(prevProps) {
//   // Typical usage (don't forget to compare props):
//   if (this.props.reduxState.currentJob !== prevProps.reduxState.currentJob) {
//     this.setState({
//       newItem:{
//         date: this.props.reduxState.newItem.date,
//         abs: this.props.reduxState.newItem.abs,
//         ac: this.props.reduxState.newItem.ac,
//         four_wheel_disc: this.props.reduxState.newItem.four_wheel_disc,
//         drive_type: this.props.reduxState.newItem.drive_type,
//         fuel_level: this.props.reduxState.newItem.fuel_level,
//         drivable: this.props.reduxState.newItem.drivable,
//         hubcaps: this.props.reduxState.newItem.hubcaps,
//         dash_lights: this.props.reduxState.newItem.dash_lights,
//         vehicle_damage_notes: this.props.reduxState.newItem.vehicle_damage_notes,
//         misc_notes: this.props.reduxState.newItem.misc_notes,
//         status: this.props.reduxState.newItem.status,
//     },
//   })
//   }
// }

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
        status: '',
        job_id: this.props.reduxState.currentJob.id,
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
        status: '',
    },
  })
  this.props.history.push(`/info?id=${this.props.reduxState.currentJob.id}`)
}

fillState = (event) => {
  event.preventDefault();
  this.setState({
    newItem:{
      date: "2019-05-06",
      abs: 'no',
      ac: 'no',
      four_wheel_disc: 'no',
      drive_type: 'fwd',
      fuel_level: '50-75',
      drivable: 'yes',
      hubcaps: '4',
      dash_lights: 'none',
      vehicle_damage_notes: 'flux capacitor not receiving enough energy',
      misc_notes: 'this car is awesome',
  },
})
}




// Renders the entire app on the DOM
render() {
console.log(this.props)
 console.log(this.state.newItem)
 const { classes } = this.props;
  return (
    <section className='inputForm'>
      <div className='frontForm'>
      <button className="hiddenButton" onClick={this.fillState}></button>
        <h2>DAMAGE NOTATION FORM</h2>
        {/* {JSON.stringify(this.state)} */}
          <br />
            <div className='newVehicle'>
            <div className='NewVRow1'>
                <label>Customer:</label>
                  <br />
                  <div className="fauxinput"><p>{this.props.reduxState.vin.customer_name}</p></div>
                <label>Make:</label>
                  <br />
                  <div className="fauxinput">{this.props.reduxState.vin.make}</div>
                <label>Year:</label>
                  <br />
                  <div className="fauxinput">{this.props.reduxState.vin.year}</div>
            </div>
            <div className='NewVRow2'>
                <label>VIN:</label>
                  <br />
                  <div className="fauxinput">{this.props.reduxState.vin.vin}</div>
                <label>Model:</label>
                  <br />
                  <div className="fauxinput">{this.props.reduxState.vin.model}</div>
                <label>License Plate:</label>
                  <br />
                  <div className="fauxinput">{this.props.reduxState.vin.license_plate}</div>
            </div>
            </div>
        <form>
          <br />
          <br />
        <div className="forms">
          <label>Date:</label>
              <br />
          <TextField
            id="date"
            style={{backgroundColor: 'white'}}
            onChange={this.handleChangeFor('date')}
            value={this.state.newItem.date}
            type="date"
            defaultValue="2019-01-01"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
        }}/>
        </div>
        <div className='newDamage'>
          <div className='NewVRow1'>
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
          </div>
          <div className='NewVRow2'>
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
            <label>Misc. Notes:</label>
              <br />
            <input type="text" name="misc_notes"
                   onChange={this.handleChangeFor('misc_notes')}
                   value={this.state.newItem.misc_notes}></input>
                   </div>
                   </div>
                   <div className="forms">
              <label>Form complete:</label>
              <br />
              <select value={this.state.newItem.status}
                    onChange={this.handleChangeFor('status')}>
                <option></option>
                <option value="complete">Complete</option>
                <option value="in_progress">In Progress</option>
              </select>
              </div>
          <div className="forms">
          <button className="mainButton" onClick={this.handleSubmit}>
           Submit Form
          </button>
        </div>
        </form>
      </div>
    </section>
  )
 }
}

DamageNotation.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(DamageNotation)));