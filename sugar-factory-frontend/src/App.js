import {Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
function App() {
  return (
    <div>
      <Switch>
        <Route path ='/' exact>
            <Login />
        </Route>
        <Route path ='/dashboard' >
           <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
