import React, { Component } from 'react';
import Record from './Record';

class ListOfRecord extends Component {
    constructor(props) {
        super(props)

        this.minorChange = this.minorChange.bind(this);
    }

    minorChange(event) {
        console.log(event.target.checked)
        this.props.minorUpdate(event.target.checked)
    }

    render() {
        return (
            <div className="list">
                <hr />
                <div className="list-record">
                    <h3 className="text-title">List of medical record  </h3> <span><input type="checkbox" onChange={this.minorChange}/>Only minors</span>
                </div>
                {
                    this.props.patients.map(patient => (
                        <Record key={patient.id} patient={patient}/>
                    ))
                }
            </div>
        );
    }
}

export default ListOfRecord;