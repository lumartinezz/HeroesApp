import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

const {login} = useContext( AuthContext )

const navigate = useNavigate()

const onLogin = () => {

  const lastPath = localStorage.getItem('lastPath') || '/'

  login('Lucia Martinez')

    navigate('/', {
      replace: true
  })
}


  return (
   <div className="contianer nt-5">
    <h1>Login</h1>
    <hr/>
    <button className="btn btn-primary"
    onClick={onLogin}>
      Login
    </button>
   </div>
  )
}
