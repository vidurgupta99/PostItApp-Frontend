import {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css" 
import '../App.css';



const PostIt = (props) => {
    return (
        <div className='divForPostIts'>
            <p>Date: {props.PostIt.date}</p>
            <p>Time: {props.PostIt.time}</p>
            <p>Note: {props.PostIt.note}</p>
        </div>
    )
}
export default PostIt