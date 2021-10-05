import { Table, Container } from 'react-bootstrap';
import Message from '../components/Message';
import {useState, useEffect} from 'react';
import api from '../Service/api';
import NavBar from '../components/NavBar';
import classes from './MessagesList.module.css';

function MessagesList() {
    const [fetchedMessages, setfetchedMessages] = useState('');
    
    function removeRow(id){
        document.getElementById(id).remove();
    }

    const allMessages = ()=>{
        console.log('loadingMessages');
        api.viewAllMessages()
        .then(response => {
            setfetchedMessages(response.data);
        })
        .catch(error => {
            alert('incorrect username or password');
        });
    }
    useEffect(() => {
        allMessages();
    }, []);
    return (
        <><NavBar /><Container className={classes.container}>
            <Table hover responsive>
                <thead className="text">
                    <tr>
                        <th>Message Body</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {fetchedMessages.length === 0 ? null : fetchedMessages.map(message => <Message onRemove={function decline() { removeRow(message.id); } } key={message.id} id={message.id} message={message.body} />)}
                </tbody>
            </Table>
        </Container></>
    );
}
export default MessagesList