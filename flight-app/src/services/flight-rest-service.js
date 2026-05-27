import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1/flights";

export default class FlightRestService {

    saveFlight(flight) {
        return axios.post(BASE_URL + "/add", flight);
    }

    getAllFlights() {
        return axios.get(BASE_URL + "/all");
    }

    getFlightByCode(code) {
        return axios.get(BASE_URL + "/" + code);
    }

    deleteFlight(code) {
        return axios.delete(BASE_URL + "/" + code);
    }

    getByCarrier(carrier) {
        return axios.get(BASE_URL + "/carrier/" + carrier);
    }
}