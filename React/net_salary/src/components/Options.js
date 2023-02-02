import React from 'react'

export default function Options() {

    const percentages = []

    for (let i = 0; i <= 5; i = i + 0.25) {
        percentages.push(i)
    }


  return (
    percentages.map (percentages => {
        return <option value={percentages}>{percentages.toFixed(2)}%</option>
    })
  )
}
