import TollIcon from "@mui/icons-material/Toll"

const OurTeam = ({ PositionItems }) => {
  return (
    <div className="our-team">
      <p className="our-team__title">Наша команда</p>
      <div className="our-team__card-container">
        {PositionItems.map((item, index) => (
          <div className="our-team__card" key={index}>
            <img
              className="our-team__card-img"
              src={item.photoUrl}
              alt={item.photoUrl}
            />
            <h2 className="our-team__card-name">{item.title}</h2>
            <p className="our-team__card-position">{item.position}</p>
            <p className="our-team__card-text">{item.text}</p>
          </div>
        ))}
      </div>
      <button className="our-team__btn">
        ЗРОБИТИ ВНЕСОК <TollIcon className="our-team__btn-icon" />
      </button>
    </div>
  )
}

export default OurTeam
