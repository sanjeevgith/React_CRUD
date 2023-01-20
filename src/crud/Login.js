import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './Login.css';

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState({})

    console.log('email', email)
    console.log('password', password)

    const navigate = useNavigate();

    const handlesubmit = (e) => {

        e.preventDefault();
        for (let i = 0; i < response.length; i++) {
            console.log(response[i]);

            if (email == response[i].email && password == response[i].password) {
                // alert("hum jeet gaye")
                navigate('/dashboard')
            }
        }

    }


    useState(() => {
        fetch("http://localhost:3000/signup").then((res) => {
            return res.json();
        })
            .then((resp) => {
                console.log(resp)
                setResponse(resp)
            }).catch((err) => {
                console.log(err.message)
            })
    })


    return (

        <div className="containerl">
            <div className="card" style={{ height: "250px", width: "400px" }}>

                <form onSubmit={handlesubmit}>
                    <div className="cardheader">
                        <div>
                            <h3 className="heardername">
                                Login
                            </h3>
                        </div>
                    </div>
                    <div className="lbinp">
                        <div className="mb-3 mt-3">
                            {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className="lbinp">
                        <div className="mb-3 mt-3">
                            {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                            <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} ></input>
                        </div>
                    </div>
                    <div className="container">
                        <div className="linkbar">
                            <Link to="/signup" className="signuplink">SignUp</Link>
                        </div>
                    </div>
                    <div className="lbinp">
                        <div className="subbtn">
                            <button to="/dashboard" style={{ 'borderRadius': '20px' }} >Sign in
                            </button>
                            {/* <Link to="/signup" style={{'borderRadius':'20px'}} className="btn btn-success">SignUp
                            </Link> */}
                        </div>
                    </div>
                </form>

            </div>
        </div>


    );
}





export default Login;