
import { Link, useNavigate } from "react-router-dom";

import './Navbar.css';

function Navbar() {

     setTimeout(function() { sessionStorage.clear(); }, (2 * 60 * 1000));

    function Logout(){
        sessionStorage.clear();
        window.location.reload();
    }
 
   

    return (

        <>


            <div className="navbar" style={{margin:"5px"}}>

                <div className="nav">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   <i className="bi bi-person hamIconName"></i><a className="navbar-brand" href="#">Employee Onboarding</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul> */}
                        
                    </div>
                    <div>
                        <a className='logoutbtn' ><Link  onClick={Logout}>Logout</Link></a>
                    </div>



</nav>


                </div>

            </div>


        </>

    )

}

export default Navbar;