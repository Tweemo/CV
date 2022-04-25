import React, { useState } from 'react'

const InfoBox = (props) => {
  const [isVisible, setIsVisible] = useState(false)


  const dropDaBox = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true)
  }

  return (
    <div onClick={dropDaBox} className='dropbox'>
      <div className='boxName'>
        {props.category}
      </div>
      <>
        <div className='expand-btn'>
        {isVisible ? '-' : '+'}
        </div>
        <div>
        {/* Insert Some function of way the info gets plonked. Likely function from App that sends it through props to here. dunno yet */}
        </div>
      </>
    </div>
  )
}

export default InfoBox
