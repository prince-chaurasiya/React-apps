import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
    <h2>Login Here</h2>
    <input type='text' placeholder='User Name' value={username} 
    onChange={(e)=> setUsername(e.target.value)
    }/>

    <input type='text' placeholder='Password' 
    value={password} 
    onChange={(e)=> setPassword(e.target.value)}/>

    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login