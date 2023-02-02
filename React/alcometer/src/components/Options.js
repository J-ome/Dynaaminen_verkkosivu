import React from 'react'

export default function Options() {
    const values = []

    for (let i = 0; i <= 24; i = i + 1) {
        values.push(i)
    }
  return (
    values.map (values => {
        return <option value={values}>{values}</option>
    })
  
  )
}
