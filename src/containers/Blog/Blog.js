import React,{useEffect, useState} from 'react';
import './Blog.scss';
import { useParams } from 'react-router-dom';
import { database } from '../../firebase';
import { ref, onValue } from "firebase/database";

const Blog = () => {
    const [data, setData] = useState({});
    const {id} =useParams();

    useEffect( () => {
        onValue(ref(database, "blogs/"+id), snapshot => {
            setData(snapshot.val());
        })
    });

    return (
        <>
        <img className='blog-image' src={data.image} alt=""></img>
        <div className="blog">
            <h3>{data.title}</h3>
            <div className='sub'>{data.sub}</div>
            <hr />
            <div className='text'>
                {data.content}
            </div>
        </div>
        <br />
        <br />
        </>
    );
}

export default Blog;