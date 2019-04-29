import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './CarTable.css';

class CarTable extends Component {

componentDidMount = () => {
  // this.props.dispatch({type: 'SET_VIN'})
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
            {this.props.reduxState.vin.map(carinfo => {
              return (
                <tr>
                  <td className='tData'>{carinfo.id}</td>
                  <td className='tData'>{carinfo.customer_name}</td>
                  <td className='tData'>{carinfo.license_plate}</td>
                  <td className='tData'>{carinfo.id}</td>
                </tr>
              )
            })
          }

            </tbody>
        </table>
        <div className="forms">
        <button className="mainButton">
            <Link to="/damageform">NEW JOB</Link>
        </button>
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