import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class InfoPage extends Component {


toDamageNotation = () => {
  this.props.history.push(`/damageform?id=${this.props.reduxState.currentJob.id}`)
}

toPrePurchase = () => {
  this.props.history.push(`/prepurchase?id=${this.props.reduxState.currentJob.id}`)
}

toDiagSummary = () => {
  this.props.history.push(`/diagsummary?id=${this.props.reduxState.currentJob.id}`)
}

toCheckout = () => {
  this.props.history.push(`/checkout?id=${this.props.reduxState.currentJob.id}`)
}

render() {
  return (
      <section className='inputForm'>
        <div className='loginForm'>
        <h2>SELECT FORM</h2>
          <div className="forms">
            <button className="mainButton" onClick={this.toDamageNotation}>DAMAGE NOTATION</button>
              <br />
            <button className="mainButton" onClick={this.toPrePurchase}>PRE-PURCHASE</button>
              <br />
            <button className="mainButton" onClick={this.toDiagSummary}>DIAGNOSTIC SUMMARY</button>
              <br />
            <button className="mainButton" onClick={this.toCheckout}>CHECKOUT CHECKLIST</button>
              <br />
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

export default connect(mapReduxStateToProps)(withRouter(InfoPage));