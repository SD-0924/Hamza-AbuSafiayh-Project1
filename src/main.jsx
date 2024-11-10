import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './variables.css'
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {router} from './router';
import './details.css'
import './style.css'
import './variables.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>  
  </StrictMode>,
)
