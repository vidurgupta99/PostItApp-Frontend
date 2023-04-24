import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import PostIt from './components/PostIt';
import Add from './components/Add';
import Edit from './components/Edit'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"


const App = () => {

  const [PostIts, SetPostIts] = useState([])

  const handleCreate = (data) => {

    axios.post('http://localhost:3000/PostIts', data)
    .then((response) => {
      let newPostIts = [...postits, response.data]
      setPostIts(newPostIts)
    })
  }

    const handleEdit = (data) => {
    axios.put('http://localhost:3000/postits/' + data._id, data)
    .then((response) => {
      let newPostIts = postits.map((postit) => {
        return newPostIts._id !== data._id ? newPostIts : data
      })
      setPostIts(newPostIts)
    })
  }

  const handleDelete = (deletedPostIt) => {
    axios.delete('http://localhost:3000/postits/' + deletedPostIt._id)
    .then((response) => {
      let newPostIts = postit.filter((postits) => {
        return postit._id !== deletedPostIt._id
      })
      SetPostIts(newPostIts)
    })
  }

  const getPostIts = () => {
    axios.get('http://localhost:3000/postits')
    .then((response) => setPostIts(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getPostIts()
  })

  return (
    <div>
      <h2 className='font'>Post Its</h2>

      <Add handleCreate={handleCreate}/>

      {PostIts.map((PostIt) => {
        return (
          <>
            <PostIt postit={postit} handleEdit={handleEdit}/>
            <Edit postit={postit} handleEdit={handleEdit}/>
            <Button variant='btn btn-outline-info' onClick={ () => {handleDelete(postit) } }>Remove Post It</Button>
          </>
        )
      })}
    </div>
  );
}

export default App;
