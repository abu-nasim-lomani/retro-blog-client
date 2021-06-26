import React from 'react';
import './Style.css';
import logo from '../../../image/logo.png';
import { Link, useHistory } from 'react-router-dom'

function Header({ user }) {
    const history = useHistory()
    const handleAuth = () => {
        history.push('/admin')
    }

    return (
        <div style={{ height: '60px', width: '100%', backgroundColor: '#101C2C', position: 'fixed', borderBottom: '1px solid gray', zIndex: '5' }}>
            <div className="row d-flex " style={{ color: 'white', alignItems: 'center' }}>
                <div className="col-md-3 col-sm-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <i className="ml-4" style={{ cursor: 'pointer' }}></i>
                    <Link to="/"><img src={logo} style={{ height: '50px' }} alt="" /></Link>
                    <i className=""></i>
                </div>
                <div className="col-md-6 col-sm-6 text-center mt-2">
                    <div class="input-group md-form form-sm form-2 pl-0">
                        <input class="form-control my-0 py-1 amber-border" type="text" placeholder="Search Here" aria-label="Search" />
                        <div class="input-group-append">
                            <span class="input-group-text amber lighten-3" id="basic-text1"><i class="fa fa-search text-grey"
                                aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '50px' }}>
                    {user ? <Link to="/admin"><button className="btn-primary">Admin Panel</button></Link> :<button className="btn-primary" onClick={handleAuth}>Login</button>}
                    <i className=""></i>
                </div>

            </div>
        </div>
    )
}

export default Header
