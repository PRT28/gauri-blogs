import React, {useState, useEffect} from "react";
import './Homepage.scss';
import Card from '../../components/Card/Card';
import {database} from '../../firebase';
import { ref, onValue } from "firebase/database";

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
                    <h1>Gauri Blogs</h1><hr />
                    <h5>Write Something here</h5><br /><br />
                    <h3>Editor's Pick</h3>
                    <div className="card-wrapper">
                        {
                            blogs.map((d,index)=> 
                                d.editor && <Card head={d.title} sub={d.sub} im={d.image} id={d.id} />
                            )
                        }
                    </div><br /><br />
                </div>
    );
}

export default Homepage;