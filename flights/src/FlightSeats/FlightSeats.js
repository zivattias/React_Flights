import './FlightSeats.css'
import seat from './flight_seat.png'

export default function FlightSeats(props) {
    let seatsLeft = props.seats_left

    let textStyle = {
        color: 'black',
    }

    seatsLeft > 20 ? textStyle.color = 'green' :
    seatsLeft < 20 && seatsLeft >= 8 ? textStyle.color = 'yellow' :
    8 > seatsLeft > 0 ? textStyle.color = 'red' : seatsLeft = "Sold Out"


    return (
        <div className='flight_seats_wrapper'>
        <img src={seat} alt='Flight seat icon' />
        <p>Seats left: <span style={textStyle}>{props.seats_left}</span></p>
        </div>
    )
}