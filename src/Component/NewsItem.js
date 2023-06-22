import React from 'react'

export const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, publishedAt, source} = props;
    return (             
        <div className="card h-100 shadow">
            <span className="badge rounded-pill bg-success position-absolute text-white fw-light" style={{top: '10px', left: '10px'}}>{source}</span>
            <img src={imageUrl} className="card-img-top" alt="" style={{maxHeight: "160px"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text" style={{minHeight: '80px'}}>{description}...</p>
                <p className="card-text"><small className="text-dark fw-bolder">By {!author? "Unkown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-dark w-100 d-block" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
      )
}
