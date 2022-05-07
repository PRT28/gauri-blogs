import React, {useEffect, useState} from 'react';
import './Messages.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { database } from '../../../firebase';
import {ref, onValue} from "firebase/database";

const Card = props => {

    return(
        <div className="card">
            <Container>
                <Row>
                <Col>
                    <Row>{props.name}</Row>
                    <Row>{props.email}</Row>
                    <Row>{props.message}</Row>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

const Messages = () => {

    
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        onValue(ref(database, "messages"), snapshot => {
            let temp = []
            snapshot.forEach(data => {
                const dataVal = data.val();
                temp.push({id: data.key, ...dataVal})
            })
            setMessages(temp);
        })
    })

    if (!window.sessionStorage.getItem("token")) {
        alert("You are not authorized to login the admin panel");
        return(<></>);
    } else {
        return (
            <div className="message">
                <h1>Messages</h1><hr /><br />
                <div>
                    { messages.length > 0 ? messages.map((d, index) => <Card name={d.name} email={d.email} message={d.message} />) : <p style={{marginLeft: '15px', marginTop: '15px', fontWeight: '500'}}>No Message avaialble</p> }
                </div>
            </div>);
    }
}

export default Messages;