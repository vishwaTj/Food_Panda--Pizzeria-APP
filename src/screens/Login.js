import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({email:"",password:""});
  let navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            //Learn here
            body:JSON.stringify({email:credentials.email, password:credentials.password})
        })
        const json = await response.json();
        console.log(json);

        if(!json.success){
        alert("Enter valid credentials");
        }

        if(json.success){
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate('/');
        }
    };

    const handleChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={handleChange} />
                </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>
        </form>
    </div>
  )
}

export default Login;