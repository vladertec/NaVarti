const MakeRequest = ({ RequestItems }) => {
  return (
    <div className="make-request">
      <div className="make-request__container">
        <p className="make-request__title">Зробити запис</p>
        <div className="make-request__card-container">
          {RequestItems.map((item, index) => (
            <div className="make-request__card" key={index}>
              <img
                className="make-request__card-img"
                src={item.src}
                alt={item.src}
              />
              <h2 className="make-request__card-name">{item.title}</h2>
              <p className="make-request__card-position">{item.position}</p>
              <p className="make-request__card-text">{item.text}</p>
              <button className="make-request__btn">Заповнити форму</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MakeRequest
