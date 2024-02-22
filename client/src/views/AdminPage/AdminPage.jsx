import { useNavigate } from "react-router-dom"

const AdminPage = () => {
  const navigate = useNavigate()

  const handleButtonClick = (destination) => {
    navigate(destination)
  }

  const logoutClick = async (event) => {
    event.preventDefault()
    if (localStorage.getItem("accessToken").length > 0) {
      localStorage.setItem("accessToken", [])
    }
    navigate("/login")
  }

  return (
    <div className="admin-page">
      <h2 className="admin-page__title">Редаагувати дані в компоненті:</h2>
      <div className="admin-page__container">
        <button
          className="admin-page__btn"
          onClick={() => handleButtonClick("/login/adminPage/currentFee")}
        >
          Збори
        </button>
        <button
          className="admin-page__btn"
          onClick={() => handleButtonClick("/login/adminPage/ourTeam")}
        >
          Команда
        </button>
        <button
          className="admin-page__btn"
          onClick={() => handleButtonClick("/login/adminPage/currentReport")}
        >
          Звіти
        </button>
        <button
          className="admin-page__btn"
          onClick={() => handleButtonClick("/login/makeRequest")}
        >
          Запити
        </button>
        <button
          className="admin-page__btn"
          onClick={() =>
            handleButtonClick("/login/adminPage/transferredThings")
          }
        >
          Передане
        </button>
        <button
          className="admin-page__btn"
          onClick={() => handleButtonClick("/login/adminPage/donationDetails")}
        >
          Реквізити
        </button>
        <button
          className="admin-page__btn"
          onClick={() => handleButtonClick("/login/adminPage/gallery")}
        >
          Галерея
        </button>
        <button
          className="admin-page__btn"
          onClick={() => handleButtonClick("/login/adminPage/question")}
        >
          Питання
        </button>
      </div>

      <button
        className="admin-page__btn"
        onClick={(event) => logoutClick(event)}
      >
        Вийти з аккаунту
      </button>
    </div>
  )
}

export default AdminPage
