import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

    const [inputVal, setInputVal] = useState ({
        name: '',
        email: '',
        date:'',
        password:''
    })


    const [data] = useState([])

    const getData = (e) => {
        const {value, name} = e.target;

        setInputVal (()=>{
            return {
                ...inputVal,
                [name]:value

            }
        })
    }
    const addData = (e) => {
        e.preventDefault();

        const {name,email,date,password} = inputVal
        if (name === "") {
            alert('name field is required')
        }
        else if(email === "") {
            alert('email is required')
        }
        else if (!email.includes("@")){
            alert('Please add valid email')
        }
        else if (date === "") {
            alert('date field is required')
        }
        else if (password === "") {
            alert('password is required')
        }
        else if (password.length < 6) {
            alert('Password needs 6 charcter')
        }
        else {
            console.log('Data added successfully');
            localStorage.setItem('username',JSON.stringify([...data, inputVal]));
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
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name='name' onChange={getData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name='email' onChange={getData}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" name='date' onChange={getData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name='password' onChange={getData}  />
                            </div>                           
                            <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button>
                            <p>Already have an account? <NavLink className="nav-link" to="/login">Login</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SignUp