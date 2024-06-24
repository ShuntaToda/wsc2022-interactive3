import React, { useEffect, useRef } from 'react'
import { Player } from './Player'
import { Barrier } from './Barrier'

import quizzes from "../quizzes.json"
export const MovingArea = ({ scene, player, movePlayer, barriers, setQuiz }) => {
  const movingAreaRef = useRef(null)
  const handleCollisionBarrier = (index) => {
    console.log(quizzes[scene][index]);
    setQuiz(quizzes[scene][index])
  }

  const handleMovePlayer = (e) => {
    switch (e.key) {
      case ("ArrowRight"):
        return movePlayer("right", movingAreaRef.current, barriers)
      case ("ArrowLeft"):
        return movePlayer("left", movingAreaRef.current, barriers)
      case ("ArrowUp"):
        return movePlayer("top", movingAreaRef.current, barriers)
      case ("ArrowDown"):
        return movePlayer("bottom", movingAreaRef.current, barriers)
    }
  }
  const handleKeyDown = (e) => {
    const moveResult = handleMovePlayer(e)
    if (moveResult?.collisionedBarrierIndex !== undefined) handleCollisionBarrier(moveResult.collisionedBarrierIndex)
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [player])
  return (
    <div ref={movingAreaRef} style={{
      position: "absolute",
      width: "1280px",
      height: "200px",
      top: 480,
      left: 0,
    }}>
      <Player scene={scene} player={player} movePlayer={movePlayer} movingAreaRef={movingAreaRef} />
      {barriers.map((barrier, index) => <Barrier key={index} barrier={barrier} index={index} />)}
    </div>
  )
}
