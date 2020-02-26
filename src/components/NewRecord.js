import React, { Component } from 'react';


class NewRecord extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newRecord: {
                firstName: '',
                lastName: '',
                gender: '',
                age: 0,
                city: '',
                country: '',
                has_diabate: '',
    
            }
        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeHasDiabete = this.handleChangeHasDiabete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirstName(event) {
        this.setState({
            newRecord: {
                [event.target.name]: event.target.value,
                ...this.state.newRecord
            }
        });

    }

    handleChangeLastName(event) {
        this.setState({LastName: event.target.value});
    }

    handleChangeGender(event) {
        this.setState({gender: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({age: event.target.value});
    }
    handleChangeCity(event) {
        this.setState({city: event.target.value});
    }
    handleChangeCountry(event) {
        this.setState({country: event.target.value});
    }
    handleChangeHasDiabete(event) {
        this.setState({has_diabate: event.target.value});
    }


    handleSubmit() {
        this.props.handleFormSubmit(this.state.newRecord)
    }
    
    render() {

        const {firstName, lastName, gender, age, city, country} = this.state.newRecord

        return (
            <div className="App">
                <h2>New medical record</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <input type="text" placeholder="First name" name="firstName" onChange={this.handleChangeFirstName} value={firstName} />
                        </div>
                        <div>
                            <input type="text" placeholder="Last name" name="lastName" onChange={this.handleChangeLastName} value={lastName} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="text" placeholder="First name" />
                        </div>
                        <div>
                            <input type="number" placeholder="Age" name="age" onChange={this.handleChangeAge} value={age} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <select name="city" onChange={this.handleChangeCity} value={city}>
                                <option value=''>Select one city</option>
                                <option value='Conakry'>Conakry</option>
                                <option value='Bamako'>Bamako</option>
                                <option value='Abidjan'>Abidjan</option>
                            </select>
                        </div>
                        <div>
                            <select name="country" onChange={this.handleChangeCountry} value={country}>
                                <option value=''>Select one country</option>
                                <option value='Guinea'>Guinea</option>
                                <option value='Mali'>Mali</option>
                                <option value='Ivory Cost'>Ivory Cost</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Leaving with Diabetes?</label>
                            <input type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="SAVE" />
                    </div>
                </form>
            </div>
        );
    }
}

export default NewRecord;