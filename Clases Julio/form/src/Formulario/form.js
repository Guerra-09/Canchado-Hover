import './form.css'
import React from 'react';
// import Button -> 
import Input from '../Input/input.js';
// import Select
import Select from '../Select/select.js';
import Button from '../Button/button.js';

class Form extends React.Component {

    render() {

        var marca = ["Hyundai", "Mazada"]
        var modelo = ["Cube", "Elantra"]
        //<Button type="button"> Enviar formulario </Button>

        return (
            <div className='fondoForm'>
                {/* titulo es un prop de inputs y type tmbn  */}
                <Input titulo= "Agregar patente" type="text" />
                <Input titulo= "Agregar Anio" type="number" />

                <Select name="marca" items={marca} />
                <Select name="modelo" items={modelo} />
                <Button />
                
            </div>
        )
    }

}

export default Form