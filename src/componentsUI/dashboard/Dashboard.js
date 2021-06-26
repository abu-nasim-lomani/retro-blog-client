import React, { useState } from 'react'
import Sidebar from './Sidebar';
import logo from '../../image/logo.png';
import './Dashboard.css';
import Dash from './dash/Dash'

function Dashboard({ posts}) {
    const [toggle, setToggle] = useState(true)
    const [dropdownToggle, setDropdownToggle] = useState(false)
    const toggleSidebar = () => {
        setToggle(!toggle)
    }

    const toggleDropdown = () => {
        setDropdownToggle(!dropdownToggle)
        console.log("toggle")
    }
    return (
        <div>
            <div style={{ height: '60px', width: '100%', backgroundColor: '#101C2C', position: 'fixed', borderBottom: '1px solid gray' }}>
                <div className="row" style={{ color: 'white' }}>
                    <div className="col-md-3 col-sm-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <i className="ml-4 fa fa-bars" onClick={toggleSidebar} style={{ cursor: 'pointer' }}></i>
                        <img src={logo} style={{ height: '50px' }} alt="" />
                        <i className=""></i>
                    </div>
                    <div className="col-md-6 col-sm-6 text-center mt-2">
                        <div class="input-group md-form form-sm form-2 pl-0">
                            <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search Post Here" aria-label="Search" />
                            <div class="input-group-append">
                                <span class="input-group-text amber lighten-3" id="basic-text1"><i class="fa fa-search text-grey"
                                    aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 text-right">
                        <div onClick={toggleDropdown} style={{ cursor: 'pointer', margin: '10px 20px' }}>
                            <img src={logo} style={{ height: '40px', width: '40px', border: '1px solid white', borderRadius: '50%' }} alt="" />
                        </div>
                        <div class={dropdownToggle ? "d-block text-right pr-5" : "d-none"} style={{ height: '80px', backgroundColor: '#101C2C' }}>
                            <a href="">
                                <p>Setting</p>
                            </a>
                            <a href="">
                                <p>Logout</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="d-flex row" >
                <div className={toggle ? "col-md-3" : "d-none"} style={{ marginTop: '60px' }}>
                    <Sidebar />
                </div>
                
                <div className="col-md-9" style={{ marginTop: '60px' }}>
                    <div className="overflow-auto m-auto " style={{ height: '85vh', marginLeft: '20px' }}>
                        <Dash posts={posts}></Dash>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard
