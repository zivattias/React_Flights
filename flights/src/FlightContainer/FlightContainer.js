import './FlightContainer.css'
import FlightTitle from '../FlightTitle/FlightTitle';
import FlightCard from '../FlightCard/FlightCard';
import FlightSeats from '../FlightSeats/FlightSeats';
import arrow from './flights_arrow.png'

export default function FlightContainer(props) {

    const dateDiff = Math.round((props.destination.time - props.origin.time) / (1000 * 60 * 60 * 24))


    return (
    <div className='flight-container'>
        <FlightTitle flight_num={props.flight_num}/>
        <div className='flight-wrapper'>
            <div className='flight'><FlightCard {...props.origin} /></div>
            <img src={arrow} alt="" />
            <div className='flight'><FlightCard {...props.destination} extra_days={dateDiff} /></div>
        </div>
        <FlightSeats seats_left={props.seats_left} />
    </div>
    )
}