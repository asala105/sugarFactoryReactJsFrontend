import { Button, ButtonGroup } from 'react-bootstrap';
import api from '../Service/api';
import {useState} from 'react';

function User (props) {
        const [highlighted, setHighlighted] = useState(props.is_highlighted);

        function handleHighlight (id){ 
            api.highlightUser(id)
            .then(response => {
                setHighlighted(1);
            })
            .catch(error => {
                alert('incorrect username or password');
            });
        }
    
        function handleRemoveHighlight (id){ 
            api.removeHighlight(id)
            .then(response => {
                setHighlighted(0);
            })
            .catch(error => {
                alert('incorrect username or password');
            });
        }
    return (
    <>{/* <td>profile pic (small size with a circular border)</td> */}
        <td>pp</td>
        <td>{props.first_name+ ' '+ props.last_name}</td>
        <td>{props.email}</td>
        <td>{props.net_worth + ' ' + props.currency}</td>
        <td>
        <ButtonGroup size="sm">
            <Button variant="outline-success" onClick={()=>{handleHighlight(props.id)}} size="sm" disabled={highlighted}>Highlight</Button>
            <Button variant="outline-danger" onClick={()=>{handleRemoveHighlight(props.id)}} size="sm" disabled={!highlighted}>Remove Highlight</Button>
        </ButtonGroup>
        </td>
    </>
    );
}

export default User;