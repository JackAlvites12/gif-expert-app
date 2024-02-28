import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  // Queremos iniciar el estado con un arreglo
  const [ categorias, setCategorias ] = useState(['gif'])
  
  const onAddCategory = ( newCategory ) => {

      // Validamos si la nueva categoria ya existe en el arreglo 
      if(categorias.includes(newCategory)){
        return;
      }

      setCategorias([newCategory])
  }

  return (
    <>
      <h1 className="title">Gif Expert App</h1>

      <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>

      { 
        categorias.map(categoria => 
          <GifGrid key={categoria} category={categoria}/>
        )
      }
      
    </>
  )
}


