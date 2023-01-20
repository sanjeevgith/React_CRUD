import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EmpListing(){
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const loadDetail=(id)=> {
        navigate('/dashboard/employee/detail/'+id)
    }

    const loadEdit=(id)=> {
        navigate('/dashboard/employee/edit/'+id)
    }

    const remove=(id, name)=> {
        if(window.confirm("Do you want to remove the Employee: "+name) == true){
            fetch("http://localhost:3000/employee/"+id, {
                method: "DELETE"
            }).then((resp) => {
                window.location.reload()
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:3000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            //assim, a variavel empdata é populada
            empdatachange(resp);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" style={{width:"150px"}} className="btn btn-success">Add New</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody> 
                            {empdata &&
                                empdata.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>
                                            <a onClick={()=>{loadEdit(employee.id)}} className="btn btn-success">Edit</a>
                                            <a onClick={()=>{remove(employee.id ,employee.name)}} className="btn btn-danger">Remove</a>
                                            <a onClick={()=>{loadDetail(employee.id)}} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}