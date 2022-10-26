import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [properties, setProperties] = useState([])

  useEffect(() => {
     fetchProperties()
  }, [])

  const fetchProperties = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const jsonResponse = await response.json()
    setProperties(()=> [...jsonResponse])
  }

  
  return (
    <div className="App">
      <div>Hello world</div>
      {isLogin ? <div>Welcome</div> : <div>Please login first</div> }
      <button onClick={()=>setIsLogin(true)}> Login </button>

      <ul>
      { properties.map(property=> <li key={property.userId}> {property.userId} </li> ) }
      </ul>
    </div>
  );
}

export default App;
