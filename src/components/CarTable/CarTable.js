import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './CarTable.css';

class CarTable extends Component {

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
            <br />
         <table>
            <thead>
              <tr>
                <th className='tHead'>Intake Date</th>
                <th className='tHead'>Customer</th>
                <th className='tHead'>Plates</th>
                <th className='tHead'>Status</th>
              </tr>
              <tr>
                <td className='tData'>1-1-19</td>
                <td className='tData'>Name</td>
                <td className='tData'>Plates</td>
                <td className='tData'>Complete</td>
              </tr>
              <tr>
                <td className='tData'>6-5-18</td>
                <td className='tData'>Name</td>
                <td className='tData'>Plates</td>
                <td className='tData'>Complete</td>
              </tr>
              <tr>
                <td className='tData'>5-26-18</td>
                <td className='tData'>Name</td>
                <td className='tData'>Plates</td>
                <td className='tData'>Complete</td>
              </tr>
              <tr>
                <td className='tData'>7-19-17</td>
                <td className='tData'>Name</td>
                <td className='tData'>Plates</td>
                <td className='tData'>Complete</td>
              </tr>
            </thead>
            <tbody>
            {/* {this.props.reduxState.getFeedback.map(feedback => {
            return (
                <AdminListItem
                feedback={feedback}
                deleteFeedback={this.props.deleteFeedback}
                flagFeedback={this.props.flagFeedback}
                key={feedback.id}
                />
                ) */}
            </tbody>
        </table>
        <div className="forms">
        <button className="mainButton">
            <Link to="/damageform">NEW JOB</Link>
        </button>
        </div>
    </div>=
</section>
);
}
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(withRouter(CarTable));