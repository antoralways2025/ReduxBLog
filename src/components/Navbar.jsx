import React from 'react'

const Navbar = () => {
  return (
    <> 
        <nav className="bg-purple-400 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html" className='text-gray-600'>
                    <img
                        className="h-10"
                        src="https://learnwithsumit.com/_next/static/media/lws-logo-dark.8e393acf.svg"
                        alt="Learn with Sumit"
                    />
                </a>
            </div>
        </nav>

    </>
  )
}

export default Navbar