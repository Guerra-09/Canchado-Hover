function select(props) {
    return(
        <div>
            <p> Seleccione {props.name} </p>
            <select>
                <option> Seleccione un item...</option>
                {props.items.map(item => {
                    return (<option>{item}</option>)
                })}
            </select>
        </div>
    )
}

export default select