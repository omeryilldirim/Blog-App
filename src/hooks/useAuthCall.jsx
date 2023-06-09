import {useDispatch} from "react-redux"
import { loginSuccess, fetchStart, fetchFail, registerSuccess, logoutSuccess } from '../features/authSlice'
import {useNavigate} from "react-router-dom"
import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useAuthCall = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const BASE_URL = "https://32253.fullstack.clarusway.com/"

  const login = async (userInfo) => {

    dispatch(fetchStart())
    try {
        const {data} = await axios.post(`${BASE_URL}users/auth/login/`, userInfo)
        dispatch(loginSuccess(data))
        toastSuccessNotify("Login performed")
        navigate("/")
    } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify("Login can not be performed")
    }
  }


  const register = async (userInfo) => {

    dispatch(fetchStart())
    try {
      const {data} = await axios.post(`${BASE_URL}users/register/`, userInfo)
      dispatch(registerSuccess(data))
      toastSuccessNotify("Register performed")
      navigate("/")
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Register can not be performed")
    }
  }


  const logout = async () => {

    dispatch(fetchStart())
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`)
      dispatch(logoutSuccess())
      toastSuccessNotify("Logout performed")
    } catch (err) {
      dispatch(fetchFail())
      toastErrorNotify("Logout can not be performed")
    }
  }



  return {login, register, logout}
}

export default useAuthCall