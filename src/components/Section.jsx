import React from 'react'

export default function Section({children, className}) {
  return (
    <div className={`${className} grid gap-3 max-w-full box-border`}>{children}</div>
  )
}
