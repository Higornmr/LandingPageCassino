import React from "react";
import { CardMenu } from "../../Components/CardMenu";

import { Container, DivCarousel } from "./styles";

export function SliderHeader() {
  return (
    <>
      <Container>
        <DivCarousel>
          <CardMenu />
        </DivCarousel>
      </Container>
    </>
  );
}
