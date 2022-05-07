import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import './Category.scss'
import Card from '../../components/Card/Card';
import { database } from '../../firebase';
import { ref, onValue } from "firebase/database";


const Category = props => {

    const {category} = useParams();
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

    if(category === 'all') {
        return(
            <div className="category">
                <h1>{category.toUpperCase().replaceAll('-',' ')}</h1><br /> <hr />
                <div className="card-wrapper">
                {
                    blogs.map((d,index)=> 
                        <Card head={d.title} sub={d.sub} im={d.image} id={d.id} />
                        )
                }
                </div>
            </div>
            )
    } else {
        return(
            <div className="category">
                <h1>{category.toUpperCase().replaceAll('-',' ')}</h1><br /> <hr />
                <div className="card-wrapper">
                {
                    blogs.map((d,index)=> 
                        d.category===category && <Card head={d.title} sub={d.sub} im={d.image} id={d.id} />
                        )
                }
                </div>
            </div>
            )
    }
};

export default Category;