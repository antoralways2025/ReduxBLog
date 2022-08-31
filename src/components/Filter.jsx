import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterRemove } from '../Redux/filters/actions';
import { ADDAUTHOR } from '../Redux/filters/actionTypes';

const Filter = () => {

     const dispatch=useDispatch()
 

      const {filters }=useSelector(state=>state) ;


       const {categories,author}=filters ;

         

       const removeTagHandler=(removeItem,removeType )=>{

           dispatch(filterRemove(removeItem ,removeType   ))
       }

  return (
    <div> 
    


            <div > 

                <button className={`${!categories.length && 'hidden'}`}> {categories.length ?  'Categories' : null} </button>
                
        {
           categories.length && categories.map((item,index)=>{

                 return(
                    <button key={index} className='p-2 bg-gray-200  relative   text-sm rounded-full m-2  '>
                        {item } 
                        
                         <span onClick={()=> removeTagHandler(item,'categories')} className='absolute  w-[30px] h-[30px] round       -top-4 text-white -right-4  text-white bg-black  rounded-[50%]'>
                               X  
                         </span>
                    </button>
                 )
            })
        }
            </div>

        {
            author && <button> Author : {author }  <span onClick={()=>removeTagHandler(author,ADDAUTHOR) } className='bg-red-600 text-white p-1 rounded-full'>X</span> </button>
        }

    </div>
  )
}

export default Filter