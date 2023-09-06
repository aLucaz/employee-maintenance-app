import { cleanup, render, screen } from '@testing-library/react'
import { describe, test, expect, afterEach } from 'vitest'
import App from '../src/App'

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  test('Given the off server When the App is rendered Then panel title must be present', () => {
    render(
      <App />
    )
    const title = screen.getByText(/Employees Panel/i)
    expect(title).toBeTruthy()
  })

  test('Given the off server When the App is rendered Then cards must not be present', () => {
    render(<App />)
    const button = screen.queryByText(/View Details/i)
    expect(button).not.toBeTruthy()
  })
})
