
import { ADDAUTHOR, ADD_CATEGORY, REMOVE, RESET } from "./actionTypes";
// import inittialState from "./initialState"

const inittialState={

   categories:[]

}



 const filterReducer=(state = inittialState , action)=>{


          switch(action.type){

            case ADDAUTHOR: return {...state, author:action.payload}
            case ADD_CATEGORY:

                   let filterType= action.type.split('/')[1] ;

                   let existing = state[filterType].includes(action.payload)  ;


                   if(existing) return state 

                   let filter =[ ...state[filterType],action.payload ] ;

                   
                   return {...state ,[filterType]:filter  }

            

            case REMOVE:  
                     
                   const {removeCategory ,categroyType}=action.payload ;

                   if( ADDAUTHOR === categroyType ){

                     return { ...state,author:null}
                   }

                  
               let updateFilter= state[categroyType].filter(category=> category !== removeCategory) ;


                 return { 

                   ...state,
                   [categroyType] : updateFilter

                 }
                    

             case RESET : return { ...state,categories:[],author:null}



            default : return state


          }
 
       }


   
   export default filterReducer