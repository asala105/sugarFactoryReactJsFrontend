import {Route, Switch} from 'react-router-dom';
import NavBar from '../Pages/NavBar';
import UserList from '../Pages/UserList';
import PicList from '../Pages/PicList';
import MessagesList from './MesagesList';
function Dashboard() {
    return (
        <div>
            <NavBar />
            <UserList />
            <PicList />
            <MessagesList />
        </div>
    );
}
export default Dashboard