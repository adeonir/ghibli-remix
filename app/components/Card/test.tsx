import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Card, Props } from '.'

const props: Props = {
  id: '1',
  title: 'Hello Card',
  image: 'image.jpg',
}

describe('<Card />', () => {
  it('should render correctly', () => {
    render(<Card {...props} />, { wrapper: MemoryRouter })

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See more' })).toBeInTheDocument()
  })
})
