import { Component } from "react";
import FlightRestService from "../services/flight-rest-service";

export default class FindByCode extends Component {

    constructor(props) {

        super(props);

        this.service = new FlightRestService();

        this.state = {
            code: '',
            flight: null
        };
    }

    handleInput = (event) => {

        this.setState({
            code: event.target.value
        });
    }

    onSearch = () => {

        this.service.getFlightByCode(this.state.code)
            .then(response => {

                this.setState({
                    flight: response.data
                });

            })
            .catch(error => {
                console.log(error);
                alert("Flight Not Found");
            });
    }

    render() {

        return (
            <div>

                <br />

                <h2>Find Flight By Code</h2>

                <hr />

                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Flight Code"
                    onChange={this.handleInput}
                />

                <button
                    className="btn btn-primary mt-2"
                    onClick={this.onSearch}
                >
                    Search
                </button>

                <br />
                <br />

                {
                    this.state.flight && (

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

                                <tr>

                                    <td>{this.state.flight.code}</td>
                                    <td>{this.state.flight.carrier}</td>
                                    <td>{this.state.flight.source}</td>
                                    <td>{this.state.flight.destination}</td>
                                    <td>{this.state.flight.cost}</td>

                                </tr>

                            </tbody>

                        </table>
                    )
                }

            </div>
        );
    }
}