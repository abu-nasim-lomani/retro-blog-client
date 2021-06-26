import React from 'react';
import Header from './Header/Header'
import HeaderTitle from './Header/HeaderTitle'
import Slider from './Slider/Slider';
import HeadingPost from './HeadingPost/HeadingPost'
import Footer from './Footer/Footer'

function Home({ posts, user}) {
 
    return (
        <div>
            <Header user={user}></Header>
            <HeaderTitle></HeaderTitle>
            <Slider></Slider>
            <div className="">
                {
                    posts.map(post => <HeadingPost post={post} key={post._id}></HeadingPost>)
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home
