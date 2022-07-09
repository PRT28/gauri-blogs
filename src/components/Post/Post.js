import React from 'react';
import './Post.scss';
import {useNavigate} from 'react-router-dom';
import {Col, Row, Container} from 'react-bootstrap';

const Post = props => {

    const nav = useNavigate();
    const clickHandler = () => {
       nav('/blog/'+props.id)
    }

    return (
        <div className='post'>
            <Container fluid onClick = { () => clickHandler()}>
                <Row>
                    <img src={props.im} alt="" />
                </Row>
            <Row>
                <Col>
                    <h2>{props.head}</h2>
                    <p>{props.sub}</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Post;