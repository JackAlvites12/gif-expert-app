import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs( category )

    return (
        <>
            <h2> Búsqueda de: {category}</h2>

            { isLoading && (<h2>...Cargando</h2>) }

            <section className="card-grid">
                {
                    
                    gifs.map(({ id, title, url}) => 
                        
                        <GifItem 
                            key={ id } 
                            title={ title } 
                            url={ url }
                        /> 
                    )
                }
            </section>
        </>
        
    )
}