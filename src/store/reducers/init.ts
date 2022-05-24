import { GET_FLIGHTS } from "../../consts";
import { FlightProps } from "../../models/models";
import { InitActions } from "../actions";

export type InitInitialState = {
  flights: Array<FlightProps>;
};
const initialState = {
  flights: [],
};

export const initReducer = (
  state = initialState,
  action: InitActions
): InitInitialState => {
  switch (action.type) {
    case GET_FLIGHTS: {
      return {
        ...state,
        flights: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};