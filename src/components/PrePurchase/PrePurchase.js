import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 150,
    borderRadius: 4,
  },
});


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
 const { classes } = this.props;
  return (
    <section className='inputForm'>
      <div className='frontForm'>
        <h2>PRE PURCHASE INSPECTION</h2>
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
              value={this.state.newPrePurchase.date}
              type="date"
              defaultValue="2019-01-01"
              className={classes.textField}
              InputLabelProps={{
              shrink: true,
              }}/>
            </div>
              <br />
              <div className="forms">
            <label>Mileage:</label>
              <br />
            <input type="text" name="mileage"
                   onChange={this.handleChangeFor('mileage')}
                   value={this.state.newPrePurchase.mileage}></input>
              </div>
              <br />
              <div className='newDamage'>
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
              </div>
              <br />
              <div className="forms">
              <label>Form complete:</label>
              <br />
            <select value={this.state.newPrePurchase.status}
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

PrePurchase.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(PrePurchase)));