import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

const PrisonerProfile = props => {
    return (
      <Card>
        <CardBody>
          <CardTitle>Prisoner Name</CardTitle>
          <CardSubtitle>Prisoner Availability</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src="PrisonerPicture" alt="Prisoner Mug Shot" />
        <CardBody>
          <CardText>Prisoner Skills</CardText>
        </CardBody>
      </Card>
    )
}

export default PrisonerProfile;