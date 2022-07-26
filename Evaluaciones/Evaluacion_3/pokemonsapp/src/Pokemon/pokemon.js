import React, { useEffect, useState } from "react"
import './pokemon.css'




const Pokemon = (props) => {

    const [texto, setTexto] = useState("")

    const [imagePkmn, setImagePkmn] = useState("")
    const [searchPkm, setSearchPkmn] = useState("")
    const [pkmnHp , setPkmnHp] = useState("")
    const [pkmnAtt, setPkmnAtt] = useState("")
    const [pkmnAttSp, setPkmnAttSp] = useState("")
    const [pkmnDef, setPkmnDef] = useState("")
    const [pkmnDefSp, setPkmnDefSp] = useState("")
    const [pkmnSpeed, setPkmnSpeed] = useState("")
    const [pkmnAtributes, setPkmnAtributes] = useState(0)

    //change to see in github

    useEffect( () => {
        
        fetch("https://pokeapi.co/api/v2/pokemon/riolu") 
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
        
    }

    const clickPokemon = (event) => {
        console.log("Pokemon presionado")
        console.log(pkmnAtributes)
        if (pkmnAtributes == 0){
            setPkmnAtributes(1)
            
        } else {
            setPkmnAtributes(0)

        }

    }

    

    return (
        <>
            {/*Funcion flecha, el e es un evento 'a lo que se cambia' y luego se llama a la funcion y se le pasa (e) como parametro  */}

            <div className="pkmnStats">

                <img onClick={clickPokemon} src={imagePkmn} />

                <p> Heal points: {pkmnHp} </p>
                <p> Attack: {pkmnAtt} </p>
                <p> Defence: {pkmnDef} </p>
                <p> Special Attack: {pkmnAttSp} </p>
                <p> Special Defence: {pkmnDefSp} </p>
                <p> Speed: {pkmnSpeed} </p>
            </div>
            
        </>
    )

}




export default Pokemon;