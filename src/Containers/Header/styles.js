import styled from "styled-components";
import Imglogo from "../../assets/logo.png";

export const Container = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #2f3237;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 0 25px #1a1a1a;
  transition: background-color 0.2s;
  position: fixed;
  z-index: 10001;
  top: 0;
`;

export const Img = styled.div`
  background: url("${Imglogo}");

  height: 60px;
  width:260px;
  
  background-size: cover;
 
  `;

export const Glass = styled.div`
  color: white;
  margin-left: 20px;
`;
export const Search = styled.div`
  input {
    background-color: #2f3237;
    border: none;
    color: white;
    height: 30px;
    width: 300px;
  }
`;

export const DarkMode = styled.div`
  background-color: #2f3237;
  gap: 15px;
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

export const Country = styled.select`
  background: #2f3237;
  border: none;
  color: white;
  cursor: pointer;
`;

export const ButtonLog = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 0.9rem;
  color: white;

  :hover {
    opacity: 0.5;
  }
`;

export const ButtonJoin = styled.button`
  cursor: pointer;
  background-color: #3e4dc3;
  border: #6772cc 3px solid;
  font-size: 1.1rem;
  color: white;
  height: 40px;
  width: 90px;
  border-radius: 20px;
`;
