const initialState = {
    text1: '',
    text2: '',
  };
  
  const textReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_TEXT_FIELD_1':
        return { ...state, text1: action.payload };
      case 'UPDATE_TEXT_FIELD_2':
        return { ...state, text2: action.payload };
      default:
        return state;
    }
  };
  
  export default textReducer;