import React, { Component } from 'react'
import Nav from '../components/nav'
var objNav ={
    NavImg:"../logo512.png",
    li:"Featurs",
    li1:"Pricing",
    li2:"Sign Up",
    btn:"login"

}

export default class header extends Component {
  render() {
    return (
      <div>
      <Nav/>
      </div>
    )
  }
}
