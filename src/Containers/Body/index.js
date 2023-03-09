import React from "react";
import { Header } from "../Header";
import { SliderHeader } from "../SlideHeader";

import { Container } from "./styles";

export function Body() {
  return (
    <Container>
      <Header />
      <SliderHeader />
    </Container>
  );
}
