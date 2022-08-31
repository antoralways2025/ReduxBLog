import { createStore } from "redux";

import rootReducer from "./rootdeducer";

const store= createStore(rootReducer) ;

export default store