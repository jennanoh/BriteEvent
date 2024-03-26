import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {eventListReducer, eventDetailsReducer} from './reducers/eventReducer'
import { userDetailsReducer, userReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducer'
import { ticketReducer } from './reducers/ticketReducer'
import { eventCreateReducer } from './reducers/organizerReducer'


const rootReducer = combineReducers({
  eventsList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  ticket: ticketReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  eventCreate: eventCreateReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}

const store = configureStore({
  reducer:rootReducer,
  preloadedState: initialState
})

export default store