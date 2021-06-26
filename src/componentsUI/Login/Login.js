import React, { useRef } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { auth } from '../../firebase';
import Header from '../Home/Header/Header'

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            
        ).then((user) => {
            if(user.user.email){
                window.location.replace("http://localhost:3000/")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Header></Header>
            <div className="login pt-5" style={{ width: '500px', margin: 'auto', textAlign: 'center' }}>
                <form action="" className="mt-5">
                    <h1>Login</h1>
                    <input type="email" ref={emailRef} className="form-control" name="email" id="email" placeholder="Email"/> <br />
                    <input type="password" ref={passwordRef} className="form-control" name="password" id="password" placeholder="Password"/> <br />
                    <Link to="/admin"><button className="btn btn-primary form-control" onClick={signIn}>Login</button></Link>

                </form>
            </div>
        </div>
    )
}

export default Login
