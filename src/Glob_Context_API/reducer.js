import useGoogleSearch from '../useGoogleSearch'

export const initialState = {
  term: '',
  data: {},
}

export const ActionTypes = {
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
        data:useGoogleSearch(input)
      }

    default:
      return state
  }
}
