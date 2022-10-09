import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Header, Props } from '.'

const props: Props = {
  film: {
    id: 'id',
    characters: [],
    comments: [],
    description: 'description',
    image: 'image',
    movie_banner: 'movie_banner',
    original_title: 'original_title',
    people: ['PersonName'],
    release_date: 'release_date',
    rt_score: '75',
    running_time: 'running_time',
    title: 'title',
  },
}

describe('<Header />', () => {
  it(`should render correctly`, () => {
    const { container } = render(<Header {...props} />, {
      wrapper: MemoryRouter,
    })

    expect(screen.getByRole(`heading`, { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/title/i)).toBeInTheDocument()
    expect(screen.getByText(/description/i)).toBeInTheDocument()
    expect(screen.getByText(/release_date/i)).toBeInTheDocument()
    expect(screen.getByText(/running_time/i)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
