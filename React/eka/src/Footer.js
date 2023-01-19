import React from 'react'

export default function Footer(props) {
  return (
    <footer>
        <div className='container-fluid'>
            <span>Copyright: {props.author}</span>
        </div>
    </footer>
  )
}
