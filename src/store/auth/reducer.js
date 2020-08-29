const initialState = {
    me: null, 
    accessToken: null
  };

export default function authReducer(state = initialState, {type, payload}) {
    switch(type){
        case 'login_success':
            return { ...state, accessToken: payload };
        default:
            return state;
    }
}