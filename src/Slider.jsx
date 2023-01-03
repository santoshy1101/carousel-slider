import React, {useState} from 'react'

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
    ]
  return (
    <div >
    <h1>Crousel Slider</h1>
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative'>
    <div style={{backgroundImage: `url(${slide[1].url})`}} className='w-full h-full duration-500 bg-cover rounded-2xl '>
    
    </div>

    </div>
    </div>
  )
}

export default Slider