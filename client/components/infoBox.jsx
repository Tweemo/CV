import React, { useState } from 'react'

const InfoBox = (props) => {
  const [isVisible, setIsVisible] = useState(false)


  const dropDaBox = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true)
  }

  return (
    <div onClick={dropDaBox} className='dropbox'>
      {/* Some sort of name of each category */}
      <div className='boxName'>
        {props.category}
      </div>
      <div className='expand-btn'>
      {isVisible ? '-' : '+'}
      </div>
    </div>
  )
}

export default InfoBox
