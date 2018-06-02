import React, { Component } from 'react';
import './css/Main.css';
import './Containers/RangeReportForm.css';
import RangeReportForm from './Containers/RangeReportForm';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <RangeReportForm />
            </div>
        );
    }
}

export default Main;
