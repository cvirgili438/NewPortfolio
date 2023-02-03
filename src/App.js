import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <NavBar />
        <Switch>
         <Route  path={'/'} component={LandingPage}   />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
