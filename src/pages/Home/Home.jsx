import React from 'react'
import './Home.css'
import Button from '../../components/Button/Button'

const Home = () => {

  return (
      <div className='home'>
        <h1>KARAKY FOOD</h1>
        <div className='home__nav'>
            <Button classBtn='home__nav-order' type='button' text='ORDER NOW' />
            <Button classBtn='home__nav-locations' type='button' text='LOCATIONS' />
        </div>
      </div>
  )
}

export default Home