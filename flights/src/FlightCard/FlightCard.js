import FlightArrival from "../FlightArrival/FlightArrival";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import { CardActionArea } from "@mui/material";
import "./FlightCard.css";

export default function FlightCard(props) {
  return (
    // Non MUI:
    // <>
    //     <h2>
    //         {`${props.city}, ${props.country}`}
    //     </h2>
    //     <img className='flight-image' src={props.img_url} alt={`Landscape of ${props.city}`} />
    //     <FlightArrival time={props.time} extra_days={props.extra_days}/>
    // </>
    <Card sx={{ minWidth: 300, m: "2em" }}>
      <CardActionArea>
        <AspectRatio objectFit="cover" ratio="16/9" minHeight={140} width={400}>
          <CardMedia
            component="img"
            image={props.img_url}
            alt={`Landscape of ${props.city}`}
          />
        </AspectRatio>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${props.city}, ${props.country}`}
          </Typography>
          <FlightArrival time={props.time} extra_days={props.extra_days} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
