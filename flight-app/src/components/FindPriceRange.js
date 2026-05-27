
import { Component } from "react";
import axios from "axios";

export default class FindPriceRange extends Component {

    constructor(props) {

        super(props);

        this.state = {
            min: '',
            max: '',
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
            `http://localhost:8082/api/v1/flights/price?min=${this.state.min}&max=${this.state.max}`
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

                <h2>Find Flights By Price Range</h2>

                <hr />

                <input
                    name="min"
                    className="form-control"
                    placeholder="Enter Minimum Price"
                    onChange={this.handleInput}
                />

                <br />

                <input
                    name="max"
                    className="form-control"
                    placeholder="Enter Maximum Price"
                    onChange={this.handleInput}
                />

                <br />

                <button
                    className="btn btn-primary"
                    onClick={this.onSearch}
                >
                    Search Price Range
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