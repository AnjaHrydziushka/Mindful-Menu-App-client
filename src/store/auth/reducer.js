const initialState = {
    me: null, 
    accessToken: null
  };

export default function authReducer(state = initialState, {type, payload}) {
    switch(type){
        default:
            return state;
    }
}