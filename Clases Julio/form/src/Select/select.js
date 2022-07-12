function select(props) {
    
    return(
        <div>
            <p> Seleccione {props.name} </p>
            <select onChange={ (event) => {props.change(event)}}>

                <option> Seleccione un item...</option>
                {props.items.map((item) => {
                    return (<option key={item.id}> {item.name} </option>)
                })}

            </select>
        </div>
    )
}

export default select