import React from 'react';
import Posts from '../posts/Posts'

function Dash({ posts}) {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="" style={{ height: '100px', width: '350px', border: '1px solid grey', boxShadow: '2px 2px 10px #138496', borderRadius: '20px', backgroundColor: '#138596', textAlign: 'center', color: 'white', padding: '5px' }}>
                        <h2>Total Post</h2>
                        <h3>{posts.length}</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="" style={{ height: '100px', width: '350px', border: '1px solid grey', boxShadow: '2px 2px 10px #138496', borderRadius: '20px', backgroundColor: '#138596', textAlign: 'center', color: 'white', padding: '5px' }}>
                        <h2>Number of Authors</h2>
                        <h3>10</h3>
                    </div>
                </div>
            </div>
            <div className="post row">
                <div className="col-md-10">
                    <Posts></Posts>
                </div>
            </div>
        </div>
    )
}

export default Dash
