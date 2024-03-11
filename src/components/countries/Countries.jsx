import React, { useEffect, useState } from 'react'
import Country from '../country/Country'

function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(" https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    console.log(countries);
    return (
        <div className='text-center justify-center items-center'>
            <h1 className='inline-block bg-cyan-100 rounded-md font-semibold px-6 my-10 py-4 text-7xl '>Total Countries : {countries.length} </h1>
            <div className=' grid grid-cols-4 justify-center items-center text-center mx-6 bg-cyan-50 '>
                {
                    countries.map((countrylist) =>(
                    <Country key={countrylist.name.common} country={countrylist} />))
                }
            </div>

        </div>
    )
}

export default Countries