import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;//compara si la categoria que se ingrese ya existe en la busqueda
        setCategories([newCategory, ...categories]); // forma de agregar un elemento al useState              
    }


    return (
        <>

            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value)}
            />
        
            
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={category} />
                ))
            }


        </>
    )
}
