
import React from 'react'
import {  useSelector } from 'react-redux'
export default function Header() {
  const elementValue = useSelector((state) => state)
  return (
    <div class='head'>
      <h2>{elementValue[0]}</h2>
    </div>
  )
}
