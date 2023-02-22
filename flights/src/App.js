
import './App.css';
import FlightContainer from './FlightContainer/FlightContainer';
import { FLIGHTS_DATA } from './flights_data'

function App() {
  
  const flightItems = FLIGHTS_DATA.map(
    (flight) => <FlightContainer key={flight.flight_num} {...flight} />
  )

  return (
    <>
      {flightItems}
    </>
  );
}

export default App;
