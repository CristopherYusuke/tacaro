import { CHANGE_MINIMUM_SALARY, CHANGE_MINIMUM_SALARY } from "../action/type";

const INITIAL_STATE = {
  countryFrom: {
    salary: {
      minimum: 10,
      yours: 10000,
    },
    currency: 0.25,
  },
  countryTo: {
    salary: {
      minimum: 0,
      yours: 0,
    },
    currency: 0,
  },
};

export function countryFrom(state = INITIAL_STATE.countryFrom, action) {
  switch (action.type) {
    case 'INCREMENT_SALARY':
      return { salary: state.salary };
    default:
      return state;
  }
}

export function countryTo(state = INITIAL_STATE.countryTo, action) {
  switch (action.type) {
    case 'INCREMENT_SALARY':
      return { salary: state.salary };
    default:
      return state;
  }
}
