import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate=useNavigate()

  return (
    <div className='mainHome'>
        <h1 className='headingHome'>Welcome to the to do list app</h1>
        <Button variant="success" className='btn1' onClick={(()=>{navigate('/main')})} > GetStarted </Button>{' '}
    </div>
  )
}
