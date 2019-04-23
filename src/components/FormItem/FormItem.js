import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// parent: 
class FormItem extends Component {

    deleteItem = () => {
        this.props.dispatch({ type: 'DELETE_FORM', payload: this.props.item.item_id });
    }

    render() {
        console.log(this.props.item);
        return (
            <div>
                <p>Whats Broken: {this.props.item.description}</p>
                <p>Fixable: {this.props.item.fixable}</p>
                <p>Status: {this.props.item.status}</p>
                <button onClick={this.deleteItem} className="mainButton">Delete</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(FormItem));