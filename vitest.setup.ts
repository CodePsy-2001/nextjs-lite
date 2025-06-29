import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import '@testing-library/jest-dom'

expect.extend({
  toBeInTheDocument: (null as any), // jest-dom matchers are auto-registered by importing '@testing-library/jest-dom'
})

afterEach(() => {
  cleanup()
})
