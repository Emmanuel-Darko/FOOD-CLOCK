import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './routes/Landing';
import SignIn from './routes/Signin';
import SignUp from './routes/Signup';
import Home from './routes/Home';
import Counter from './routes/Counter';
import Protected from './routes/Protected';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: 
    <Protected> 
      <Home /> 
    </Protected>,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/count",
    element: 
    <Protected> 
      <Counter />
    </Protected>,
    // errorElement: <ErrorPage />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
