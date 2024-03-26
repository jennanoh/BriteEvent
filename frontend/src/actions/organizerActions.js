import axios from "axios";
import { CREATE_EVENT_SUCCESS, CREATE_EVENT_REQUEST, CREATE_EVENT_FAIL } from "../constants/organizerDispatcher";

export const createEvent = (newEvent) => async(dispatch)=> {
  try {
    dispatch({
      type: CREATE_EVENT_REQUEST
    })
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const {data} = await axios.post('/api/organizer/', newEvent, config) 

    dispatch({
      type: CREATE_EVENT_SUCCESS,
      payload: data
    })

  } catch(error){
    dispatch({
      type: CREATE_EVENT_FAIL,
      payload: error.response && error.response.data.message? error.response.data.message: error.message
    })
  }
}

