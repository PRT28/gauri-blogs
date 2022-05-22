import React from 'react';
import './Contact.scss';
import {Form, Button, Container, Row} from 'react-bootstrap';
import {BsInstagram} from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import {GrDocumentUser} from 'react-icons/gr'
import { database } from '../../firebase';
import { ref, push } from "firebase/database";

const Contact = () => {


    const submitHanlder = e => {
        e.preventDefault();
        const data= {email: e.target[0].value, name: e.target[1].value, message: e.target[2].value};
        push(ref(database, 'messages'), data)
            .then(alert("Thank you for your response"))
            .catch(err => alert(err.toString()));
        window.location.reload();
    }

    return (
        <div className="contact">
            <h3><u>CONTACT US</u></h3>
            <h5>Please give us your valueable thoughts &#128516;</h5>
            <br />
            <Container>
            <Form onSubmit={submitHanlder}>
                <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Messsage</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </Row>
                <Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Row>
            </Form>
            </Container>
            <div className="social">
                <a href="https://www.instagram.com/gauriharbola/" target="_blank" rel="noreferrer"><BsInstagram size="30px" /></a>
                <a href="mailto:gauri.harbola17@gmail.com" target="_blank" rel="noreferrer"><GrMail size="30px" /></a>
                <a href='https://drive.google.com/file/d/1vNmh1JfiLNmcb5UgV5d2abFHhTXobBO-/view?usp=sharing' target="_blank" rel="noreferrer" ><GrDocumentUser size="30px" /></a>
            </div>
        </div>
    )
}

export default Contact;