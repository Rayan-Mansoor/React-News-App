import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgURL, detailURL, publishedAt} = this.props

    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={imgURL} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">{new Date(publishedAt).toGMTString()}</small></p>
          <a href={detailURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}
