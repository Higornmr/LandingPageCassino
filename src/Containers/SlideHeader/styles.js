import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #282a2d;
`;

export const Carousel = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 70px;

  .global-class-name {
    rotate: calc(140deg);
  }
`;
