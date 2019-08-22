const initialState = { reservations: []}

export default function reservationsReducer(state = initialState, action) {
  switch (action.type) {

    case 'ADD_RESERVATION':
      return {...state, reservations: [...state.reservations,
      action.payload]}

    default:
      return state
  }
}
