import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Search.scss';
import Post from '../../components/Post/Post';
import { database } from '../../firebase';
import { ref, onValue  } from "firebase/database";
import {Spinner} from 'react-bootstrap';


const Search = () => {
    const { filter } = useParams();
    const [blogs, setBlogs] = useState([])

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

    if(filter === 'all') {
        return (
            <div className="search">
                <h1>Search Results: {filter.toUpperCase()}</h1><br /> <hr />
                <div className="card-wrapper">
                {
                    blogs.map((d,index)=> 
                        <Post head={d.title} sub={d.sub} im={d.image} id={d.id} />
                        )
                }
                {
                    blogs.length === 0 && <Spinner animation="border"  />
                }
                </div>
            </div>);
    } else {
        return (
            <div className="search">
                <h1>Search Results: {filter.toUpperCase()}</h1><br /> <hr />
                <div className="card-wrapper">
                {
                    blogs.map((d,index)=> 
                        d.title.includes(filter) && <Post head={d.title} sub={d.sub} im={d.image} id={d.id} />
                        )
                }
                {
                    blogs.length === 0 && <Spinner animation="border"  />
                }
                </div>
            </div>);
    }
}

export default Search;