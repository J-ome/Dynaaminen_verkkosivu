import React from 'react'

export default function Header(props) {
  return (
    <header className='container-fluid'>
        <div>
            <h1>{props.title}</h1>
        </div>
    </header>
  )
}
