import React, { Component } from 'react';


class Record extends Component {
    
    render() {
        const {firstName, lastName, gender, age, city, country} = this.props.patient
        return (
            <div style={{borderWidth: 1+'px'}}>
                {`${firstName} ${lastName} (${gender}), ${age} - ${city}(${country})`}
            </div>
        );
    }
}

export default Record;