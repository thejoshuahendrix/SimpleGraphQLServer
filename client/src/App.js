import logo from './logo.svg';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:4000/graphql?query={
          users {
            name
            email
            posts {
              title
              link
            }
          }
        }` 

    )
      console.log(result.data.data);
      setdata(result.data.data.users)
    }
    fetchData();
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
           {data.map(user => {return <div><div>{user.name}</div><div>{user.email}</div><div>{user.posts.map(post => {
           return <div>{post.title}</div>})}</div></div>})}
          
        
      </header>
    </div>
  );
}

export default App;
