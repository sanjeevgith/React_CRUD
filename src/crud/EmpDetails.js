import { useEffect, useState } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";

export default function EmpDetails(){
    const{id}=useParams();

    const [employee, setemploye] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/employee/"+id).then((res) => {
            return res.json();
        }).then((resp) => {
            var token = sessionStorage.getItem("token")
            console.log(token);
            if (token == "" || token == null) {
                navigate('/')
            }else{
            //assim, a variavel employee é populada
            setemploye(resp);
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(employee);

    return(
        <div>
            <div className="card" style={{"textAlign":"left"}}>
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body"></div>

                { employee &&
                    <div>
                        <h2>The Employee name is: {employee.name} ({employee.id})</h2>
                        <h3>Contact Detail</h3>
                        <h5>Email is: {employee.email}</h5>
                        <h5>Phone is: {employee.phone}</h5>
                        <Link className="btn btn-danger" to="/dashboard">Back to Listing</Link>
                    </div>                    
                }
            </div>
        </div>
    );
}