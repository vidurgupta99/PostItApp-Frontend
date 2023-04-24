import {useState} from 'react'

const Edit = (props) => {
    const [PostIts, SetPostIts] = useState({...props.PostIts})

    const handleChange = (event) => {
        SetPostIts({...PostIts, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(PostIts)
    }

    return(
        <>
        <details>
            <summary>Edit Post It</summary>
            <form onSubmit={handleSubmit}>
            <ul>
            <li><label htmlFor='date'>Date: </label>
                <input type='text' name='date' onChange={handleChange}/>
                <br/></li>
                <li><label htmlFor='time'>Time: </label>
                <input type='text' name='time' onChange={handleChange}/>
                <br/></li>
                <li><label htmlFor='image'>Note: </label>
                <input type='text' name='note' onChange={handleChange}/></li>
                </ul>
            </form>
        </details>
        </>
    )
}

export default Edit