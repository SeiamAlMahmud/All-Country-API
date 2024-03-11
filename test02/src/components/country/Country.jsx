import React, { useState } from 'react'

function Country(props) {
    // console.log(props.country);
    const { name, flags } = props.country;
    const [visited, setVisited] = useState(false)

    return (
        <div className='bg-green-20 text-center py-5'>
            <h1 className={visited ? "text-orange-500 text-2xl my-3 " : "text-2xl my-3 "}>Country Name: {name.common}</h1>
            <img className='h-70 w-50' src={flags.png} alt={name.common} />
            <button onClick={() => setVisited(!visited)} className='px-5 py-2 text-2xl border border-pink-700 hover:bg-pink-600 duration-200 cursor-pointer justify-center my-3 bg-pink-500'>{!visited ? "Visited" : "Going"}</button>

        </div>
    )
}

export default Country