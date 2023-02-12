import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import { createContext, useState } from 'react';


export const ThemeContext = createContext("light")


function App() {

  const [theme,setTheme] = useState('light')
  
  return (
  <BrowserRouter>
  <ThemeContext.Provider value={{theme,setTheme}} >
    <div className="App" id={theme}>
      <NavBar />
        <Switch>
         <Route  path={'/'} component={LandingPage}   />
        </Switch>
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
