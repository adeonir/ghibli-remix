import { render, screen } from '@testing-library/react'

import { Button } from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button>Hello Button</Button>)

    expect(
      screen.getByRole('button', { name: 'Hello Button' })
    ).toBeInTheDocument()
  })
})
