import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { LinkButton } from '.'

describe('<LinkButton />', () => {
  it(`should render correctly`, () => {
    const { container } = render(
      <LinkButton to="pathname">Children text</LinkButton>,
      {
        wrapper: MemoryRouter,
      }
    )

    expect(
      screen.getByRole('link', { name: /Children text/i })
    ).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should pass the "to" prop correctly', () => {
    render(<LinkButton to="/pathname">Children text</LinkButton>, {
      wrapper: MemoryRouter,
    })

    expect(
      screen.getByRole('link', { name: /Children text/i })
    ).toHaveAttribute('href', '/pathname')
  })
})
