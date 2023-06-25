import React from 'react'
import { Link } from 'react-router-dom'

// import axios from 'axios';
const Home = (props) => {
  const { allAuthors, fun: deleteAuthor } = props;
    
  return (
    <div>
        <h2>Favorite authors</h2>
        <Link to= "/new">Add an author</Link>
        <p>We have quotes by : </p>

        <div  className="table-container">
  <table  className="table">
    <thead>
      <tr>
        <th >Author</th>
        <th >Actions Available</th>
      </tr>
    </thead>
    <tbody>
      {props.allAuthors.map((author, i) => (
        <tr key={i}>
          <td >{author.name}</td>
          <td >
           <button onClick={()=>deleteAuthor(author._id)}>Delete</button>
          </td>
          <td >
          <Link to={"/author/" + author._id + "/edit"}>
        Edit
      </Link> 
      
     
          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Home