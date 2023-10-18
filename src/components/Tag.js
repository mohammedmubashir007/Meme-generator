import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Spinner from './Spinner';
import { toast } from "react-hot-toast"
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

function Tag() {


    const [tag, SetTag] = useState('')

    const { gif, loading, fetchData } = useGif(tag);


    function changeHandler(e) {
        SetTag(e.target.value)
    }


    function clickHandler() {
        fetchData(tag)
    }

    return (
        <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className=' mt-[15px]text-2xl underline uppercase font-bold'>Random Gif {tag}</h1>

            {
                loading ? <Spinner /> : <img src={gif} alt='This is a random gif' width="450" />
            }


            <input
                className='w-10/12 rounded-md text-lg font-semibold text-center'
                type='text'
                onChange={changeHandler}
                value={tag}

            />

            <button className='w-10/12 bg-green-200 rounded-md text-lg uppercase font-semibold mb-[20px]' onClick={clickHandler}>Generate</button>
        </div>
    )
}

export default Tag