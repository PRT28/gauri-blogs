import React from 'react';
import './Add.scss';
import {Form, Button, Row, Container} from 'react-bootstrap';
import { ref, push } from "firebase/database";
import {database} from '../../../firebase';

const Add = () => {


    function imageExists(image_url){

        var http = new XMLHttpRequest();
    
        http.open('HEAD', image_url, false);
        http.send();
    
        return http.status !== 404;
    
    }

    const submitHanlder = e => {
        e.preventDefault();
        const data= {title: e.target[0].value, sub: e.target[1].value, image: e.target[2].value, content: e.target[3].value, editor: e.target[4].checked, category: e.target[5].value};
        if(imageExists(data.image)){
            push(ref(database, 'blogs'), data)
                .then(alert("Blog Successfully Added"))
                .catch(err => alert(err.toString()));
            window.location.reload();
        } else {
            alert("Image does not exist please give a renderable link");
        }
    }

    if (!window.sessionStorage.getItem("token")) {
        alert("You are not authorized to login the admin panel");
        return(<></>);
    } else {
        return(
            <div className="add">
                <h1>Add Blog</h1><hr /> <br />
                <Container>
                <Form onSubmit={submitHanlder}>
                    <Row>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title of your Blog" />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="sub">
                        <Form.Label>Sub-Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Sub-Title of your Blog" />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Link of your Blog" />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Blog Content</Form.Label>
                        <Form.Control as="textarea" rows={10} />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="editor">
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Editor's Pick"
                    />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="category">
                    <Form.Select aria-label="Default select example">
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

export default Add;