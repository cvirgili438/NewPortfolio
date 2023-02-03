import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      
        <Switch>
         <Route  path={'/'} component={LandingPage}   />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
