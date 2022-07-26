import React, { useEffect, useState } from "react"
import './lista'


const Lista = (props) => {

    const [pokemon, setPokemon] = useState([])

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0") 
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
            <h1> Lista de Pokemon </h1>
            {pokemon.map((pkmns) => {
                return(
                <div>
    
                    {pkmns.name}
                    
                </div>)
            })}
            
        </>
    )
}

export default Lista;