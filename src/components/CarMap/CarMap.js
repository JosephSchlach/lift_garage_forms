import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FormItem from '../FormItem/FormItem';

class CarMap extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_FORM' });
    }

    render() {
        return (
            <section>
                {this.props.reduxState.carReducer.map(vehicle =>
                    <FormItem key={vehicle.item_id} vehicle={vehicle} />
                )}
            </section>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(CarMap));
