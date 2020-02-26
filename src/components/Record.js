import React, { Component } from 'react';


class Record extends Component {
    
    render() {
        const {firstName, lastName, gender, age, city, country} = this.props.patient
        return (
            <div className="element">
                {`${firstName} ${lastName} (${gender}), ${age} - ${city}(${country})`}
            </div>
        );
    }
}

export default Record;