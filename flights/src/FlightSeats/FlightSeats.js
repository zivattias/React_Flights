import './FlightSeats.css'
import seat from './flight_seat.png'

export default function FlightSeats(props) {
    let seatsLeft = props.seats_left

    let textStyle = {
        color: 'black',
        fontWeight: 'bold'
    }

    if (seatsLeft !== 0) {
        seatsLeft > 20 ? textStyle.color = 'green' :
        seatsLeft < 20 && seatsLeft >= 8 ? textStyle.color = 'orange' :
        8 > seatsLeft > 0 ? textStyle.color = 'red' : textStyle.color = 'black'
    } else {
        seatsLeft = "Sold Out"
    }

    return (
        <div className='flight_seats_wrapper'>
        <img className='flight-seat-img' src={seat} alt='Flight seat icon' />
        <p>Seats left: <span style={textStyle}>{seatsLeft}</span></p>
        </div>
    )
}