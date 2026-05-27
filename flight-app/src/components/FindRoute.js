import { Component } from "react";
import axios from "axios";

export default class FindRoute extends Component {

    constructor(props) {

        super(props);

        this.state = {
            source: '',
            destination: '',
            flights: []
        };
    }

    handleInput = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    onSearch = () => {

        axios.get(
            `http://localhost:8082/api/v1/flights/route?source=${this.state.source}&destination=${this.state.destination}`
        )
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

                <h2>Find Flights By Route</h2>

                <hr />

                <input
                    name="source"
                    className="form-control"
                    placeholder="Enter Source"
                    onChange={this.handleInput}
                />

                <br />

                <input
                    name="destination"
                    className="form-control"
                    placeholder="Enter Destination"
                    onChange={this.handleInput}
                />

                <br />

                <button
                    className="btn btn-primary"
                    onClick={this.onSearch}
                >
                    Search Route
                </button>

                <br />
                <br />

                <table className="table table-bordered">

                    <thead className="table-dark">

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

            </div>
        );
    }
}