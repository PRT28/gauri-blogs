import React, {useState} from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Login.scss';

const Login = () => {

    const [show, setShow] = useState(false);
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');
    const nav = useNavigate();

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    const handleSubmit = () => {
        if(user === 'gauriNaina3445' && pass === 'naina45567') {
            const token= makeid(15);
            window.sessionStorage.setItem("token",token);
            nav('/admin/add');
        } else {
            setShow(true);
        }
        
    }

    return(
        <>
        {show &&<Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Wrong Creds!!</Alert.Heading>
        <p>
          The username or password that you submitted are wrong please.
        </p>
      </Alert>}
        <div className="form-wrapper">
            <div className="form-signin">
            <h1 class="h3 mb-3 fw-normal">Admin Login</h1><hr /><br />
            <Form>
                <Form.Group style={{marginBottom: '10px'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={e => setUser(e.target.value)} type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group style={{marginBottom: '20px'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPass(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100' size="lg" variant="primary" onClick={()=> handleSubmit()} type="button">Login In</Button>
            </Form>
            </div>
        </div>
        </>)
}

export default Login;