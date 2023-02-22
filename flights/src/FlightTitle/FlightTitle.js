import './FlightTitle.css'

export default function FlightTitle(props) {
    return (
        <h1 className='flight-title'>
            {`Flight #${props.flight_num}`}
        </h1>
    )
}