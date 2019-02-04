import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Prison = props => {
  return (
    <Card className='PrisonCard'>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Available Workers:{props.workerscount}</CardSubtitle>
        <CardText>
          Location: {props.location}
        </CardText>
        <Button>View Workers</Button>
      </CardBody>
    </Card>
  );
};

export default Prison;