import React from 'react';



 

const  myDebounce=(fn,delay=1500)=>{ 

      let timerId;
       return (...args)=>{

         if(timerId){
            clearTimeout(timerId)
         }

       timerId= setTimeout(()=> fn(...args),delay)
       }

}

const Search = ({setSearchQuery}) => {



     
     
      const handlerChange=(e)=>{

        setSearchQuery(e.target.value)

           console.log("Hello Bagladesh")
  
      }


  return (
    <div> 

 
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                // value={input}
                onKeyUp={myDebounce((e)=> handlerChange(e) )} 

                placeholder="Search"
            />
            <img
                className="inline h-6 cursor-pointer"
                src="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-search-icon-image_1344447.jpg"
                alt="Search"
            />
        </div>
    </div>
  )
}

export default Search