import { useEffect, useState } from "react";
/* import { getGifs } from "../helpers/getGifs"; */
import PropTypes from 'prop-types';
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
     
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h3>Cargando...</h3>)
            }

            <div className="card-grid">
            {images.map( (image) => {
                return (
                    <GifItem key={image.id} {...image}/>
                );
            })}
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
 
