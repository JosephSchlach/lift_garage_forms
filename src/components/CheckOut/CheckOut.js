import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


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
        complete: '',
        user_id: this.props.reduxState.user.id,
        // job_id: this.props.reduxState.job.id,
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
        complete: '',
    },
  })
}


// Renders the entire app on the DOM
render() {
 console.log(this.state.newCheckout)
  return (
    <section className='inputForm'>
      <div className='frontForm'>
        <h2>MANDATORY SAFETY AND EQUPIMENT CHECKLIST</h2>

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
                   value={this.state.newCheckout.date}></input>
              <br />
            <label>Damage Notation completed and turned into front office:</label>
              <br />
            <select value={this.state.newCheckout.inspection_complete}
                    onChange={this.handleChangeFor('inspection_complete')}>
                <option></option>
                <option value="done">Done</option>
                <option value="not_done">Not Done</option>
            </select>
              <br />
            <label>Fluid levels checked and low levels noted to Service Writers:</label>
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


        <div className="forms">
          <button className="mainButton" onClick={this.handleSubmit}>
            <Link to="/info">Submit Form</Link>
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

export default connect(mapReduxStateToProps)(withRouter(CheckOut));