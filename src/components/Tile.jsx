import React from 'react'

export default function Tile({children, className}) {
  return (
    <div className={`${className} rounded-4xl h-full min-h-96 bg-blue-50`}>{children}</div>
  )
}
