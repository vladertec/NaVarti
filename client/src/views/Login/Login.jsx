
const Login = () => {

  return(<>Hi</>)
  // const navigate = useNavigate()
  // const [login, setLogin] = useState({ username: "", password: "" })
  // const [error, setError] = useState({ statusError: false, message: "" })
  // const dispatch = useDispatch()
  // const loginClick = async (event) => {
  //   event.preventDefault()
  //   setError({
  //     ...error,
  //     statusError: false,
  //     message: "",
  //   })
  //   const token = await loginUser(login)
  //   if (token.status === 200) {
  //     localStorage.setItem("accessToken", token.data.token)
  //     const result = await getUser(localStorage.getItem("accessToken"))
  //     dispatch(updateCart(result.cartList))
  //     dispatch(updateFavourite(result.favouriteList))
  //     navigate("/")
  //   } else {
  //     const errorMessage = token.response.data.message
  //     setError({
  //       ...error,
  //       statusError: true,
  //       message: errorMessage,
  //     })
  //   }
  // }
  // return (
  //   <div className="login">
  //     <p className="login__text">Do you have an account? Please, log in!</p>
  //     <div className="login__login-container">
  //       <img
  //         className="login__img"
  //         src="./img/Logo.png"
  //         alt="Business view - Reports"
  //       />
  //       <div>
  //         <div className="login__input-group">
  //           <label className="login__input-name" htmlFor="username">
  //             Username
  //           </label>
  //           <input
  //             className="login__input"
  //             id="username"
  //             type="text"
  //             name="login"
  //             value={login.username}
  //             onInput={(e) =>
  //               setLogin({
  //                 ...login,
  //                 username: e.target.value,
  //               })
  //             }
  //           />
  //         </div>
  //         <div className="login__input-group">
  //           <label className="login__input-name" htmlFor="password">
  //             Password
  //           </label>
  //           <input
  //             className="login__input"
  //             type="text"
  //             name="password"
  //             id="password"
  //             value={login.password}
  //             onInput={(e) =>
  //               setLogin({
  //                 ...login,
  //                 password: e.target.value,
  //               })
  //             }
  //           />
  //         </div>
  //         <button className="login__btn" onClick={(event) => loginClick(event)}>
  //           Log In
  //         </button>
  //       </div>
  //       {error && (
  //         <div className="login__error-message">
  //           <CustomErrorMessage name={error.message} />
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // )
}

export default Login
