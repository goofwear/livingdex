import React from "react"
import PokeBoxCellGap from "./PokeBoxCellGap"

const PokeBoxRowGap = () => {
  let cells = [0, 1, 2, 3, 4, 5].map(() => {
    return <PokeBoxCellGap/>
  })
  return (
    <>
      <div className="pk-box-row columns is-mobile">
        {cells}
      </div>
    </>
  )
}

export default PokeBoxRowGap
