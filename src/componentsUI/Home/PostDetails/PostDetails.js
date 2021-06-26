import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function PostDetails({ posts }) {
    console.log(posts)
    const { id } = useParams();

    const post = posts.find(pt => pt._id === id);


    const postDetailsStyle = {
        height: '',
        margin: 'auto', 
    }

    const bannerStyle={
        width: '100%',
        height: '90vh',
        textAlign: 'center', marginTop: '60px', marginBottom:'25px'
    }
    return (
        <div>
            <Header></Header>
            <div className="row" >
                <div className="col-md-10 col-sm-10" style={postDetailsStyle}>
                    <img src={post.banner} style={bannerStyle} alt="" />
                    <div className="">
                        <h1>{post.title}</h1>
                        <h4>Author: {post.author}</h4>
                        <p><small><b>Post on: {post.date}</b></small></p>
                        <div className="">
                            <p>{post.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default PostDetails
