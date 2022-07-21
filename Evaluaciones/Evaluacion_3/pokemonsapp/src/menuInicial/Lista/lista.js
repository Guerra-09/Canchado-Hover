import React, { useEffect, useState } from "react"


const Lista = (props) => {

    const [pokemon, setPokemon] = useState("")

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon?limit=3&offset=0") 
        .then(res => res.json())
        .then(
            (data) => {
                
                //console.log(data.results)
                // setPokemon(data.results)

                // pokemon.map( (pkmns) => {
                //     return(
                //         <div>
                //             <li> {pkmns.name} </li>
                //         </div>
                //     )
                // })

            }
        )

    })



    return (
        <>
            Lista
            <ul>
                <li>{pokemon}</li>
            </ul>
        </>
    )
}

export default Lista;