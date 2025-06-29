'use client'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-row items-center gap-2">
      counter:
      {' '}
      {count}
      <button
        className={`
          flex h-10 items-center justify-center gap-2 rounded-full border
          border-solid border-transparent bg-foreground px-4 text-sm font-medium
          text-background transition-colors
          hover:bg-[#383838]
          sm:h-12 sm:w-auto sm:px-5 sm:text-base
          dark:hover:bg-[#ccc]
        `}
        type="button"
        onClick={() => setCount(prev => prev + 1)}
      >
        plus 1
      </button>
    </div>
  )
}
