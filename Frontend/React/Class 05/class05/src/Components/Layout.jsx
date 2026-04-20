import React from 'react'

function Layout({header , body}) {
  return (
    <div>
        <header>{header}</header>
        <main>{body}</main>
      
    </div>
  )
}

export default Layout
