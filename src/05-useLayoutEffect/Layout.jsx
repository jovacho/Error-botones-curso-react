// NO FUNCIONA, CURSO DESACTUALIZADO
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const Layout = () => {

  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);


  return (
    <>
    <h1>Información de Pokémon</h1>
    <hr />

    { isLoading
      ? <LoadingMessage />
      // :<h2>{ data?.name } </h2>
      : (
      <PokemonCard 
      id={ counter }
      name={ data.name }
      sprites={ [
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
      ] } 
      
      />
    )
}



    <button
    className='btn btn-primary mt-2'
    onClick={ () => counter > 1 ? decrement() : null }
    >
      Anteriores
    </button>
    <button
    className='btn btn-primary mt-2'
    onClick={ () => increment() }
    >
      Siguiente
    </button>
    
    </>
  )
}