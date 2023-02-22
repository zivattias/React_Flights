import FlightArrival from '../FlightArrival/FlightArrival'
import './FlightCard.css'

export default function FlightCard(props) {
    return (
        <>
            <h2>
                {`${props.city}, ${props.country}`}
            </h2>
            <img className='flight-image' src={props.img_url} alt={`Landscape of ${props.city}`} />
            <FlightArrival time={props.time} extra_days={props.extra_days}/>
        </>
    )
}