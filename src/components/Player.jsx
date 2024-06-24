import React, { useEffect } from 'react'
import scene1Avater from "../images/scene-1/avatar.png"
import scene2Avater from "../images/scene-2/avatar.png"
import scene3Avater from "../images/scene-3/avatar.png"

export const Player = ({ scene, player, movePlayer }) => {

  const getAvaterImg = () => {
    const avaterImgs = [
      scene1Avater,
      scene2Avater,
      scene3Avater
    ]

    return avaterImgs[scene]
  }

  return (
    <div>
      <img src={getAvaterImg()} alt="avater" style={{
        position: "absolute",
        width: player.width,
        height: player.height,
        top: player.position.y,
        left: player.position.x,
        zIndex: 99,
        translate: "-24px -80px"
      }} />
    </div>
  )
}
