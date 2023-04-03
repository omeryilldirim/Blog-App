import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const {image} = useSelector(state=>state.auth)
  return (
    <div>
      {image && <h1>{image}</h1>}
    </div>
  )
}

export default About