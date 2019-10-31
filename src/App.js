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

  //use of custom hooks. that can be shared
  const width= useWindowWidth()
  useDocumentTitle(name + ' ' + surname)

  // useEffect( ()=> {
  //   document.title = name + ' ' + surname
  // })

   //Conceptuall seperate , use effect more than once
  // useEffect( ()=> {
  //   const handleResize = () => setWidth(window.innerWidth)
  //   window.addEventListener('resize', handleResize)

  //   //return a function. react will call this to clean up, unsubscribe
  //   return () => {
  //     window.removeEventListener('resize',handleResize)
  //   }
  // })

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
        <InputLabel>{width}</InputLabel>
        </div>
    </section>
  
  

    </Container>
    </LocaleContext.Provider>
    </React.Fragment>
  )
}

export default App;

//Another functional component that returns a width, rather than a JSX//
//calling it a function hook, By convention starts with use
function useWindowWidth() {

  const [width, setWidth] = useState(window.innerWidth)

  useEffect( ()=> {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    //return a function. react will call this to clean up, unsubscribe
    return () => {
      window.removeEventListener('resize',handleResize)
    }
  })

  return width
}

//custom hooks can take values, return or not return values
function useDocumentTitle(title) {
   useEffect( ()=> {
    document.title = title
  })

}
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

//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//https://developer.mozilla.org/en-US/docs/Web/Events
//https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event