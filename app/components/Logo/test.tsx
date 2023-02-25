import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { GhibliLogo } from '.'

describe('<GhibliLogo />', () => {
  it(`should render correctly`, () => {
    const { container } = render(<GhibliLogo />, {
      wrapper: MemoryRouter,
    })

    expect(screen.getByLabelText(/Ghibli Logo/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
