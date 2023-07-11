import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [inputVal, setInputVal] = useState ({        
        email: '',
        password:''
    })   

    const getData = (e) => {
        // console.log(e.target.value)
        const {value, name} = e.target;
        // console.log(value, name)

        setInputVal (()=>{
            return {
                ...inputVal,
                [name]:value

            }
        })
    }
    const addData = (e) => {
        e.preventDefault();

        const getDataArr = localStorage.getItem("username");
        console.log(getDataArr)

        const {email,password} = inputVal
        if(email === "") {
            alert('email is required')
        }
        else if (!email.includes("@")){
            alert('Please add valid email')
        }       
        else if (password === "") {
            alert('password is required')
        }
        else if (password.length < 6) {
            alert('Password needs 6 charcter')
        }
        else {
           if(getDataArr && getDataArr.length){
            const userdata = JSON.parse(getDataArr);
            const userLogin =userdata.filter((el,k)=> {
                return el.email === email && el.password === password
            });
            if (userLogin.length === 0) {
                alert('user invalid')
            }
            else {
                alert('user login successfully')
                localStorage.getItem('username',JSON.stringify(userLogin))
                navigate("/");
            }
           }
        }
    }
  return (
    <div className='container'>
        <div className='row justify-content-center align-items-center vh-100'>
            <div className='col-lg-4'>
                <div className='card p-3 shadow'>
                    <div className='card-body'>
                        <form>                            
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name='email' onChange={getData}  />
                            </div>                           
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name='password' onChange={getData}  />
                            </div>                           
                            <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button>
                            <p>Already have an account? <NavLink className="nav-link" to="/signup">SignUp</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Login
