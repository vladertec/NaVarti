import { Link, useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="error">
      <img className="error__img" alt="error" src="/img/error.png" />
      <div className="error__message-container">
        <h2 className="error__message">Ooops! Page not found...</h2>
        <button className="error__btn" onClick={() => navigate("/")}>
          Homepage
        </button>
      </div>
    </div>
  )
}

export default Error
