import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description , imgurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imgurl ?"https://static.foxnews.com/foxnews.com/content/uploads/2024/08/3-Microsoft-apps-on-macOS-could-be-your-biggest-privacy-threat-outro.jpg" : imgurl} style= {{height: "10rem"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5><hr style={{border : '1px solid '}}/>
    <p className="card-text">{description}.....</p>
    <a href={newsurl} target='_blank' className="btn btn-dark">Go somewhere</a>
  </div>
</div>

      </div>
    )
  }
}

export default Newsitems
