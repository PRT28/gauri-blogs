import React, {useEffect, useState} from 'react';
import './Edit.scss';
import { Container, Row, Button, Col } from 'react-bootstrap';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { database } from '../../../firebase';
import {ref,  onValue, remove} from "firebase/database";

const Card = props => {

    const nav= useNavigate();

    const editHandle = () => {
        nav("/admin/edit-blog/"+props.id)
    }

    const deleteHandle = () => {
        remove(ref(database, "blogs/"+props.id))
            .then(alert("Blog deleted successfully"))
            .catch(err => alert(err.toString()));
    }

    return(
        <div className="card">
            <Container>
                <Row>
                <Col>
                    <Row>{props.head}</Row>
                    <Row>{props.sub}</Row>
                </Col>
                <Col sm={1}><Button onClick={ () => editHandle()} variant="primary"><AiFillEdit /></Button></Col>
                <Col sm={1}><Button onClick= { () => deleteHandle()} variant="danger"><AiFillDelete /></Button></Col>
                </Row>
            </Container>
        </div>
    )
}

const Edit = () => {

    
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        onValue(ref(database, "blogs"), snapshot => {
            let temp = []
            snapshot.forEach(data => {
                const dataVal = data.val();
                temp.push({id: data.key, ...dataVal})
            })
            setBlogs(temp);
        })
    })

    if (!window.sessionStorage.getItem("token")) {
        alert("You are not authorized to login the admin panel");
        return(<></>);
    } else {
        return (
            <div className="edit">
                <h1>Edit/ Delete Blogs</h1><hr /><br />
                <div>
                    { blogs.length > 0 ? blogs.map((d, index) => <Card head={d.title} sub={d.sub} id={d.id} />) : <p style={{marginLeft: '15px', marginTop: '15px', fontWeight: '500'}}>No blogs avaialble</p> }
                </div>
            </div>);
    }
}

export default Edit;