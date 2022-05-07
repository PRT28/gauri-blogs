import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Search.scss';
import Card from '../../components/Card/Card';
import { database } from '../../firebase';
import { ref, onValue  } from "firebase/database";

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
                        <Card head={d.title} sub={d.sub} im={d.image} id={d.id} />
                        )
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
                        d.title.includes(filter) && <Card head={d.title} sub={d.sub} im={d.image} id={d.id} />
                        )
                }
                </div>
            </div>);
    }
}

export default Search;