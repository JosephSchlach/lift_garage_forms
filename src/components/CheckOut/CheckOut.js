import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
    borderRadius: 4,
  },
});

class CheckOut extends Component {

state ={
  newCheckout:{
        date: '',
        inspection_complete: '',
        fluid_levels: '',
        tires_torqued: '',
        torque_spec: '',
        hubcap_repaced: '',
        lugnut_socket: '',
        engine_cover: '',
        final_mileage: '',
        final_walkaround: '',
        unnecessary_parts: '',
        test_drive_notes: '',
        ready_for_customer: '',
        status: '',
        job_id: this.props.reduxState.currentJob.id,
    }
}

handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newCheckout:  {
          ...this.state.newCheckout,
          [propertyName]: event.target.value,
        }
    })
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newCheckout);
  this.props.dispatch({type: 'ADD_CHECKOUT', payload: this.state.newCheckout})
  this.setState({
      newCheckout:{
        date: '',
        inspection_complete: '',
        fluid_levels: '',
        tires_torqued: '',
        torque_spec: '',
        hubcap_repaced: '',
        lugnut_socket: '',
        engine_cover: '',
        final_mileage: '',
        final_walkaround: '',
        unnecessary_parts: '',
        test_drive_notes: '',
        ready_for_customer: '',
        status: '',
    },
  })
this.props.history.push('/home')
}


// Renders the entire app on the DOM
render() {
 console.log(this.state.newCheckout)
 const { classes } = this.props;
  return (
    <section className='inputForm'>
      <div className='frontForm'>
        <h2>MANDATORY SAFETY AND EQUPIMENT CHECKLIST</h2>
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
            <div className="forms">
            <label>Date:</label>
                  <br />
              <TextField
                id="date"
                style={{backgroundColor: 'white'}}
                // label="Form start date"
                onChange={this.handleChangeFor('date')}
                value={this.state.newCheckout.date}
                type="date"
                defaultValue="2019-01-01"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
              }}/>
            </div>
              <br />
            <div className='newDamage'>
            <label>Damage Notation completed and turned in:</label>
              <br />
            <select value={this.state.newCheckout.inspection_complete}
                    onChange={this.handleChangeFor('inspection_complete')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Fluid levels checked and low levels noted:</label>
              <br />
            <select value={this.state.newCheckout.fluid_levels}
                    onChange={this.handleChangeFor('fluid_levels')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Tires torqued:</label>
              <br />
            <select value={this.state.newCheckout.tires_torqued}
                    onChange={this.handleChangeFor('tires_torqued')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Torque spec:</label>
              <br />
            <input type="text" name="date"
                   onChange={this.handleChangeFor('torque_spec')}
                   value={this.state.newCheckout.torque_spec}></input>
              <br />
            <label>Hubcaps repaced:</label>
              <br />
            <select value={this.state.newCheckout.hubcap_repaced}
                    onChange={this.handleChangeFor('hubcap_repaced')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Locking lug nut socket repaced:</label>
              <br />
            <select value={this.state.newCheckout.lugnut_socket}
                    onChange={this.handleChangeFor('lugnut_socket')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Engine cover and splash shields repaced:</label>
              <br />
            <select value={this.state.newCheckout.engine_cover}
                    onChange={this.handleChangeFor('engine_cover')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Final mileage recorded:</label>
              <br />
            <input type="text" name="date"
                   onChange={this.handleChangeFor('final_mileage')}
                   value={this.state.newCheckout.final_mileage}></input>
              <br />
            <label>Vehicle walk around complete:</label>
              <br />
            <select value={this.state.newCheckout.final_walkaround}
                    onChange={this.handleChangeFor('final_walkaround')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Any parts that were not needed:</label>
              <br />
            <input type="text" name="date"
                   onChange={this.handleChangeFor('unnecessary_parts')}
                   value={this.state.newCheckout.unnecessary_parts}></input>
              <br />
            <label>Final test drive notes:</label>
              <br />
            <input type="text" name="date"
                   onChange={this.handleChangeFor('test_drive_notes')}
                   value={this.state.newCheckout.test_drive_notes}></input>
              <br />
            <label>Is vehicle ready to be released to customer:</label>
              <br />
            <select value={this.state.newCheckout.ready_for_customer}
                    onChange={this.handleChangeFor('ready_for_customer')}>
                <option></option>
                <option value="yes">Yes</option>
                <option value="no">No Done</option>
            </select>
            </div>
            <br />
            <div className="forms">
              <label>Form complete:</label>
              <br />
            <select value={this.state.newCheckout.status}
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

CheckOut.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(CheckOut)));