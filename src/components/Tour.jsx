const Tour = ({
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
}) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
      </div>

      <div className='tour-info'>
        <h4>{title}</h4>

        <p>{info}</p>

        <div className='tour-footer'>
          <span>
            <i className='fas fa-map'></i>
            {location}
          </span>

          <span>{duration} days</span>

          <span>from ${cost}</span>
        </div>
      </div>
    </article>
  )
}

export default Tour