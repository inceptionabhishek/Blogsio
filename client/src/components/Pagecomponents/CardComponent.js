import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function CardComponent(props) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200px"
          image={props.picture}
          alt="picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.firstname} {props.lastname}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <LocationOnIcon />
            {props.location}
          </Typography>
          <Link to="/followers" className="links2">
            <Typography variant="body2" color="red">
              Followers : {props.followers} 10
            </Typography>
          </Link>
          <Link to="/following" className="links2">
            <Typography variant="body2" color="green">
              Following : {props.following} 20
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit Profile
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
