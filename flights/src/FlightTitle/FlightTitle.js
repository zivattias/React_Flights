import { Typography } from "@mui/material";
import "./FlightTitle.css";

export default function FlightTitle(props) {
    return (
        <Typography variant="h4" gutterBottom sx={{ p: "2rem" }}>
            {`Flight #${props.flight_num}`}
        </Typography>
    );
}
