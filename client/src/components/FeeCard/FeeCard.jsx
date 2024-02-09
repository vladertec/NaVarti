const FeeCard = ({ title, text }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
      </div>
      <div className="card__body">
        <p className="card__text">{text}</p>
      </div>
      <div className="card__footer">
        <button className="card__button">Підтримати збір</button>
        <button className="card__details">Детальніше</button>
      </div>
    </div>
  )
}

export default FeeCard
