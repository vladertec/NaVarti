const OurTeam = ({ PositionItems }) => {
  return (
    <div className="our-team">
      <p className="our-team__title">Наша команда</p>
      <div className="our-team__card-container team-card">
        {PositionItems.map((item, index) => (
          <div className="team-card__card" key={index}>
            <img
              className="team-card__card-img"
              src={item.photoUrl}
              alt={item.photoUrl}
            />
            <h2 className="team-card__card-name">{item.title}</h2>
            <p className="team-card__card-position">{item.position}</p>
            <p className="team-card__card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam
