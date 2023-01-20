import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function EmpEdit(){
    const{id}=useParams();
    const navigate = useNavigate();

    const [empid, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [active,activechange]=useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/employee/"+id).then((res) => {
            return res.json();
        }).then((resp) => {
            var token = sessionStorage.getItem("token")
            console.log(token);
            if (token == "" || token == null) {
                navigate('/')

            }else{
            console.log(resp)
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            activechange(resp.active)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const handlesubmit=(e)=>{
        e.preventDefault();
        const employee = {empid,name,email,phone,active};
        
        fetch("http://localhost:3000/employee/"+empid, {
            method: "PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(employee),
        }).then((resp) => {
            alert('Updated successfully.')
            navigate('/dashboard')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return(
        
        <div className="row" >
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card" style={{"textAlign":"left"}}>

                        <div className="card-title">
                            <h2>Employee Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">
                               
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input required value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input required value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-primary" type="submit">Update</button>
                                        <Link to="/dashboard" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>                                
                    </div>
                </form>
            </div>
        </div>
    
   
    );
}