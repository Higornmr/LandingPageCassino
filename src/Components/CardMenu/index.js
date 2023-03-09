import React from "react";
import { IconContext } from "react-icons";
import { CardCarousel } from "../../Components/CardCarousel";

import { BsFillBookmarkStarFill } from "react-icons/bs";
import { MdCasino } from "react-icons/md";
import {
  GiCardJoker,
  GiVrHeadset,
  GiMedal,
  GiRoundStar,
  GiBackwardTime,
} from "react-icons/gi";
import {
  IoRadioSharp,
  IoStopwatchSharp,
  IoGameController,
  IoTvSharp,
  IoTrophySharp,
} from "react-icons/io5";

import { P, Icon, Separation } from "./styles";

export function CardMenu() {
  return (
    <>
      <CardCarousel>
        <IconContext.Provider
          value={{
            color: "orange",
            className: "global-class-name",
            size: "2rem",
          }}
        >
          <IoRadioSharp />
        </IconContext.Provider>
        <P>Live</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <IoStopwatchSharp />
          </IconContext.Provider>
        </Icon>
        <P>Prematch</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <MdCasino />
          </IconContext.Provider>
        </Icon>
        <P>Slot Games</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiCardJoker />
          </IconContext.Provider>
        </Icon>
        <P>Live Casino</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <IoTvSharp />
          </IconContext.Provider>
        </Icon>
        <P>Tv Games</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <IoTrophySharp />
          </IconContext.Provider>
        </Icon>
        <P>Highlights</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <BsFillBookmarkStarFill />
          </IconContext.Provider>
        </Icon>
        <P>My Favorites</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiVrHeadset />
          </IconContext.Provider>
        </Icon>
        <P>Virtual Sport</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiMedal />
          </IconContext.Provider>
        </Icon>
        <P>Promotions</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <IoGameController />
          </IconContext.Provider>
        </Icon>
        <P>E-Sports</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiRoundStar />
          </IconContext.Provider>
        </Icon>
        <P>My Favorite Games</P>
      </CardCarousel>
      {/* ----------- */}
      <CardCarousel>
        <Icon>
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <GiBackwardTime />
          </IconContext.Provider>
        </Icon>
        <P>Recent Games</P>
      </CardCarousel>

      <Separation />
    </>
  );
}
