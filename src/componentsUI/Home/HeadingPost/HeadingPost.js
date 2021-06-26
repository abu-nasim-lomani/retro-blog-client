import React from 'react';
import { Link } from 'react-router-dom'

function HeadingPost({ post }) {


    const headerStyle = {
        height: '300px',
        width: '100%'
    }

    const headerStyleImage = {
        height: '200px',
        width: '100%',
        overflow: 'hidden'
    }

    const headerStyleTitle = {
        height: '100px',
        width: '100%',
    }
    return (
        <div className="mt-5 pt-3">
            <div className="row">
                <div className="col-md-1">

                </div>
                <div className="col-md-10">
                    <Link to={"/readpost/"+post._id}>
                        <div className="" style={headerStyle}>
                            <div className="" style={headerStyleImage}>
                                <img src={post.banner} style={{ width: '100%', height: 'auto' }} alt="" />
                            </div>
                            <div className="" style={headerStyleTitle}>
                                <h3>{post.title}</h3>
                                <p>POSTED ON {post.date}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
    )
}

export default HeadingPost
