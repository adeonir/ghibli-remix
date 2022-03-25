import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { Banner, Props } from '.'

const props: Props = {
  title: 'The Movie Title',
  image: 'image.jpg',
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    render(<Banner {...props} />, { wrapper: MemoryRouter })

    expect(screen.getByRole('img')).toHaveAttribute('src', props.image)
    expect(screen.getByRole('img')).toHaveAttribute('alt', props.title)
  })
})
