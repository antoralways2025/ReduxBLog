/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch } from 'react-redux'
import { filterByAuthor, filterByCategory } from '../Redux/filters/actions'


const Card = ({card}) => {  


 
 const dispatch=useDispatch()



  const authorFetchingHander=(author)=>{


           dispatch( filterByAuthor(author))
  }


 const  categoryFetchingHander=(tag)=>{


     dispatch(filterByCategory(tag))
 }

  return (
    <div> 

<div
          className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src={card.img}
                                alt=""
                            />
                        </div>
                        <div
                            className="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600">



                                  {
                                    card.categories.map(( tag, index)=>{

                                        return   <span 

                                           onClick={()=> categoryFetchingHander(tag) }
                                         key={index}

                                        
                                     className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 cursor-pointer text-indigo-800"
                                    >
                                    {
                                       tag
                                    }
                                    </span>
                                    } )
                                  }

                                  
                                </p>
                                <a href="#" className="block mt-1">
                                    <p
                                        className="text-xl font-semibold text-gray-900"
                                    >
                                       {card.title}
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={card.img}
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p 

                                        onClick={()=>authorFetchingHander(card.author)}
                                        className=" cursor-pointer text-sm font-medium text-gray-900  "
                                    >
                                        {card.author}
                                    </p>
                                    <div
                                        className="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time  
                                            >

                                               {card.publishedAt}
                                                
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> 9 min read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    </div>
  )
}

export default Card