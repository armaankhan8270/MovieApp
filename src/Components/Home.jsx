import React from 'react'
import { useGlobalContext } from './Context'

const Home = () => {
  // const name=useContext(AppContext)
  const name=useGlobalContext()
  return (
    <div>Home
      <h1>{name}</h1>
    </div>
  )
}

export default Home