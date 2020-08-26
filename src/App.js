import React, { useState } from 'react';
import './app.scss';
import { Form } from './components/Form';
import { ClimaInfo } from './components/ClimaInfo';

function App() {

    const [state, setState] = useState({mostrar: false})

    const {mostrar} = state;

  return (
    <>
        <h1>Clima React App</h1>

        <main>
          <Form setState={setState}/>
          {mostrar && <ClimaInfo state={state} />}
        </main>
    </>
  );
}

export default App;
