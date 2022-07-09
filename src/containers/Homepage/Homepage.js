import React, {useState, useEffect} from "react";
import './Homepage.scss';
import Post from '../../components/Post/Post';
import {database} from '../../firebase';
import { ref, onValue } from "firebase/database";
import {Spinner} from 'react-bootstrap';

const Homepage = () => {

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
    

    return(
                <div className="home">
                    <h1>Gauri Harbola</h1><hr />
                    <h5>LIFE OF A SEO ENTHUSIAST, CONTENT LOVER!
                        SPREADING POSITIVE VIBES THROUGH WORDS<br />
                        If you’re looking for SEO, fashion/grooming, travel and lifestyle tips, then you’re definitely at the right place. 
                         My belief is that businesses can grow with a conscience and succeed with a soul - and that inbound is the way to do that.</h5><br /><br />
                    <div className="card-wrapper">
                        {
                            blogs.map((d,index)=> 
                                d.editor && <Post head={d.title} sub={d.sub} im={d.image} id={d.id} />
                            )
                        }
                        {
                            blogs.length === 0 && <Spinner animation="border"  />
                        }
                    </div><br /><br />
                </div>
    );
}

export default Homepage;