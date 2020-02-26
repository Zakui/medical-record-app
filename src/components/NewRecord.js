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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            newRecord: {
                    ...this.state.newRecord,
                    [event.target.name]: event.target.value
                }
            })
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
                            <input type="text" placeholder="First name" name="firstName" onChange={this.handleChange} value={firstName} />
                        </div>
                        <div>
                            <input type="text" placeholder="Last name" name="lastName" onChange={this.handleChange} value={lastName} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input type="text" placeholder="First name" />
                        </div>
                        <div>
                            <input type="number" placeholder="Age" name="age" onChange={this.handleChange} value={age} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <select name="city" onChange={handleChange} value={city}>
                                <option value=''>Select one city</option>
                                <option value='Conakry'>Conakry</option>
                                <option value='Bamako'>Bamako</option>
                                <option value='Abidjan'>Abidjan</option>
                            </select>
                        </div>
                        <div>
                            <select name="country" onChange={handleChange} value={country}>
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