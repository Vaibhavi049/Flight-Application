import { Component } from "react";
import FlightRestService from "../services/flight-rest-service";

export default class FindCarrier extends Component {

    constructor(props) {

        super(props);

        this.service = new FlightRestService();

        this.state = {
            carrier: '',
            flights: []
        };
    }

    handleInput = (event) => {

        const value = event.target.value;

        this.setState({
            carrier: value
        });
    }

    onSearch = () => {

        this.service.getByCarrier(this.state.carrier)
            .then(response => {

                this.setState({
                    flights: response.data
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

                <h2>Find Flights by Carrier</h2>

                <hr />

                <input
                    name='carrier'
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Enter Carrier Name"
                />

                <button
                    className="btn btn-primary mt-2"
                    onClick={this.onSearch}
                >
                    Search by Carrier
                </button>

                <br />
                <br />

                {
                    this.state.flights.length > 0 ? (

                        <table className="table table-bordered mt-3">

                            <thead>

                                <tr>
                                    <th>Code</th>
                                    <th>Carrier</th>
                                    <th>Source</th>
                                    <th>Destination</th>
                                    <th>Cost</th>
                                </tr>

                            </thead>

                            <tbody>

                                {
                                    this.state.flights.map((flight, index) => (

                                        <tr key={index}>

                                            <td>{flight.code}</td>
                                            <td>{flight.carrier}</td>
                                            <td>{flight.source}</td>
                                            <td>{flight.destination}</td>
                                            <td>{flight.cost}</td>

                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>

                    ) : (

                        <div className="mt-3">
                            No flights found for this carrier.
                        </div>
                    )
                }

            </div>
        );
    }
}
