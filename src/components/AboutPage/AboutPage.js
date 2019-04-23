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
            <section>
                {this.props.reduxState.formReducer.map(item =>
                    <FormItem key={item.item_id} item={item} />
                )}
            </section>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(AboutPage));
