import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './DiagSummary.css'
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

class DiagSummary extends Component {

  state ={
    newDiag:{
        date: '',
        problem: '',
        pcm_codes: '',
        diag_performed: '',
        findings: '',
        status: '',
        job_id: this.props.reduxState.currentJob.id,
    }
}

handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newDiag:  {
          ...this.state.newDiag,
          [propertyName]: event.target.value,
        }
    })
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newDiag);
  this.props.dispatch({type: 'ADD_DIAG', payload: this.state.newDiag})
  this.setState({
      newDiag:{
        date: '',
        problem: '',
        pcm_codes: '',
        diag_performed: '',
        findings: '',
        status: '',
    },
  })
  this.props.history.push(`/info?id=${this.props.reduxState.currentJob.id}`)
}


// Renders the entire app on the DOM
render() {
 console.log(this.state.newDiag)
 const { classes } = this.props;
  return (
    <section className='inputForm'>
      <div className='frontForm'>
      <h2>DIAGNOSTIC SUMMARY</h2>
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
            value={this.state.newDiag.date}
            type="date"
            defaultValue="2019-01-01"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
        }}/>
            </div>
              <br />
            <div className='newDamage'>
            <label>Description of problem:</label>
              <br />
            <input className='smallbox' type="text" name="problem"
                   onChange={this.handleChangeFor('problem')}
                   value={this.state.newDiag.problem}></input>
              <br />
            <label>PCM codes related to issue:</label>
              <br />
            <input className='vsmallbox' type="text" name="pcm_codes"
                   onChange={this.handleChangeFor('pcm_codes')}
                   value={this.state.newDiag.pcm_codes}></input>
              <br />
            <label>Diagnosis performed (in detail):</label>
              <br />
            <input className='bigbox' type="text" name="diag_performed"
                   onChange={this.handleChangeFor('diag_performed')}
                   value={this.state.newDiag.diag_performed}></input>
              <br />
            <label>Results and findings of diagnosis:</label>
              <br />
            <input className='smallbox' type="text" name="findings"
                   onChange={this.handleChangeFor('findings')}
                   value={this.state.newDiag.findings}></input>
              </div>
              <br />
              <div className="forms">
            <label>Form complete:</label>
              <br />
            <select value={this.state.newDiag.status}
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

DiagSummary.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
})

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(DiagSummary)));