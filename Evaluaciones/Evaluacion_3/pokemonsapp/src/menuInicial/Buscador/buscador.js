import React, { useEffect, useState } from "react"
import './buscador.css'




const Pokemon = (props) => {

    const [texto, setTexto] = useState("")

    const [imagePkmn, setImagePkmn] = useState("")
    const [searchPkm, setSearchPkmn] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [lastPokemon, setLastPokemon] = useState("")



    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/" + searchPkm) 
        .then(res => res.json())
        .then(
            (data) => {
                setImagePkmn(data.sprites.front_default)
            }
        )

    }, [texto])


    const handleChange = (e) => {
        setSearchPkmn(e.target.value)
    }

    const clickUsuario = (evento) => {
        setTexto(searchPkm)

    }


    return (
        <>
            <h3 > Busqueda de Pokemon </h3>
            <input placeholder="riolu" type="text" onChange={ (e) => { handleChange(e) } } />
            <br />
            <button className='button' type="button" onClick={clickUsuario}>Buscar</button>
            <br />
            <li lastPokemon={props.searchPkm} />

            {/*Funcion flecha, el e es un evento 'a lo que se cambia' y luego se llama a la funcion y se le pasa (e) como parametro  */}
            <img src={imagePkmn} />
        </>
    )

}


export default Pokemon;