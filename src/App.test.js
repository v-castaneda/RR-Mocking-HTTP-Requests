import App from './App'
import { render, screen, waitFor } from '@testing-library/react'

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })

test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
})

test("receives GitHub URL", async () => {
  fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/learningToCode1234'}))
  render(<App />)
  const gitHubURL = await waitFor(() => screen.getByRole('link'))
  expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
})

