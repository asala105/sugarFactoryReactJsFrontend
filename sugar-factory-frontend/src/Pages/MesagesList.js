import { Table, Container } from 'react-bootstrap';
import Message from '../components/Message';
import {useState, useEffect} from 'react';
import api from '../Service/api';

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
        <Container>
        <Table hover>
            <thead>
                <tr>
                <th>Message Body</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {fetchedMessages.length === 0? null : fetchedMessages.map(message => <Message onRemove={function decline(){removeRow(message.id)}} key={message.id} id={message.id} message={message.body}/>)}
            </tbody>
        </Table>
        </Container>
    );
}
export default MessagesList