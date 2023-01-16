import React,{useEffect, useState} from 'react';
import './Blogedit.scss';
import {Form, Button, Row, Container, Spinner} from 'react-bootstrap';
import { ref, set, onValue } from "firebase/database";
import {database} from '../../../firebase';
import { useParams, useNavigate } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

const Blogedit = () => {

    const [data, setData] = useState({});
    const [value, setValue] = useState('');
    const nav= useNavigate();
    function imageExists(image_url){

        var http = new XMLHttpRequest();
    
        http.open('HEAD', image_url, false);
        http.send();
    
        return http.status !== 404;
    
    } 

    const {id} = useParams();
    useEffect( () => {
        onValue(ref(database, "blogs/"+id), snapshot => {
            setData(snapshot.val());
        })
    });

    const submitHanlder = e => {
        e.preventDefault();
        const data= {title: e.target[0].value, sub: e.target[1].value, image: e.target[2].value, content: value, editor: e.target[4].checked, category: e.target[5].value};
        if(imageExists(data.image)) {
            set(ref(database, 'blogs/'+id), data)
            .then(() => {
                alert("Blog Successfully Editted")
                nav("/admin/edit")})
            .catch(err => alert(err.toString()));
        } else {
            alert("Image does not exist please give a renderable link");
        }
    }

    if (!window.sessionStorage.getItem("token")) {
        alert("You are not authorized to login the admin panel");
        return(<></>);
    } else {
        if(!data) {
            return( <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>)
        } else{
            return(
                <div className="blog-edit">
                    <h1>Edit Blog</h1><hr /> <br />
                    <Container>
                    <Form onSubmit={submitHanlder}>
                        <Row>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control defaultValue={data.title} type="text" placeholder="Enter Title of your Blog" />
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="mb-3" controlId="sub">
                            <Form.Label>Sub-Title</Form.Label>
                            <Form.Control defaultValue={data.sub} type="text" placeholder="Enter Sub-Title of your Blog" />
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control defaultValue={data.image} type="text" placeholder="Enter Image Link of your Blog" />
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Blog Content</Form.Label>
                            <MDEditor
                                value={value}
                                onChange={setValue}
                            />
                            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="mb-3" controlId="editor">
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Editor's Pick"
                            defaultChecked={data.editor}
                        />
                        </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group className="mb-3" controlId="category">
                        <Form.Select value={data.category} aria-label="Default select example">
                            <option>Select Category</option>
                            <option value="seo">SEO</option>
                            <option value="beauty">Beauty</option>
                            <option value="health-and-fitness">Health and Fitness</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="parenting">Parenting</option>
                        </Form.Select>
                        </Form.Group>
                        </Row>
                        <Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Row>
                    </Form>
                    </Container>
                    <br />
                    <br />
                    <br />
                </div>
            )
        }   
    }
}

export default Blogedit;