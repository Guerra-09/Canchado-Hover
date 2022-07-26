import React, { useEffect, useState } from "react"
import './buscador.css'
import Historial from "../Historial/historial"

// 1. console.log() imprime objetos linea 62.
// 2. pasar array a component historial sin mostrarlo en buscador
// 3. Ir a componente pokemon con roouting (?)
// 4. Combate pokemon enteros


const Buscador = (props) => {

    const [texto, setTexto] = useState("")

    const [imagePkmn, setImagePkmn] = useState("")
    const [searchPkm, setSearchPkmn] = useState("")
    const [pkmnHp , setPkmnHp] = useState("")
    const [pkmnAtt, setPkmnAtt] = useState("")
    const [pkmnAttSp, setPkmnAttSp] = useState("")
    const [pkmnDef, setPkmnDef] = useState("")
    const [pkmnDefSp, setPkmnDefSp] = useState("")
    const [pkmnSpeed, setPkmnSpeed] = useState("")

    const [busquedas, setBusquedas] = useState([])


    //change to see in github

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/" + searchPkm) 
        .then(res => res.json())
        .then(
            (data) => {
                setImagePkmn(data.sprites.front_default)
                setPkmnHp(data.stats[0].base_stat)
                setPkmnAtt(data.stats[1].base_stat)
                setPkmnDef(data.stats[2].base_stat)
                setPkmnAttSp(data.stats[3].base_stat)
                setPkmnDefSp(data.stats[4].base_stat)
                setPkmnSpeed(data.stats[5].base_stat)
            }
        )

    }, [texto])


    const handleChange = (pkmn) => {
        setSearchPkmn(pkmn.target.value)
        
    }

    const clickUsuario = (evento) => {
        setTexto(searchPkm)


        setBusquedas(prevArray => [...prevArray, <div> 
                                                    <br /> 
                                                    {searchPkm} 
                                                </div>])
        

        
        
        console.log("Vida: " + {pkmnHp} + "Ataque: " + {pkmnAtt} + "Def: " + {pkmnDef} + "attS: " + {pkmnAttSp} + "defS:" + {pkmnDefSp} + "speed: " + {pkmnSpeed}) 
    }

    

    return (
        <>
            {/*Funcion flecha, el e es un evento 'a lo que se cambia' y luego se llama a la funcion y se le pasa (e) como parametro  */}

            <div className="pkmnStats">

                <input placeholder="pokemon name..." type="text" onChange={ (pkmn) => { handleChange(pkmn) } } />
                <br />
                <button className='button' type="button" onClick={clickUsuario}>Buscar</button>
                <div>
                    { <Historial historialBusquedas={busquedas} />  } 
                </div>


            </div>
            
        </>
    )

}




export default Buscador;