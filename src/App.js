import { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      <div>Hello world</div>
      {isLogin ? <div>Welcome</div> : <div>Please login first</div> }
      <button onClick={()=>setIsLogin(true)}> Login </button>
    </div>
  );
}

export default App;
