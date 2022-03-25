import { render } from '@testing-library/react'

import * as Icons from '.'

describe('<Icons />', () => {
  const index = Object.keys(Icons)

  index.map((icon) => {
    it(`should render the ${icon} Icon correctly`, () => {
      const { container } = render(<>{Icons[icon as keyof typeof Icons]({})}</>)
      expect(container).toMatchSnapshot()
    })
  })
})
