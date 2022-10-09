import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Input } from '.'

describe('<Input />', () => {
  it(`should render correctly`, () => {
    const { container } = render(<Input type="text" />, {
      wrapper: MemoryRouter,
    })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
