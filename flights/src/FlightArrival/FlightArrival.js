import './FlightArrival.css'

export default function FlightArrival(props) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hours: 'numeric', minutes: 'numeric' };

    return (
        <p>{(props.time).toLocaleDateString("en-US", options)} {props.extra_days > 0 ? `(+${props.extra_days})` : ''}</p>
    )
}