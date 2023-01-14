import React, {useState} from 'react';
import { useCallback } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx"

const Slider = () => {

    const slide =[
        {
            url: 'https://images.unsplash.com/photo-1584221428599-35de2deb7ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTA4MHB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            url: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1568090550232-84e09a3532ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8MTA4MHB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            url: 'https://images.unsplash.com/photo-1559720092-98f763329fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fDEwODBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            url: 'https://images.unsplash.com/photo-1528988296565-3cd70e150617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fDEwODBwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
    ];
    const [currentIndex,setCurrentIndex] = useState(0)

    const prevSlide=useCallback(()=>{
        const isFirstSlide = currentIndex === 0;
        const prevSlide = isFirstSlide ? slide.length-1 : currentIndex -1;
        setCurrentIndex(prevSlide)
    },[currentIndex])
    const nextSlide=useCallback(()=>{
        const isLastSlide = currentIndex === slide.length-1;
        const nextSlide = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(nextSlide)
    },[currentIndex])

    const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
    
  return <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group hover:scale-110 duration-500'>
    <div style={{backgroundImage: `url(${slide[currentIndex].url})`}} className='w-full h-full duration-1000 bg-cover rounded-2xl'>
    
    </div>

   {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>

    {/*Right Arrow*/}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight size={30} onClick={nextSlide} />
    </div>
   <div className='flex justify-center py-2 top-4'>
    
   {
    slide.map((slide,slideIndex)
        <div key={slideIndex} className='text-5xl cursor-pointer ' onClick={()=>goToSlide(slideIndex)}>
        <RxDotFilled />
        </div>
    ))
}
   </div>
    </div>


}

export default Slider