import React, { Component } from 'react';

import { connect } from 'react-redux';

import './RangeReportForm.css';

class RangeReportForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container">
                <div className="row">
                    <label htmlFor="col-25">Name:</label>
                    <div className="col-75">
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="col-25">Member:</label>
                    <div className="col-75">
                        <input type="radio" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="col-25">Rounds:</label>
                    <div className="col-75">
                        <input type="number" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="col-25">Shells:</label>
                    <div className="col-75">
                        <input type="number" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="col-25">Dues:</label>
                    <div className="col-75">
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="col-25">Other:</label>
                    <div className="col-75">
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        rangeReport: state,
    };
}

function mapDispatchToProps(dispatch) {
    return {

        //  increment: () => dispatch({type: 'INCREMENT'}),
        //  decrement: () => dispatch({type: 'DECREMENT'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeReportForm);
