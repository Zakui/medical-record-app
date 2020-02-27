import React, { Component } from 'react';


class NewRecord extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newRecord: {
                firstName: '',
                lastName: '',
                gender: 'Male',
                age: 0,
                city: '',
                country: '',
                has_diabate: 'Unknown',
    
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
    }

    handleChange(event) {
        this.setState({
            newRecord: {
                    ...this.state.newRecord,
                    [event.target.name]: event.target.value
                }
            })
    }

    handleChangeAge(event) {
        if(parseInt(event.target.value)) {
            this.setState({
                newRecord: {
                        ...this.state.newRecord,
                        age: parseInt(event.target.value)
                    }
                })
        }

    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.handleFormSubmit(this.state.newRecord)
        this.setState({
            newRecord: {
                firstName: '',
                lastName: '',
                gender: 'Male',
                age: 0,
                city: '',
                country: '',
                has_diabate: 'Unknown',
    
            }
        })
    }
    
    render() {

        const {firstName, lastName, age, city, country} = this.state.newRecord

        return (
            <div className="">
                <h2 className="title">New medical record</h2>
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder="First name" name="firstName" onChange={this.handleChange} value={firstName} />
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder="Last name" name="lastName" onChange={this.handleChange} value={lastName} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6" onChange={this.handleChange}>
                            <input type="radio" value="Male" name="gender"/> Male
                            <input type="radio" value="Female" name="gender"/> Female
                        </div>
                        <div className="col-6">
                            <input type="number" placeholder="Age" name="age" onChange={this.handleChangeAge} value={age} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <select name="city" onChange={this.handleChange} value={city}>
                                <option value=''>Select one city</option>
                                <option value='Conakry'>Conakry</option>
                                <option value='Bamako'>Bamako</option>
                                <option value='Abidjan'>Abidjan</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <select name="country" onChange={this.handleChange} value={country}>
                                <option value=''>Select one country</option>
                                <option value='Guinea'>Guinea</option>
                                <option value='Mali'>Mali</option>
                                <option value='Ivory Cost'>Ivory Cost</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label>Leaving with Diabetes?</label>
                            <div onChange={this.handleChange}>
                                <input type="radio" value="Yes" name="has_diabate"/> Yes
                                <input type="radio" value="No" name="has_diabate"/> No
                                <input type="radio" value="Unknown" name="has_diabate"/> Unknown
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="SAVE" />
                    </div>
                </form>
            </div>
        );
    }
}

export default NewRecord;