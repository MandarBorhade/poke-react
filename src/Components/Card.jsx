import axios from "axios";
import { useState } from "react";

const Card = ({name , pokeinfo}) => {
    const [pokeImg , setPokeImg] = useState()

    axios.get(pokeinfo)
        .then(response => {
            setPokeImg(response.data.sprites.other.dream_world.front_default)
        })

    return (
        <div className="card">
            <img src={pokeImg} alt={name} />
            <p>{name.toUpperCase()}</p>
        </div>
    )
}

export default Card;