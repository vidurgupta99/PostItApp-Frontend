import {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"   

const Add = (props) => {
    const [PostIts, SetPostIts] = useState({})  

    const handleChange = (event) => {
        SetPostIts({...PostIts, [event.target.name]: event.target.value})

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(PostIts)
    }

    return (
        <>
            <form onSubmit={handleSubmit}> 
            <ul>
                <li><label htmlFor='date'>Date </label>
                <input type='text' name='date' onChange={handleChange}/>
                <br/></li>
                <li><label htmlFor='time'>Time </label>
                <input type='text' name='time' onChange={handleChange}/>
                <br/></li>
                <li><label htmlFor='image'>Note </label>
                <input type='text' name='note' onChange={handleChange}/></li>
                <Button variant='btn btn-success' type="submit">Submit</Button>
                </ul>
            </form>
        </>
    )
}

export default Add