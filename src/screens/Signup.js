import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from "../Pizzeria.png"
import { BASE_URL } from '../Services';

const Signup = () => {

    const [credentials, setCredentials] = useState({name:"",email:"",password:"",location:""});
    let navigate = useNavigate();
    const handleSubmit= async (e)=>{
        e.preventDefault();

        const response = await fetch(`${BASE_URL}/api/createuser`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            //Learn here
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.location})
        })
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials");
            navigate('/');
        }
    };

    const handleChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }

  return (
    <>
    {/* <div className='container'>
        <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLocation" className="form-label">Location</label>
                    <input type="text" className="form-control" name='location' value={credentials.location} onChange={handleChange} />
                </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
        </form>
    </div> */}
    <div className='container'>
     <div className='login'>
        <section style={{width:"50%"}}>
         <div className='loginsection leftSide'>
            <div style={{width:"100%",backgroundColor:"black",marginBottom:"10px"}}>
                <Link to="/"> <img src={logo} alt="company logo" style={{width:"100%",objectFit:"contain", height:"130px"}}/></Link>
                </div>
                <form onSubmit={handleSubmit} className='submission'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={credentials.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputLocation" className="form-label">Location</label>
                            <input type="text" className="form-control" name='location' value={credentials.location} onChange={handleChange} />
                        </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                </form>
         </div>
         </section>
         <section style={{width:"50%"}}>
           <div className='loginsection rightSide signupPage'>
             </div>
         </section>
     </div> 
    </div>   
</>);

}

export default Signup;