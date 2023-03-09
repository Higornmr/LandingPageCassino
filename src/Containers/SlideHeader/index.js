import React from "react";
import { CardMenu } from "../../Components/CardMenu";
import { CardSports } from "../../Components/CardSports";

import { Container, Carousel } from "./styles";

export function SliderHeader() {
  return (
    <Container>
      <Carousel>
        <CardMenu />
        <CardSports />
      </Carousel>
    </Container>
  );
}
