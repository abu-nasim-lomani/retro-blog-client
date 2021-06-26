import axios from 'axios'
import React from 'react'

function ManagePost({ post }) {
    const  removePost = (id) => {
            axios.delete(`https://sleepy-taiga-61544.herokuapp.com/delete/${id}`).then(() =>{
                alert('Delete', window.location.reload())
            })
           

    }
    return (
        < div className="row" style={{ boxShadow: '0px 2px 5px grey', marginTop: '10px' }}>
            <div className="col-5 "><p>{post.title}</p></div>
            <div className="col-3 "><p>{post.author}</p></div>
            <div className="col-2 ">Date</div>
            <div className="col-2 d-flex justify-content-around h-100 align-items-center ">
                <button className="btn btn-info btn-sm"><i className="fa fa-edit"></i></button>
                <button className="btn btn-danger btn-sm" onClick={() => removePost(post._id)}><i className="fa fa-trash"></i></button>
            </div>
        </div>
    )
}

export default ManagePost
