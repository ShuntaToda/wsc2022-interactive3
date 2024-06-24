import React, { useState } from 'react'

export const usePlayer = (init) => {
  const [position, setPosition] = useState(init?.position ? init.position : { x: 0, y: 0 })
  const player = {
    height: 94,
    width: 48,
    position: position,
    moveDistance: 30,
  }

  const checkCollisionArea = (direction, areaEl) => {
    switch (direction) {
      case "right":
        if (player.position.x + player.moveDistance < areaEl.offsetWidth) return {
          ...player.position, x: player.position.x + player.moveDistance
        }
        return { ...player.position, x: areaEl.offsetWidth };
      case "left":
        if (0 < player.position.x - player.moveDistance) return {
          ...player.position, x: player.position.x - player.moveDistance
        }
        return { ...player.position, x: 0 };
      case "top":
        if (0 < player.position.y - player.moveDistance) return {
          ...player.position, y: player.position.y - player.moveDistance
        }
        return { ...player.position, y: 0 };
      case "bottom":
        if (player.position.y + player.moveDistance < areaEl.offsetHeight) return {
          ...player.position, y: player.position.y + player.moveDistance
        }
        return { ...player.position, y: areaEl.offsetHeight };
    }

  }
  const checkCollisionBarriers = (direction, barriers) => {
    switch (direction) {
      case "right":
        const collisionedBarrierIndex = barriers.findIndex((barrier) => {
          if (player.position.x + player.moveDistance > barrier.left) return true
        })
        if (collisionedBarrierIndex !== -1) return {
          position: {
            ...player.position, x: barriers[collisionedBarrierIndex].left
          },
          index: collisionedBarrierIndex
        }
        return { position: { ...player.position, x: player.position.x + player.moveDistance }, index: undefined };
      default:
        return false;
    }
  }
  const movePlayer = (direction, areaEl, barriers) => {
    const checkedBarrierPosition = checkCollisionBarriers(direction, barriers)
    if (checkedBarrierPosition !== false) {
      setPosition(checkedBarrierPosition.position)
      return { collisionedBarrierIndex: checkedBarrierPosition.index }
    }
    const checkedAreaPosition = checkCollisionArea(direction, areaEl)
    setPosition(checkedAreaPosition)
  }

  return { player, movePlayer }
}