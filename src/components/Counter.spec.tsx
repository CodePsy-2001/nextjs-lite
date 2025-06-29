import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import { Counter } from './Counter'

describe('counter', () => {
  it('renders initial count of 0', () => {
    render(<Counter />)
    const counterText = screen.getByText(/counter:/i)
    expect(counterText).toHaveTextContent('counter: 0')
  })

  it('increments the count when the button is clicked', async () => {
    render(<Counter />)
    const button = screen.getByRole('button', { name: /plus 1/i })
    const user = userEvent.setup()

    // Click the button three times
    await user.click(button)
    await user.click(button)
    await user.click(button)

    // After three clicks, count should be 3
    const counterText = screen.getByText(/counter:/i)
    expect(counterText).toHaveTextContent('counter: 3')
  })
})
