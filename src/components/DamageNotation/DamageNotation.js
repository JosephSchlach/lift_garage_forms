import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



class AddItem extends Component {

state ={
    newItem:{
        description: '',
        fixable: '',
        status: '',
        user_id: this.props.reduxState.user.id,
    }
}

handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newItem:  {
          ...this.state.newItem,
          [propertyName]: event.target.value,
        }
    })
  }
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.newItem);
  this.props.dispatch({type: 'ADD_FORM', payload: this.state.newItem})
  this.setState({
      newItem:{
        description: '',
        fixable: '',
        status: '',
    },
  })
}


// Renders the entire app on the DOM
render() {
 console.log(this.state.newItem)
  return (
    <section className='inputForm'>
      <div className='frontForm'>
        <h2>Damage Notation Form</h2>
          <br />
        <form className='addItem'>
        <label>What is Broken?:</label>
        <input type="text"
            value={this.state.newItem.description}
            onChange={this.handleChangeFor('description')} />
          <br />
          <br />
        <label>Something we can fix?</label>
          <br />
        <select value={this.state.newItem.fixable}
          onChange={this.handleChangeFor('fixable')}>
          <option></option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      </select>
          <br />
          <br />
      <label>Done?</label>
          <br />
      <select value={this.state.newItem.status}
          onChange={this.handleChangeFor('status')}>
          <option></option>
          <option value="in_progress">In Progress</option>
          <option value="complete">Complete</option>
      </select>
          <br />
          <br />
          <br />
      <div className="forms">
      <button className="mainButton" onClick={this.handleSubmit}>
      <Link
      to="/info">
      Submit Form
      </Link>
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

export default connect(mapReduxStateToProps)(withRouter(AddItem));