import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function EmpCreate(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setActive] = useState(true);
    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const employee = {name,email,phone,active};
        
        fetch("http://localhost:3000/employee", {
            method: "POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(employee),
        }).then((resp) => {
            alert('Saved successfully.')
            navigate('/dashboard')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{"textAlign":"left"}}>

                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input required value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input required value={phone} onChange={e=>setPhone(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={active} onChange={e=>active(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/dashboard" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}