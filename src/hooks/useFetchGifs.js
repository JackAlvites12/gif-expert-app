import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [ gifs, setGifs] = useState([])
    const [ isLoading, setLoading ] = useState( true );

    useEffect(()=>{

        getGifs(category)
            .then(gif => setGifs(gif))

        setLoading(false)
        
    }, [])

    return {
        gifs,
        isLoading,
    }
}