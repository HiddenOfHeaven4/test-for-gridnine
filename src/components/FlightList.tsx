import { useState } from "react";
import { useSelector } from "react-redux";

import Flight from "./Flight";
import { CommonReducersType } from "../store/reducers";
import { FlightProps } from "../models/models";

export default function FlightsList() {
  const [count, setCount] = useState<number>(2);
  const flights = useSelector(
    (state: CommonReducersType) => state.sort.sortedFlights
  );
  return (
    <div className="flightList">
      {flights.map((flight: FlightProps, i) => {
        if (i < count) return <Flight key={i} {...flight} />;
      })}
      <button className="showMoreBtn" onClick={() => setCount(count + 2)}>
        Показать еще
      </button>
    </div>
  );
}
