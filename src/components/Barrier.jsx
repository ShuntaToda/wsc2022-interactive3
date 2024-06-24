import React from 'react'
import barrierImg from "../images/scene-1/quiz-barrier.png"

export const Barrier = ({ barrier }) => {

  return (
    <div className='moving-area-obj' style={{
      position: "absolute",
      top: 0,
      left: barrier.left,
      width: barrier.width,
      height: barrier.height,
      translate: "0 -40px"
    }}>
      <img src={barrierImg} alt="barrier" />
    </div>
  )
}
