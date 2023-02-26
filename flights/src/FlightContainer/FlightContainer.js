import "./FlightContainer.css";
import FlightTitle from "../FlightTitle/FlightTitle";
import FlightCard from "../FlightCard/FlightCard";
import FlightSeats from "../FlightSeats/FlightSeats";
import arrow from "./flights_arrow.png";
import Container from "@mui/material/Container";

export default function FlightContainer(props) {
  const dateDiff = Math.round(
    (props.destination.time - props.origin.time) / (1000 * 60 * 60 * 24)
  );
  console.log(dateDiff);

  const commonStyles = {
    bgcolor: "background.paper",
    border: 1,
  };

  return (
    // Non MUI:
    // <div className='flight-container'>
    //     <FlightTitle flight_num={props.flight_num}/>
    //     <div className='flight-wrapper'>
    //         <div className='flight'><FlightCard {...props.origin} /></div>
    //         <img src={arrow} alt="" />
    //         <div className='flight'><FlightCard {...props.destination} extra_days={dateDiff} /></div>
    //     </div>
    //     <FlightSeats seats_left={props.seats_left} />
    // </div>
    <Container
      maxWidth="md"
      sx={{
        my: "2em",
        p: "2em",
        ...commonStyles,
        borderColor: "grey.500",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FlightTitle flight_num={props.flight_num} />
      <div className="flight-wrapper">
        <FlightCard {...props.origin} />
        <img src={arrow} alt="" />
        <FlightCard {...props.destination} extra_days={dateDiff} />
      </div>
      <FlightSeats seats_left={props.seats_left} />
    </Container>
  );
}
