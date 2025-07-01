import React from 'react'

export default function Tile({children, className}) {
  return (
    <div className={`${className} max-w-full rounded-4xl min-h-72`}>{children}</div>
  )
}
