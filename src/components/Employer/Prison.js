import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const Prison = props => {
  return (
    <Card className='PrisonCard'>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>{props.workerscount}</CardSubtitle>
        <CardText>
          {props.location}
        </CardText>
        <Button>View Workers</Button>
      </CardBody>
    </Card>
  );
};

export default Prison;