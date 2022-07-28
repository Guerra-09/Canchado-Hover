import React, { useEffect, useState } from "react"
import './Pokemon.css'
import Historial from "../Historial/historial"


// 2. pasar array a component historial sin mostrarlo en buscador
// 4. Combate pokemon enteros (video pableke)


const Buscador = (props) => {

    const [texto, setTexto] = useState("")

    const [imagePkmn, setImagePkmn] = useState("")
    const [imagePkmnBack, setImagePkmnBack] = useState("")
    const [imagePkmnShiny, setImagePkmnShiny] = useState("")
    const [imagePkmnShinyBack, setImagePkmnShinyBack] = useState("")

    const [searchPkm, setSearchPkmn] = useState("")
    const [pkmnHp , setPkmnHp] = useState("")
    const [pkmnAtt, setPkmnAtt] = useState("")


    const [pkm, setPkm] = useState([])
    const [encounter, setEncounter] = useState([]) 

    const [busquedas, setBusquedas] = useState([])


    //change to see in github

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/" + searchPkm) 
        .then(res => res.json())
        .then(
            (data) => {

                // Sprites for render pokemon.
                setImagePkmn(data.sprites.front_default)
                setImagePkmnBack(data.sprites.back_default)
                setImagePkmnShiny(data.sprites.front_shiny)
                setImagePkmnShinyBack(data.sprites.back_shiny)

                setPkm(data)
                

                // console.log(data)
                // console.log(encounters)
                // console.log(pkm.stats[0])

            }
        )
        fetch("https://pokeapi.co/api/v2/pokemon/" + searchPkm + "/encounters") 
        .then(res => res.json())
        .then(
            (data2) => {

                setEncounter(data2)

            }
        )

    }, [texto])


    const handleChange = (pkmn) => {
        setSearchPkmn(pkmn.target.value)
        
    }
    

    const clickUsuario = (evento) => {
        setTexto(searchPkm)

        setBusquedas(prevArray => [...prevArray, <div> 
                                                    {searchPkm} 
                                                    <br /> 
                                                </div>])
        

        
         

        
    }

    

    return (
        <>
            {/*Funcion flecha, el e es un evento 'a lo que se cambia' y luego se llama a la funcion y se le pasa (e) como parametro  */}

            <div className="pkmnStats">

                <input placeholder="pokemon name..." type="text" onChange={ (pkmn) => { handleChange(pkmn) } } />
                
                <br />
                <button className='button' type="button" onClick={clickUsuario}>Buscar</button>

                <div>

                    <img src={imagePkmn} />
                    <img src={imagePkmnBack} />
                    <img src={imagePkmnShiny} />
                    <img src={imagePkmnShinyBack} />

                    <h2> Stats </h2>

                    {pkm.stats?.map((estadistica, idx) => {
                        return(<div key={idx}>{estadistica.stat.name}: {estadistica.base_stat}</div>)
                    })} 


                    <h2> Others </h2>

                    <div> Weight: {pkm.weight} </div>
                    <div> Height: {pkm.height} </div>
                    <div> Base Experience: {pkm.base_experience} </div>
                    <div> Pokedex: {pkm.id} </div>
                    <div>Tipo Principal: {pkm.types[0].type.name}</div>
                    <br></br> 



                    <h3> Abilities </h3>  
                    
                    {pkm.abilities?.map((habilidad, idx) => {
                        return(<div id="div" key={idx}>{habilidad.ability.name}</div>)
                    })}
                    <br></br>


                    <h3> Encounters </h3> 

                    {encounter?.map((site, idx) => {
                        return(<div key={idx}>{site.location_area.name}</div>)
                    })} 
                    

                    
                    <br></br>

                    <h2> Movements </h2>  
                    <br></br>

                    {pkm.moves?.map((movimientos, idx) => {
                        return(<div id="div2" key={idx}> {movimientos.move.name}</div>)
                    })}


                    <h2>Historial</h2>
                    { <Historial historialBusquedas={busquedas} />  } 
                    
                </div>


            </div>

            
        </>
    )

}




export default Buscador;