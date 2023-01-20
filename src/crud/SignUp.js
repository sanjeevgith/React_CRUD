import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './SignUp.css';

function SignUp() {

    const [email, idchange] = useState("");
    const [password, emailchange] = useState("");
    const [name, namechange] = useState("");
    const [phone, phonechange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {

        e.preventDefault();
        const employee = { email, password, name, phone };

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(employee),
        }).then((resp) => {
            alert('Saved successfully.')
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })
    }


    return (
        <div >
            <div className="container1">
                <div className="card" style={{ height: "250px", width: "400px" }}>

                    <form onSubmit={handlesubmit}>
                        <div className="cardheader">
                            <div>
                                <h3 className="heardername">
                                    SignUp
                                </h3>
                            </div>
                        </div>
                        <div className="lbinp">
                        <div className="mb-3 mt-3">
                            {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
                            <input placeholder="Email" required value={email} onChange={e => idchange(e.target.value)} ></input>
                        </div>
                        </div>
                        <div className="lbinp">
                        <div className="mb-3 mt-3">
                            {/* <label htmlFor="exampleInputEmail1" className="form-label">Name</label> */}
                            <input placeholder="Userame" required value={name} onChange={e => namechange(e.target.value)} ></input>
                        </div>
                        </div>
                        <div className="lbinp">
                        <div className="mb-3 mt-3">
                            {/* <label htmlFor="exampleInputEmail1" className="form-label">Number</label> */}
                            <input placeholder="Phone No" type="number" required value={phone} onChange={e => phonechange(e.target.value)} ></input>
                        </div>
                        </div>
                        <div className="lbinp">
                        <div className="mb-3 mt-3">
                            {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                            <input type="password" placeholder="Password"  required value={password} onChange={e => emailchange(e.target.value)} ></input>
                        </div>
                        </div>
                        <div className="container">
                            <div className="linkbar">
                                <Link to="/" className="signuplink">Login</Link>
                            </div>
                        </div>
                        <div className="lbinp">
                        <div className="subbtn">
                            <button to="/login" style={{ 'borderRadius': '20px' }} >SignUp
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}





export default SignUp;