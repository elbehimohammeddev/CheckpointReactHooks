import React from 'react';
import {Card} from "react-bootstrap";
import {Rating} from "@material-ui/lab";

export const MovieCard = ({movie}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>{movie.description}</Card.Text>
    <Card.Text>{movie.date}</Card.Text>
    <Card.Text>{movie.type}</Card.Text>
    <Rating name="read-only" value={movie.rating} readOnly />
  </Card.Body>
</Card>
        </div>
    )
}
