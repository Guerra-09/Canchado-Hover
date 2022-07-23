import React, { useEffect, useState } from "react"


const Lista = (props) => {

    const [pokemon, setPokemon] = useState([])

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0") 
        .then(res => res.json())
        .then(
            (data) => {
                //console.log(data.results)
               setPokemon(data.results)
            }
        )

    }, [])
    // se le pone algo a [] y cuando cambia, se ejecuta el useEffect


    const showPokemonName = () => {
        console.log()
    }

    return (
        <>
            Lista
            <ul>
                {pokemon.map((pkmns) => {
                    return(
                    <div>
        
                        {pkmns.name}
                        
                    </div>)
                })}
            </ul>
        </>
    )
}

export default Lista;