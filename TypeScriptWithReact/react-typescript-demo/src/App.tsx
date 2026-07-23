 import './App.css'
import Private from './components/Auth/Private.tsx';
import Profile from './components/Auth/Profile.tsx';
// import Counter from './components/class/counter.tsx';
// import Greet from './components/Greet'
// import { Person } from './components/Person'
// import PersonList from './components/PersonList';
// import Status from './components/Status';
// import HtmlElement from './components/HtmlElement';
// import HtmlChildren from './components/HtmlChildren';
// import Container from './components/Container';
// import Auth from './components/states/Auth';
// import User from './components/states/User';

// import {themeContextProvider} from '../src/components/Hooks/UseContextHook/UseContex.tsx';
// import { Box } from './components/Hooks/UseContextHook/Box.tsx';

import {User} from './components/Hooks/UseContextHook/User.tsx';
import { UserContextProvider } from './components/Hooks/UseContextHook/UserContext';
import MutableRef from './components/Hooks/UseRef/MutableRef.tsx';

function App() {
  const personName = {
    first:"A",
    last:"M"
  }
  const plist = [{first:"A",last:"B"},{first:"C",last:"D"},{first:"E",last:"F"}];

  return (
    <div style={{backgroundColor:"beige",width:"100vw",height:"100vh",scrollbarWidth:"none",overflow:"hidden"}}>
    {/* <Greet name='Arvind' college='IIIT RANCHI' islogedIn={false}/> */}
    {/* <Person name={personName}/> */}
    {/* <PersonList name={plist}/> */}

    {/* <Status status='success'/>   */}
    {/* passing children the use full brace */}
    {/* <HtmlElement>childres Props</HtmlElement> */}

    {/* passing html component or react component */}
    {/* <HtmlChildren>
      <h1>Hi i'm react component.</h1>
    </HtmlChildren> */}

  {/* passing style as a props */}

    {/* <Container styles={{border:'2px solid black',padding:'2px',borderRadius:"2px"}}/> */}

      {/* <Auth/> */}

       {/* <User/>  */}


       {/* <themeContextProvider>
            <Box/>
       </themeContextProvider> */}

       {/* Future value of the useContext hook */}

       {/* <UserContextProvider>
          <User/>
       </UserContextProvider> */}

          {/* <MutableRef/> */}

          {/* <Counter message="The Count value is"/> */}

          <Private isLoggedIn={true} Component={Profile}/>


    </div>
  )
}

export default App
