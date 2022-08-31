import { ADDAUTHOR, ADD_CATEGORY, REMOVE, RESET } from "./actionTypes";



 export const filterByAuthor=(author)=>{


    return{
      type:ADDAUTHOR,
       payload:author
    }
 }


 export const filterByCategory=(category)=>{

   return{
      type:ADD_CATEGORY,
      payload:category
   }
 } ;


 export const filterRemove=(removeCategory ,categroyType)=>{

    return{
      type:REMOVE,
      payload:{
         removeCategory, 
         categroyType

      }
    }
 }


 export const clearAllFilter=()=>{
   return{
      type:RESET
   }
 }