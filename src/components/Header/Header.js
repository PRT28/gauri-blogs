import React, {useState} from "react";
import './Header.scss';
import {Navbar, Container, Nav, Form, FormControl, Button , Offcanvas} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {

    const [show, setShow] = useState(false);
    const[text, setText] = useState('');
    const nav = useNavigate();
    const location = useLocation();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = e => {
        setText(e.target.value);
    }
    const handleSearch = () => {
        if(text==="") {
            nav('/search/all')
        } else {
            nav('/search/'+text)
        }
    }

    const handleLogout = () => {
        window.sessionStorage.clear();
        nav('/');
    }


    return (
        <div className="head">
            <Navbar fixed="top"  bg="dark" variant="dark">
                <Container fluid>
                <Navbar.Brand href="/">Gauri Harbola</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href='/about'>About</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                </Nav>
                <Button variant="dark" onClick={handleShow} className="me-2">
                    <GiHamburgerMenu />
                </Button>
                <Navbar.Offcanvas show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Categories</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    {
                        location.pathname.includes("admin") && !location.pathname.includes("login") ? <>
                            <Nav.Link href='/admin/add'>Add</Nav.Link>
                            <Nav.Link href='/admin/edit'>Edit/Delete</Nav.Link>
                            <Nav.Link href='/admin/message'>Messages</Nav.Link>
                            <Button variant="dark" onClick={handleLogout} className="me-2">Logout</Button>
                        </> : <>
                        <Nav.Link href='/category/all'>All</Nav.Link>
                        <Nav.Link href='/category/seo'>SEO</Nav.Link>
                        <Nav.Link href='/category/beauty'>Beauty</Nav.Link>
                        <Nav.Link href='/category/health-and-fitness'>Health And Fitness</Nav.Link>
                        <Nav.Link href='/category/lifestyle'>Lifestyle</Nav.Link>
                        <Nav.Link href='/category/parenting'>Parenting</Nav.Link>
                        </>
                    }
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;