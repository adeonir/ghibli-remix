import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { CharacterDetails, Props } from '.'

const props: Props = {
  character: {
    id: '1',
    name: 'My Character',
    gender: 'Female',
    age: '13',
    eye_color: 'Black',
    hair_color: 'Black',
  },
  error: undefined,
  caught: undefined,
}
describe('<CharacterDetails />', () => {
  it('should render correctly', () => {
    render(<CharacterDetails {...props} />, { wrapper: MemoryRouter })

    expect(
      screen.getByRole('heading', { name: 'Character details' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'My Character' })
    ).toBeInTheDocument()
    expect(screen.getByText('Female')).toBeInTheDocument()
    expect(screen.getByText('13')).toBeInTheDocument()
    expect(screen.getAllByText('Black')).toHaveLength(2)
  })

  it('should show an error message', () => {
    const errorProps = {
      ...props,
      error: {
        name: 'Error',
        message: 'An unexpected error happened',
      },
    }

    render(<CharacterDetails {...errorProps} />, { wrapper: MemoryRouter })

    expect(
      screen.getByRole('heading', { name: 'Character details' })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Error' })).toBeInTheDocument()
    expect(screen.getByText('An unexpected error happened')).toBeInTheDocument()
  })

  it('should show an caught message', () => {
    const caughtProps = {
      ...props,
      caught: {
        data: {},
        status: 404,
        statusText: 'Not Found',
      },
    }

    render(<CharacterDetails {...caughtProps} />, { wrapper: MemoryRouter })

    expect(
      screen.getByRole('heading', { name: 'Character details' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Not found' })
    ).toBeInTheDocument()
    expect(screen.getByText('Sorry, nothing to show here')).toBeInTheDocument()
  })
})
