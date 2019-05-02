import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './CarTable.css';
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

class CarTable extends Component {

  

  //COMPONENT DID UPDATE WAITS FOR THE ID TO RETURN SO WE CAN PASS IT TO THE NEXT VIEW THROUGH THE URL. 
componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.reduxState.currentJob !== prevProps.reduxState.currentJob) {
      this.props.history.push(`/damageform?id=${this.props.reduxState.currentJob.id}`)
      // console.log(this.props.reduxState.currentJob.id);
    }
  }

state ={
  newJobName:{
        job_name: '',
        user_id: this.props.reduxState.user.id,
    }
}

handleChangeFor = (propertyName) => {
  return (event) => {
    this.setState({
      newJobName:  {
        ...this.state.newJobName,
        [propertyName]: event.target.value,
      }
  })
}
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newJobName);
  this.props.dispatch({type: 'ADD_JOB', payload: this.state.newJobName})
  this.setState({
      newJobName:{
        job_name: '',
        user_id: this.props.reduxState.user.id,
    },
  })
// this.props.history.push('/damageform')
}

// newJob = (event) => {
// console.log('redux state vin id', this.props.reduxState.vin.id);
// console.log('redux state vin license', this.props.reduxState.vin.license_plate);
//  this.props.dispatch({ type: 'ADD_JOB', payload:this.props.reduxState.vin.id})
//  this.props.history.push(`/damageform?id=${event.currentTarget.value}`)
// }

render() {
  const { classes } = this.props;
  // console.log(this.props.reduxState.vin.id);
  return (
<section className='inputForm'>
  <div className='loginForm'>
    <div className="forms">
        <div className='logo'>
        <img src="logo.svg" alt="LIFT LOGO" />
        </div>
        </div>
        <br />
        <br />
          <h3>PREVIOUS VISITS</h3>
          {JSON.stringify(this.props.reduxState.vin)}
        <table>
          <thead>
            <tr>
              <th className='tHead'>Intake Date</th>
              <th className='tHead'>Customer</th>
              <th className='tHead'>Plates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='tData'></td>
              <td className='tData'>{this.props.reduxState.vin.customer_name}</td>
              <td className='tData'>{this.props.reduxState.vin.license_plate}</td>
            </tr>
          </tbody>
          {/* <tfoot>
            <tr>
              <td>
                <button className="mainButton" value={this.props.reduxState.vin.id} onClick={this.newJob}>
                  NEW JOB
                </button>
              </td>
            </tr>
          </tfoot> */}
        </table>
        <br />
        <form>
        <div className="forms">
          <label>Date:</label>
              <br />
          <TextField
            id="job_name"
            style={{backgroundColor: 'white'}}
            onChange={this.handleChangeFor('job_name')}
            value={this.state.newJobName.job_name}
            type="date"
            defaultValue="2019-01-01"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
        }}/>
        </div>
        <div className="forms">
        <button className="mainButton" onClick={this.handleSubmit}>
            START NEW JOB
        </button>
        </div>
        </form>
        <pre>{JSON.stringify(this.state)}</pre>
    </div>
</section>
);
}
}

CarTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(CarTable)));