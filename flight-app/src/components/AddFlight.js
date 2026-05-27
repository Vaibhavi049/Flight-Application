import React, { Component } from 'react';
import FlightRestService from '../services/flight-rest-service';

export default class AddFlight extends Component {

    carrierOptions = ['Indigo', 'Air India', 'SpiceJet', 'Vistara'];

    constructor(props) {
        super(props);

        this.service = new FlightRestService();

        this.state = {
            code: 0,
            carrier: '',
            source: '',
            destination: '',
            cost: 0.0
        };
    }

    handleInput = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    onSave() {

        this.service.saveFlight(this.state)
            .then(response => {
                alert("Flight Added Successfully");
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        return (
            <>
                <br />

                <h2>Add New Flight</h2>

                <hr />

                <form
                    className='was-validated'
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.onSave();
                    }}
                >

                    <input
                        name="code"
                        onChange={this.handleInput}
                        placeholder="Enter Flight Code"
                        className="form-control"
                        required
                    />

                    <br />

                    <select
                        name="carrier"
                        value={this.state.carrier}
                        onChange={this.handleInput}
                        className="form-control"
                        required
                    >

                        <option value="">Select Carrier</option>

                        {this.carrierOptions.map((carrier, index) => (
                            <option key={index} value={carrier}>
                                {carrier}
                            </option>
                        ))}

                    </select>

                    <br />

                    <input
                        name="source"
                        onChange={this.handleInput}
                        placeholder="Enter Source"
                        className="form-control"
                        required
                    />

                    <br />

                    <input
                        name="destination"
                        onChange={this.handleInput}
                        placeholder="Enter Destination"
                        className="form-control"
                        required
                    />

                    <br />

                    <input
                        name="cost"
                        onChange={this.handleInput}
                        placeholder="Enter Flight Cost"
                        className="form-control"
                        required
                    />

                    <br />

                    <button
                        className="btn btn-primary"
                        type='submit'
                    >
                        Save Flight
                    </button>

                </form>
            </>
        );
    }
}