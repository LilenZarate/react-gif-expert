import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    setinputValue( target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return ; // trim borra los espacios en blanco
    
    onNewCategory( inputValue.trim());
    setinputValue('');
    
    //setCategories( (categories) => [inputValue, ...categories]);
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
