import React from "react";
import { Selection } from "../../Components/Select";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
// import Brazil from "../../assets/brazil.png";
// import Ucrania from "../../assets/ukraine.png";
// import Usa from "../../assets/usa.png";

import {
  Container,
  Img,
  Search,
  DarkMode,
  Country,
  ButtonLog,
  ButtonJoin,
  Glass,
} from "./styles";
export function Header() {
  return (
    <Container>
      <Img />
      <Selection>
        <option value="value1">(GMT -12)</option>
        <option value="value2">(GMT -11)</option>
        <option value="value3">(GMT -10)</option>
        <option value="value4">(GMT -9)</option>
      </Selection>
      <Selection>
        <option value="value1">Malasian</option>
        <option value="value2">American</option>
        <option value="value3">Decimal</option>
        <option value="value4">Indonesian</option>
      </Selection>
      <Selection>
        <option value="value1">Euro View</option>
        <option value="value2">Asian View</option>
      </Selection>
      <Glass>
        <FaSearch
          value={{
            border: "white",
            className: "react-icons",
          }}
        />
      </Glass>
      <Search>
        <input type="text" placeholder="Search..."></input>
      </Search>
      <DarkMode>
        <FaSun />
        <FaMoon />
      </DarkMode>
      <Country>
        <option value="value1">
          {/* <img src={Brazil} /> */}
          <p>Brasil</p>
        </option>

        <option value="value2">
          {/* <img src={Ucrania} /> */}
          <p>Ukrania</p>
        </option>

        <option value="value3">
          {/* <img src={Usa} /> */}
          <p>EUA</p>
        </option>
      </Country>
      <ButtonLog>
        <p> Log In</p>
      </ButtonLog>
      <ButtonJoin>
        <p>Join Now</p>
      </ButtonJoin>
    </Container>
  );
}
