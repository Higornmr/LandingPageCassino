import styled from "styled-components";

export const Container = styled.div`
  width: 270px;
  height: auto;
  background-color: #2e3136;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  h2 {
    color: white;
    font-size: 1.4rem;
  }

  p {
    color: gray;
  }

  h3 {
    font-size: 0.7rem;
    color: gray;
    text-transform: uppercase;
  }
`;
