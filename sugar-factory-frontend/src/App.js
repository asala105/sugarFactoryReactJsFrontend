import {Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import PicList from './Pages/PicList';
import MessagesList from './Pages/MesagesList';
import Login from './Pages/Login';


function App() {
  return (
    <div>
      <Switch>
        <Route path ='/' exact>
            <Login />
        </Route>
        <Route path ='/users' >
          <Dashboard />
        </Route>
        <Route path ='/pictures' >
          <PicList />
        </Route>
        <Route path ='/messages' >
          <MessagesList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
