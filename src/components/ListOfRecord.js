import React, { Component } from 'react';
import Record from './Record';

class ListOfRecord extends Component {
    
    render() {
        return (
            <div className="">
                {
                    this.props.patients.map(patient => (
                        <Record patient={patient}/>
                    ))
                }
            </div>
        );
    }
}

export default ListOfRecord;