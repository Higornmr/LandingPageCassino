import React from "react";
import { IconContext } from "react-icons";
import { CardCarousel } from "../../Components/CardCarousel";

import { MdSportsHandball } from "react-icons/md";
import {
  GiSoccerBall,
  GiBasketballBall,
  GiVolleyballBall,
  GiBoxingGlove,
  GiEightBall,
  GiTennisBall,
} from "react-icons/gi";

import { IoIosBaseball } from "react-icons/io";

import { P, Icon } from "./styles";

export function CardSports() {
  return (
    <>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiSoccerBall />
          </IconContext.Provider>
        </Icon>
        <P>Soccer</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <MdSportsHandball />
          </IconContext.Provider>
        </Icon>
        <P>Handball</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiBasketballBall />
          </IconContext.Provider>
        </Icon>
        <P>Basketball</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiTennisBall />
          </IconContext.Provider>
        </Icon>
        <P>Tennis</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiVolleyballBall />
          </IconContext.Provider>
        </Icon>
        <P>Volleybball</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiBoxingGlove />
          </IconContext.Provider>
        </Icon>
        <P>Boxing / UFC</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiEightBall />
          </IconContext.Provider>
        </Icon>
        <P>Snooker</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <IoIosBaseball />
          </IconContext.Provider>
        </Icon>
        <P>Baseball</P>
      </CardCarousel>
      {/* ----------- */}
    </>
  );
}
