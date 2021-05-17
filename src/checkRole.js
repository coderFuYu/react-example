import React from "react"
import {Redirect} from "react-router-dom"

export default function checkRole(WrapperComponent) {
  let localStorage = window.localStorage
  return (props) => {
    if (localStorage.islogin === '1') {
      return <WrapperComponent {...props} />
    } else {
      return <Redirect to="/"/>
    }
  }
}
