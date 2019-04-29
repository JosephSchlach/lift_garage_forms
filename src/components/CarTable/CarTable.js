import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './CarTable.css';

class CarTable extends Component {

componentDidMount = () => {
  // this.props.dispatch({type: 'GET_VIN'})
  
}

newJob = (event) => {
console.log('redux state vin id', this.props.reduxState.vin.id);
console.log('redux state vin license', this.props.reduxState.vin.license_plate);
//  let newJob ={
//    vehicle_id: this.props.reduxState.vin.id
//  }
 this.props.dispatch({ type: 'ADD_JOB', payload:this.props.reduxState.vin.id})
 this.props.history.push(`/damageform?id=${event.currentTarget.value}`)
}

render() {
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
                <th className='tHead'>Status</th>
              </tr>
            </thead>
            <tbody>
            {/* {this.props.reduxState.vin.map(carinfo => {
              return (
                <tr>
                  <td className='tData'>{carinfo.id}</td>
                  <td className='tData'>{carinfo.customer_name}</td>
                  <td className='tData'>{carinfo.license_plate}</td>
                  <td className='tData'>{carinfo.id}</td>
                  <td>
                  <button className="mainButton" value={carinfo.id} onClick={this.newJob}>
            NEW JOB
        </button>
                  </td>
                </tr> */}

                  <tr>
                  <td className='tData'></td>
                  <td className='tData'>{this.props.reduxState.vin.customer_name}</td>
                  <td className='tData'>{this.props.reduxState.vin.license_plate}</td>
                  <td className='tData'></td>
                  <td>
                  <button className="mainButton" value={this.props.reduxState.vin.id} onClick={this.newJob}>
            NEW JOB
                 </button>
                  </td>
                </tr>
                
              )
            })
          }

            </tbody>
        </table>
        <div className="forms">
        {/* <button className="mainButton" onClick={this.newJob}>
            NEW JOB
        </button> */}
        </div>
    </div>
</section>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(CarTable));
// className='tData'>