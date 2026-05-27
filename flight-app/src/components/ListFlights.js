import React, { Component } from 'react';
import FlightRestService from '../services/flight-rest-service';

export default class ListFlights extends Component {

    constructor(props) {

        super(props);

        this.service = new FlightRestService();

        this.state = {
            flights: []
        };
    }

    componentDidMount() {

        this.service.getAllFlights()
            .then(response => {

                this.setState({
                    flights: response.data
                });

            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteFlight(code) {

        this.service.deleteFlight(code)
            .then(response => {

                alert("Flight Deleted Successfully");

                this.setState({
                    flights: this.state.flights.filter(
                        flight => flight.code !== code
                    )
                });

            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        return (
            <div>

                <br />

                <h2>Flight List</h2>

                <hr />

                <table className='table table-bordered table-striped'>

                    <thead className='table-dark'>

                        <tr>
                            <th>Code</th>
                            <th>Carrier</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            this.state.flights.map((flight) => (

                                <tr key={flight.code}>

                                    <td>{flight.code}</td>
                                    <td>{flight.carrier}</td>
                                    <td>{flight.source}</td>
                                    <td>{flight.destination}</td>
                                    <td>{flight.cost}</td>

                                    <td>

                                        <button
                                            className='btn btn-danger'
                                            onClick={() => this.deleteFlight(flight.code)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        );
    }
}