import React from "react";

import { Container, Item, Img, P } from "./styles";

import uefa from "../../assets/UEFA.png";
import uefaEu from "../../assets/UEFAEuropeLiga.png";
import spain from "../../assets/Spainlaliga.png";
import germani from "../../assets/Germany.png";
import nba from "../../assets/NBA.png";
import euro from "../../assets/Euroliga.png";
import open from "../../assets/AustralianOpen.png";
import mlb from "../../assets/MLB.png";
import nhl from "../../assets/NHL.png";

const data = [
  {
    id: 1,
    imagem: uefa,
    descricao: "UEFA Champions League",
  },
  {
    id: 2,
    imagem: uefaEu,
    descricao: "UEFA Europa League",
  },
  {
    id: 3,
    imagem: spain,
    descricao: "Spain La Liga",
  },
  {
    id: 3,
    imagem: germani,
    descricao: "Germany Bundesliga",
  },
  {
    id: 3,
    imagem: nba,
    descricao: "NBA",
  },
  {
    id: 3,
    imagem: euro,
    descricao: "Euroleague",
  },
  {
    id: 3,
    imagem: open,
    descricao: "Australian Open",
  },
  {
    id: 3,
    imagem: mlb,
    descricao: "MLB",
  },
  {
    id: 3,
    imagem: nhl,
    descricao: "NHL",
  },
];

export function CardMenuLateal() {
  return (
    <Container>
      {data.map((item) => (
        <Item key={item.id}>
          <Img src={item.imagem} alt={item.descricao} />
          <P>{item.descricao}</P>
        </Item>
      ))}
    </Container>
  );
}
