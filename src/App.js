import React, {useState} from 'react';
import {TextField} from '@material-ui/core';

function App() {

  const [name, setName ] = useState("Mary")

  function handleNameChange(e) {
    setName(e.target.value)
  }

  return (
    <section>
       <TextField
          id="standard-basic"
          label="Name"
          margin="normal"
          value={name}
          onChange={handleNameChange}
        />
    </section>
  )
}

export default App;
