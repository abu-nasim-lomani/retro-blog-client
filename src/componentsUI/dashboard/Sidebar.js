import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../../App';

function Sidebar() {
    const [user, setUser]= useContext(UserContext);
    return (
        <div style={{ width: '260px', backgroundColor: '#101C2C', height: '92vh', position: 'fixed' }}>
            <div className="header-side text-white mt-3 pl-5 ml-3">
                
            </div>

            <div className="create-post">
                {
                    user ? <Link to="/admin/newpost"><button className="btn btn-default text-white" style={{ border: '1px solid white', borderRadius: '20px', margin: '10px 50px' }}><i className="fa fa-plus-circle"></i> Create new Post</button></Link>:<button className="btn btn-default text-white" style={{ border: '1px solid white', borderRadius: '20px', margin: '10px 50px' }}><i className="fa fa-plus-circle"></i> Create new Post</button>
                }
            </div>
            <hr style={{ backgroundColor: 'white' }} />

            <div className="menu-section">
                <ul>
                   <li className="pl-3"> 
                    {
                        user? <Link to="/admin/managepost"><p className="menu-item text-white"><i className="fa fa-file-text-o mr-3 "></i> Posts </p></Link>:<p className="menu-item text-white"><i className="fa fa-file-text-o mr-3 "></i> Posts </p>
                    }
                   </li>
                    <li className="pl-3"><p className="menu-item text-white"><i className="fa fa-comment mr-3 "></i> Comments </p></li>
                    <li className="pl-3"><p className="menu-item text-white"><i className="fa fa-user mr-3 "></i> All Admin</p> </li>
                    <li className="pl-3"><p className="menu-item text-white"><i className="fa fa-grav mr-3 "></i> Authors </p></li>
                    <li className="pl-3"><p className="menu-item text-white"><i className="fa fa-cogs mr-3 "></i> Setting </p></li>
                    <li className="pl-3"><p className="menu-item text-white"><i className="fa fa-book mr-3 "></i> Reading List</p> </li>
                    <hr style={{ backgroundColor: 'white' }} />
                    <li className="pl-3"><a target="_blank"  href="/"><p className="menu-item text-white"><i className="fa fa-sign-in mr-3 "></i> View Blog</p> </a></li>
                </ul>

                
                <small style={{ color: 'gray', marginLeft: '10px' }}>Terms & Condition</small> <br />
                <small style={{ color: 'gray', marginLeft: '10px' }}>Policy</small>

            </div>

        </div>
    )
}

export default Sidebar
