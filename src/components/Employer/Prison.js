import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Link } from "react-router-dom"

const Prison = props => {
  return (
    <Card className='PrisonCard'>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Available Workers:{props.workerscount}</CardSubtitle>
        <CardText>
          Location: {props.location}
        </CardText>
        <Link to={`/prison/${props.id}`}><Button className='Purple'>View Workers</Button></Link>
      </CardBody>
    </Card>
  );
};

export default Prison;