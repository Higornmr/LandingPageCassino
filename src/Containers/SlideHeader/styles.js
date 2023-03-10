import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #282a2d;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 15px #212224;
  margin-top: 90px;
`;

export const DivCarousel = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 70px;
  overflow: hidden;
  margin-top: 10px;

  .global-class-name {
    rotate: calc(140deg);
  }
`;
