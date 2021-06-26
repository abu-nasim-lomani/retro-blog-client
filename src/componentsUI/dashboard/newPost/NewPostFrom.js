import axios from 'axios';
import React, { useState, useRef } from 'react'

function NewPostFrom() {

    const [imageURL, setImageURL] = useState(null);

    const [toggle, setToggle] = useState(false);
    const makeTempPost = () => {
        setToggle(!toggle);
    }

    const postTitle = useRef(null);
    const postDes = useRef(null);
    const postAuthor = useRef(null);
    const postDate = useRef(null);
    const postTag = useRef(null);
    const handleSubmitClick = () => {
        // const postInfo = {
        //     title: postTitle.current.value,
        //     description: postDes.current.value,
        //     banner: imageURL,
        //     author: postAuthor.current.value,
        //     date: postDate.current.value,
        //     tags: postTag.current.value
        // };


        axios.post("https://sleepy-taiga-61544.herokuapp.com/addpost", {
            title: postTitle.current.value,
            description: postDes.current.value,
            banner: imageURL,
            author: postAuthor.current.value,
            tags: postTag.current.value
        }).then(() => {
            alert("yey")
        })
            .catch(() => {
                alert("oh no")
            })



        // fetch('https://sleepy-taiga-61544.herokuapp.com/addpost', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(postInfo)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        // })
    }





    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '0334c4afa89466293fef235bb0c031bf');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    return (
        <form action="">
            <div className="row mt-5">

                <div className="col-md-7 mt-4">
                    <div className="post-title">
                        <input type="text" ref={postTitle} name="title" id="title" placeholder="Title" style={{ fontSize: '30px', fontWeight: 'bold', textTransform: 'uppercase', borderBottom: '1px solid black' }} className="form-control mb-5 p-4" required />

                        <textarea type="text" name="" id="" ref={postDes} name="description" cols="100" rows="11" style={{ fontSize: '20px', fontWeight: '500', }} placeholder="Post Description" className="form-control" required></textarea>
                    </div>
                </div>
                <div className="col-md-4 mt-4 mr-1">
                    <div className="form-group " style={{ border: "1px solid gray", padding: "5px", margin: "auto", boxShadow: '1px 1px 5px gray', borderRadius: "5px" }}>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-sm btn-secondary" style={{ width: '110px', backgroundColor: '#101C2C' }}>Save Draft</button>
                            <button className="btn btn-sm btn-default ml-2" onClick={handleSubmitClick} style={{ width: '150px', backgroundColor: 'tomato' }}>Publish</button>
                        </div>

                        <div className="form-group mt-4">
                            <label htmlFor="">Upload Banner Image</label>
                            <input type="file" onChange={handleImageUpload} accept="image/png, image/jpg, image/jpeg" name="banner" id="banner" className="form-control" required />
                        </div>

                        <div className="form-group">
                            <textarea name="tag-box" ref={postTag} id="tag-box" cols="40" rows="3" placeholder="use tags here for SEO" className="form-control mb-3" required></textarea>
                            <input type="text" ref={postAuthor} name='author' placeholder="Authors Name" className="form-control mb-3" />
                            <input type="date" ref={postDate} name="dates" id="dates" className="form-control mb-3" />

                            <div className="form-group">
                                <div class="form-group">
                                    <input type="checkbox" onChange={makeTempPost} name="temporary-post" id="temporary-post" className="mr-3 ml-2" />
                                    <label for="temp-post">Make Temporary Post</label>
                                    <select class={toggle ? "form-control" : "d-none"} id="time-duration">
                                        <option value="1">1 days</option>
                                        <option value="2">2 days</option>
                                        <option value="3">3 days</option>
                                        <option value="4">4 days</option>
                                        <option value="5">5 days</option>
                                        <option value="6">6 days</option>
                                        <option value="7">7 days</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NewPostFrom
