import React from 'react';
import { useRoutes } from "react-router-dom";
import Homepage from './containers/Homepage/Homepage';
import Category from './containers/Category/Category';
import Contact from './containers/Contact/Contact';
import Blog from './containers/Blog/Blog';
import Search from './containers/Search/Search';
import Login from './containers/Admin/Login/Login';
import Add from './containers/Admin/Add/Add';
import Edit from './containers/Admin/Edit/Edit';
import Blogedit from './containers/Admin/Blogedit/Blogedit';
import Messages from './containers/Admin/Messages/Messages';
import About  from './containers/About/About';

const R = () => {

    return (
        useRoutes([
            {path: '/', element: <Homepage />},
            {path: '/category/:category', element: <Category />},
            {path: '/about', element: <About />},
            {path: '/search/:filter', element: <Search />},
            {path: '/contact', element: <Contact />},
            {path: '/blog/:id', element: <Blog />},
            {path: '/admin/login', element: <Login />},
            {path: '/admin/add', element: <Add />},
            {path: '/admin/edit', element: <Edit />},
            {path: '/admin/edit-blog/:id', element: <Blogedit />},
            {path: '/admin/message', element: <Messages />}
        ])
    )
};

export default R;