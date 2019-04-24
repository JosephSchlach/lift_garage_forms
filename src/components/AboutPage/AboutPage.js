import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FormItem from '../FormItem/FormItem';

class AboutPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_FORM' });
    }

    render() {
        return (
            <section className='inputForm'>
            <div className='frontForm'>
                {this.props.reduxState.formReducer.map(item =>
                    <FormItem key={item.item_id} item={item} />
                )}
            </div>
            </section>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(AboutPage));
