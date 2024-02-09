const MainTitle = () => {
  return (
    <div className="title">
      <div className="title__container">
        <div className="title__text-container">
          <h6 className="title__title">БФ "НА ВАРТІ ЖИТТЯ"</h6>
          <p className="title__text">
            Ми стоїмо На Варті Життя тих, хто дійсно цього потребує, запрошуємо
            вас долучитися до нашої «Варти»
          </p>
          <div className="title__btn-container">
            <button className="title__btn title__donate-btn">ЗРОБИТИ ВНЕСОК</button>
            <button className="title__btn title__help-btn">ЗАПИТ ПРО ДОПОМОГУ</button>
          </div>
        </div>
        <div className="title__img-container">
          <img
            src="/img/logoBackground.png"
            className="title__img"
            alt="title-img"
          />
        </div>
      </div>
    </div>
  )
}

export default MainTitle
