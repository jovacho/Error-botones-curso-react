import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {

  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
    <h1>Información de Pokémon</h1>
    <hr />

    { isLoading && <p>Cargando...</p>}

    <h2>{ data?.name } </h2>

    <button
    className='btn btn-primary mt-2'
    onClick={ () => counter > 1 ? decrement() : null }
    >
      Anteriores
    </button>
    <button
    className='btn btn-primary mt-2'
    onClick={ () => decrement() }
    >
      Siguiente
    </button>
    
    </>
  )
}
