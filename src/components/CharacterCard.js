import React from "react";
import CharacterList from "./CharacterList";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return(
    <div>
      <Card >
          <CardBody>
              <CardTitle>{props.object.name}</CardTitle>
              <CardSubtitle>Status: {props.object.status}</CardSubtitle>
              <CardText>Species: "{props.object.species}"</CardText>
              <CardText>Type: "{props.object.type}"</CardText>
              
          </CardBody>
      </Card>
  </div>
  )
}
