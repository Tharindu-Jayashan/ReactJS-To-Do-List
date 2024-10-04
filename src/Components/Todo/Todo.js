import React from 'react'
import './Todo.css'
import Alert from 'react-bootstrap/Alert';

export default function Todo(props) {
  return (
    <div>
        <Alert key='primary' variant='primary'>
          {props.data}
        </Alert>
    </div>
  )
}
