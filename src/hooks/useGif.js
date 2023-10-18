import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from "react-hot-toast"


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const url = `https:api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



function useGif(tag) {

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)



    async function fetchData(tag) {

        setLoading(true)
        try {



            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
            console.log(data.data.images.downsized_large.url);

            const imageSource = data.data.images.downsized_large.url
            setGif(imageSource)
            setLoading(false)
        } catch (error) {
            toast.error("Something went wrong")
        }

    }

    useEffect(() => {
        fetchData(tag)
    }, [])

    return { gif, loading, fetchData };

}

export default useGif