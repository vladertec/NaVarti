import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="error">
      <div className="error__img-container">
        <img className="error__img" alt="error" src="./img/error/error.png" />
      </div>
      <div className="error__message-container">
        <p className="error__message">Ooops! Page not found...</p>
        <button className="error__btn" onClick={() => navigate("/home")}>
          Homepage
        </button>
      </div>
    </div>
  )
}

export default Error
