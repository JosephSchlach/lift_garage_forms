import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Vin from '../VinSearch/Vin/Vin';
import AddCar from '../VinSearch/AddCar/AddCar';
import './VinSearch.css';


class VinSearch extends Component {

render() {
  return (
<section className='inputForm'>
  <div className='loginForm'>
    <div className="forms">
      <div className='logo'>
        <img src="logo.svg"  alt="LIFT LOGO" />
      </div>
      </div>
          <br />

        <Vin />

          <br />
      <div className="addVehicle">
          <br />
          <br />

        <AddCar />

          <br />
          <br />
      </div>
  </div>
</section>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(VinSearch));