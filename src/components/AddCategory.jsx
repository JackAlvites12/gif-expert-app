import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    // El valor de mi Input inicialmente será un string vacío 
    const [inputValue, setInputValue] = useState('');

    // Creamos una función que recibirá el evento y establecemos el nuevo 
    // valor de mi input que será el event.target.value 

    const onInputChange = ( { target: { value }} ) => {
        setInputValue( value )
    }


    // Cada vez que se envía el formulario a través de un submit:
    const onSubmit = ( event ) => {
        event.preventDefault()

        // Si la longitud del input es menor a un caracter no lo agregues.
        if(inputValue.trim().length <= 1) return 

        // Llamamos a la función pasada como prop 
        onNewCategory(inputValue.trim())

        // Limpiamos el estado del input. 
        setInputValue('')
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue}
                onChange={(event) => onInputChange( event )}/>
        </form>
    )
}

