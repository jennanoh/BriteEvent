import { CREATE_EVENT_SUCCESS, CREATE_EVENT_REQUEST, CREATE_EVENT_FAIL } from "../constants/organizerDispatcher";

export const eventCreateReducer = (state = {}, action) =>{
  switch(action.type){
    case CREATE_EVENT_REQUEST:
      return {loading: true, ...state}

    case CREATE_EVENT_SUCCESS:
      return {
        loading: false, 
        success: true, 
        newEvent: action.payload
      }
    case CREATE_EVENT_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}