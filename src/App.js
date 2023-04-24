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
      let newPostIts = [...PostIts, response.data]
      SetPostIts(newPostIts)
    })
  }

    const handleEdit = (data) => {
    axios.put('http://localhost:3000/postits/' + data._id, data)
    .then((response) => {
      let newPostIts = PostIts.map((PostIt) => {
        return newPostIts._id !== data._id ? newPostIts : data
      })
      SetPostIts(newPostIts)
    })
  }

  const handleDelete = (deletedPostIt) => {
    axios.delete('http://localhost:3000/postits/' + deletedPostIt._id)
    .then((response) => {
      let newPostIts = PostIt.filter((PostIts) => {
        return PostIt._id !== deletedPostIt._id
      })
      SetPostIts(newPostIts)
    })
  }

  const getPostIts = () => {
    axios.get('http://localhost:3000/postits')
    .then((response) => SetPostIts(response.data), (err) => console.log(err))
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
            <PostIt postit={PostIt} handleEdit={handleEdit}/>
            <Edit postit={PostIt} handleEdit={handleEdit}/>
            <Button variant='btn btn-outline-info' onClick={ () => {handleDelete(PostIt) } }>Remove Post It</Button>
          </>
        )
      })}
    </div>
  );
}

export default App;
