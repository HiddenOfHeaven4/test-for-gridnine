import { FC } from "react";

import { FlightLeg } from "../models/models";
import { minutesConverter, setTime, setDate } from "./utils/utils";

const Segment: FC<FlightLeg> = (flight) => {
  return (
    <div className="segment">
      <p className="segment__cities">
        {flight.departureCity}, {flight.departureAirport}{" "}
        <span className="span">({flight.departureAirportUid})</span>
        <span className="span">&#8594;</span> {flight.arrivalCity},{" "}
        {flight.arrivalAirport}
        <span className="span"> ({flight.arrivalAirportUid})</span>
      </p>
      <hr className="segment__thin-line" />
      <div className="segment__text">
        <p className="segment__date">
          <span className="segment__time">
            {setTime(flight.departureDate)}
            <span className="segment__time-span">
              {setDate(flight.departureDate)}
            </span>
          </span>
          <span>
            <img 
            src='../../wall-clock.png'
            width='18'
            style={{position: 'relative', top: '3px', right: '8px'}}>
            </img>
            {minutesConverter(flight.duration)}</span>
          <span className="segment__time">
            <span className="segment__time-span">
              {setDate(flight.arrivalDate)}
            </span>{" "}
            {setTime(flight.arrivalDate)}
          </span>
        </p>
      </div>
      {flight.isTranfer ? (
        <div className="segment__line">
          <span className="segment__line-text">1 пересадка</span>
        </div>
      ) : (
        <hr className="segment__fat-line" />
      )}
      <p className="segment__text">
        Рейс выполняет: <span>{flight.airline}</span>
      </p>
    </div>
  );
};

export default Segment;
