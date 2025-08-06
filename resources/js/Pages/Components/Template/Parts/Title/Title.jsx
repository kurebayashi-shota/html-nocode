import React from 'react'

export default function Thitle({ className, children }) {
  return (
    <div
      className={className}
    >
        <h1 
            className={`font-bold`}
        >
            { children }
        </h1>
    </div>
  )
}