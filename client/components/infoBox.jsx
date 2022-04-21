import React, { useState } from 'react'

const InfoBox = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div onClick={setIsVisible(true)} className='dropbox'>
      {/* Some sort of name of each category */}
      Jo
      {isVisible ? '-' : '+'}

    </div>
    // <p>
    //   Hello
    // </p>
  )
}

export default InfoBox
