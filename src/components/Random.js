import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

function Random() {

    const {gif,loading,fetchData} = useGif();

    function clickHandler() {
        fetchData()
    }

    return (
        <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className=' mt-[15px]text-2xl underline uppercase font-bold'>A Random Gifs</h1>

            {
                loading ? <Spinner /> : <img src={gif} alt='This is a random gif' width="450" />
            }


            <button className='w-10/12 bg-green-200 rounded-md text-lg uppercase font-semibold mb-[20px]' onClick={clickHandler}>Generate</button>
        </div>
    )
}

export default Random