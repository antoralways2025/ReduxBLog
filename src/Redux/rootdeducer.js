import { combineReducers } from "redux"

import CardReducer from './cards/reducer'
import FilterReducer from './filters/reducer'

  
   const rootReducer=combineReducers({
     cards: CardReducer,
     filters:FilterReducer
   })


   export default rootReducer