import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class PrePurchase extends Component {

state ={
  newPrePurchase:{
        date: '',
        mileage: '',
        urgent_repairs: '',
        repairs_that_can_wait: '',
        status: '',
        user_id: this.props.reduxState.user.id,
        // job_id: this.props.reduxState.job.id,
    }
}

handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newPrePurchase:  {
          ...this.state.newPrePurchase,
          [propertyName]: event.target.value,
        }
    })
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newPrePurchase);
  this.props.dispatch({type: 'ADD_PREPURCHASE', payload: this.state.newPrePurchase})
  this.setState({
      newPrePurchase:{
        date: '',
        mileage: '',
        urgent_repairs: '',
        repairs_that_can_wait: '',
        status: '',
    },
  })
this.props.history.push('/info')
}


// Renders the entire app on the DOM
render() {
 console.log(this.state.newPrePurchase)
  return (
    <section className='inputForm'>
      <div className='frontForm'>
        <h2>PRE PURCHASE INSPECTION</h2>
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
                   value={this.state.newPrePurchase.date}></input>
              <br />
              <label>Mileage:</label>
              <br />
            <input type="text" name="mileage"
                   onChange={this.handleChangeFor('mileage')}
                   value={this.state.newPrePurchase.mileage}></input>
              <br />
              <label>Urgent repairs (safety and drivability):</label>
              <br />
            <input className='bigbox' type="text" name="urgent_repairs"
                   onChange={this.handleChangeFor('urgent_repairs')}
                   value={this.state.newPrePurchase.urgent_repairs}></input>
              <br />
              <label>Repairs that can wait:</label>
              <br />
            <input className='bigbox' type="text" name="repairs_that_can_wait"
                   onChange={this.handleChangeFor('repairs_that_can_wait')}
                   value={this.state.newPrePurchase.repairs_that_can_wait}></input>
              <br />
              <label>Is this form complete:</label>
              <br />
            <select value={this.state.newPrePurchase.status}
                    onChange={this.handleChangeFor('status')}>
                <option></option>
                <option value="complete">Complete</option>
                <option value="in_progress">In Progress</option>
            </select>
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

export default connect(mapReduxStateToProps)(withRouter(PrePurchase));