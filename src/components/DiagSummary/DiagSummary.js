import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './DiagSummary.css'


class DiagSummary extends Component {

  state ={
    newDiag:{
        date: '',
        problem: '',
        pcm_codes: '',
        diag_performed: '',
        findings: '',
        status: '',
        user_id: this.props.reduxState.user.id,
        // job_id: this.props.reduxState.job.id,
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
this.props.history.push('/info')
}


// Renders the entire app on the DOM
render() {
 console.log(this.state.newDiag)
  return (
    <section className='inputForm'>
      <div className='frontForm'>
      <h2>DAMAGE NOTATION FORM</h2>

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
                   value={this.state.newDiag.date}></input>
              <br />
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
              <br />
            <label>Is this form complete:</label>
              <br />
            <select value={this.state.newDiag.status}
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

export default connect(mapReduxStateToProps)(withRouter(DiagSummary));