import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';


const heavyStuff = ( iterarionNumber = 100 ) => {
    for ( let i = 0; i < iterarionNumber; i++ ) {
        console.log('Ahí vamos...')
    }

    return `${ iterarionNumber } iteraciones realizadas`;

}


export const MemoHook = () => {


    const { counter, increment } = useCounter( 4000 );
    const [show, seSthow] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter]);

  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr />

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary col-md-2"
            onClick={ () => seSthow( !show )}
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    
    
    </>
  )
}
