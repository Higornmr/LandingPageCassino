import React from "react";

import { CardMenuLateal } from "../../Components/CardMenuLateral";

import { Container, Title } from "./styles";

export function MenuPopular() {
  return (
    <Container>
      <Title>
        <h2>Sports</h2>
        <p>Games</p>
      </Title>
      <Title>
        <h3>Popular Championship</h3>
      </Title>
      <CardMenuLateal />
    </Container>
  );
}
