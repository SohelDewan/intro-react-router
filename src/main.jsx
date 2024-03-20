import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UsersDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>, 

    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
    {path:"/user/:userId",
    loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element:<UserDetails></UserDetails>
  }, {
    path: "/posts",
    loader:()=> fetch('https://jsonplaceholder.typicode.com/posts '),
    element:<Posts></Posts>
  },
  {path:"/post/:postId",
    loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
    element:<PostDetails></PostDetails>
  }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
