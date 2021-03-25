import { screen, render } from '@testing-library/react'
import React from 'react'
import App from '.'

describe('<App />', () => {
  it('should render msg Hello World', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /Hello World/i })
    ).toBeInTheDocument()
  })
})
