import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import AddFlight from './components/AddFlight';
import ListFlights from './components/ListFlights';
import FindByCode from './components/FindByCode';
import FindCarrier from './components/FindCarrier';
import FindRoute from './components/FindRoute';
import FindPriceRange from './components/FindPriceRange';

function App() {

  return (

    <BrowserRouter>

      <NavBar />

      <div className='container'>

        <Routes>

          <Route path="/" element={<AddFlight />} />

          <Route path="/add" element={<AddFlight />} />

          <Route path="/list" element={<ListFlights />} />

          <Route path="/code" element={<FindByCode />} />

          <Route path="/carrier" element={<FindCarrier />} />

          <Route path="/route" element={<FindRoute />} />

          <Route path="/price" element={<FindPriceRange />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;