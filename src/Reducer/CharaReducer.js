const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  chara: []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CHARA_PENDING':
        return{...state, fetching: true};
        break;
      case 'FETCH_CHARA_FULFILLED':
        return{...state, fetching: false, fetched: true, chara: action.payload.data.data};
        break;
      case 'FETCH_CHARA_REJECTED':
        return{...state, fetching: false, error: action.payload};
        break;
      default:
  }
  return state;
}
