import dfltimg from './Default.png'

const NewsItem = (props) => {

  let { title, description, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1', left: '90%' }}>{props.source}</span>
        <img src={props.imageUrl ? props.imageUrl : dfltimg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="texted-muted">By {author ? author : "Unknown"}, On {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem