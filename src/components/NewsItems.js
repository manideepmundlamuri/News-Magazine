import React from 'react'
import NEWS from '../assets/NEWS.jpg'
const NewsItems = ({title, description , src ,url ,published}) => {
    return (
        <>
            <div className="card d-inline-block mb-3 mx-4 my-4 px-2 py-2" style={{maxWidth:'300px'}}>
                <img src={src?src:NEWS} style={{height:'200px'}} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,40)}</h5>
                        <p className="card-text">{description?description.slice(0,90):"Engadget articles will be returned ahead of Mom and Pop's Little iPhone Blog"}</p>
                        <a href={url} className="btn btn-primary">Read More</a>
                        <p className='card-text fs-6 mt-2'>{published}</p>
                    </div>
            </div>
        </>
    )
}

export default NewsItems
