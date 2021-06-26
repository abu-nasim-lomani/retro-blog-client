import React from 'react'

function Posts() {
    return (
        <table className="table mt-5">
            <thead>
                <th>SL.</th>
                <th>Title</th>
                <th>Authors</th>
                <th>Date Post</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, excepturi?</td>
                    <td>Astenio Charge</td>
                    <td>20/06/2021</td>
                    <td><i class="fa fa-edit"></i></td>
                    <td><i class="fa fa-trash"></i></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Posts
