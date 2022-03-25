import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import { CharactersList, Props } from '.'

const props: Props = {
  characters: [
    {
      id: '1',
      name: 'My Character',
      gender: 'Female',
      age: '13',
      eye_color: 'Black',
      hair_color: 'Black',
    },
  ],
}
describe('<CharactersList />', () => {
  it('should render correctly', () => {
    render(<CharactersList {...props} />, { wrapper: MemoryRouter })

    expect(
      screen.getByRole('heading', { name: 'All characters' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/characters/1')
    expect(screen.getByText('My Character')).toBeInTheDocument()
  })

  it('should render a message if list is empty', () => {
    const props = {
      characters: [],
    }

    render(<CharactersList {...props} />)

    expect(
      screen.getByRole('heading', { name: 'All characters' })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Sorry, no characters listed in this film')
    ).toBeInTheDocument()
  })
})
