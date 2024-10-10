
import { StrictMode } from 'react';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { createRoot } from 'react-dom/client';
import { createBrowserRouter, BrowserRouter, RouterProvider, HashRouter} from "react-router-dom";


// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './06-memos/Memorize';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';


import './index.css'

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   <>
    
//     <MainApp />
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
//   </>
//   // {/* </StrictMode>, */}
// )

const router = createBrowserRouter([

  {

    path: "*",

    element: <MainApp />,

  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,

)
