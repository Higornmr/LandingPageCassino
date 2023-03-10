import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 250px;
  cursor: pointer;
  display: grid;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 40px;
  margin-top: 20px;
`;

export const Img = styled.img`
  height: 40px;
  width: 40px;
`;

export const P = styled.p`
  color: white;
  font-size: 0.9rem;
  :hover {
    opacity: 0.5;
  }
`;
