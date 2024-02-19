import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CustomErrorMessage from "../../components/CustomErrorMessage/CustomErrorMessage"
import { loginUser } from "../../api/userStatus"

const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ username: "", password: "" })
  const [error, setError] = useState({ statusError: false, message: "" })

  const loginClick = async (event) => {
    event.preventDefault()
    setError({
      ...error,
      statusError: false,
      message: "",
    })
    const token = await loginUser(login)
    if (token.status === 200) {
      localStorage.setItem("accessToken", token.data.token)
      navigate("/login/adminPage")
    } else {
      const errorMessage = token.response.data.message
      setError({
        ...error,
        statusError: true,
        message: errorMessage,
      })
    }
  }
  return (
    <div className="login">
      <p className="login__text">Будь ласка, увійдіть в акаунт.</p>
      <div className="login__login-container">
        <img
          className="login__img"
          src="/img/logo.jpg"
          alt="Business view - Reports"
        />
        <div>
          <div className="login__input-group">
            <label className="login__input-name" htmlFor="username">
              Логін
            </label>
            <input
              className="login__input"
              id="username"
              type="text"
              name="login"
              value={login.username}
              onInput={(e) =>
                setLogin({
                  ...login,
                  username: e.target.value,
                })
              }
            />
          </div>
          <div className="login__input-group">
            <label className="login__input-name" htmlFor="password">
              Пароль
            </label>
            <input
              className="login__input"
              type="text"
              name="password"
              id="password"
              value={login.password}
              onInput={(e) =>
                setLogin({
                  ...login,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button className="login__btn" onClick={(event) => loginClick(event)}>
            Увійти
          </button>
        </div>
        {error && (
          <div className="login__error-message">
            <CustomErrorMessage name={error.message} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
