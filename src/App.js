import React, {useState, useContext, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TextField} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import LocaleContext from './LocaleContext';
import { InputLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection : 'column',
    alignItems: 'center'
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));



function App() {



  console.log(useTheme())

  const [name, setName ] = useState("Mary")
  const [surname, setSurname ] = useState("Poppins")

  const locale = useContext(LocaleContext)

  useEffect( ()=> {
    document.title = name + ' ' + surname
  })

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value)
  }

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <LocaleContext.Provider value="en">
      <Container maxWidth="sm">
     
   
    <section>
    <div className={classes.container}>
       <TextField
          // id="standard-basic"
          // label="Name"
          // margin="normal"
          value={name}
          onChange={handleNameChange}
          className={classes.textField}
        />

       <TextField
          // id="standard-basic"
          // label="Name"
          // margin="normal"
          value={surname}
          onChange={handleSurnameChange}
          className={classes.textField}
        />

        <InputLabel>{locale}</InputLabel>
        </div>
    </section>
  
  

    </Container>
    </LocaleContext.Provider>
    </React.Fragment>
  )
}

export default App;


//https://css-tricks.com/almanac/properties/f/flex-wrap/
//flex-wrap: wrap;
//Specifies that the flexible items will wrap if necessary

//The container centers your content horizontally. It's the most basic layout element.

//https://www.w3schools.com/csSref/css3_pr_flex-direction.asp
//column	The flexible items are displayed vertically, as a column

//https://www.w3schools.com/cssref/css3_pr_align-items.asp


//Material-UI uses a recommended 8px scaling factor by default.
//https://material-ui.com/customization/spacing/
//Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.

//The <section> tag is new in HTML5.